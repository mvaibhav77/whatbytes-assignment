"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFormContext } from "@/context/FormContext";
import { FormState } from "@/lib/types";
import { clsx } from "clsx";
import { useForm } from "react-hook-form";
import { FaArrowRight, FaHtml5 } from "react-icons/fa6";

const UpdateCard = () => {
  const {
    state: { rank, percentile, currentScore },
    setRank,
    setPercentile,
    setCurrentScore,
  } = useFormContext();

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rank: rank ?? "",
      percentile: percentile ?? "",
      currentScore: currentScore ?? "",
    },
  });

  const onSubmit = (data: FormState) => {
    console.log("Form Data:", data);
    setRank(data.rank);
    setPercentile(data.percentile);
    setCurrentScore(data.currentScore);
  };

  return (
    <Card className="update-card">
      <CardContent className="py-4 flex items-center gap-4 justify-around">
        <FaHtml5 className="text-5xl lg:text-[5vw] text-[#e34c26]" />

        <div className="description">
          <CardTitle className="flex flex-col gap-2">
            <h3>Hyper Text Markup Language</h3>
            <CardDescription>
              Questions: 08 | Duration 15mins | Submitted on 10 Oct 2024
            </CardDescription>
          </CardTitle>
        </div>

        <Dialog>
          <DialogTrigger className="bg-blue-950 text-white rounded-md py-3 px-6">
            Update
          </DialogTrigger>
          <DialogContent className="md:max-w-[600px]">
            <DialogHeader className="mb-6">
              <DialogTitle>Update Scores</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div
                className={clsx(
                  "form-group flex md:flex-row flex-col md:items-center md:gap-4 gap-8 justify-between"
                )}
              >
                <label
                  htmlFor="rank"
                  className="flex items-center md:gap-6 gap-3"
                >
                  <div className="numbering py-1 px-3 rounded-full bg-blue-950 text-white">
                    1
                  </div>
                  <div className="text-label">
                    Update your <span className="font-bold">Rank</span>
                  </div>
                </label>
                <div className="input-group flex flex-col">
                  <input
                    type="number"
                    placeholder="Rank"
                    {...register("rank", {
                      required: "Rank is required",
                      min: { value: 1, message: "Minimum rank is 1" },
                      max: { value: 80, message: "Maximum rank is 80" },
                    })}
                    className="border-2 rounded-md p-2"
                  />

                  {errors.rank && (
                    <span className="text-red-500 text-xs">
                      {errors.rank.message}
                    </span>
                  )}
                </div>
              </div>

              <div
                className={clsx(
                  "form-group flex md:flex-row flex-col md:items-center md:gap-4 gap-8 justify-between"
                )}
              >
                <label
                  htmlFor="rank"
                  className="flex items-center md:gap-6 gap-3"
                >
                  <div className="numbering py-1 px-3  rounded-full bg-blue-950 text-white">
                    2
                  </div>
                  <div className="text-label">
                    Update your <span className="font-bold">Percentile</span>
                  </div>
                </label>
                <div className="input-group flex flex-col">
                  <input
                    type="number"
                    placeholder="Percentile"
                    {...register("percentile", {
                      required: "Percentile is required",
                      min: {
                        value: 0,
                        message: "Minimum percentile is 0",
                      },
                      max: {
                        value: 100,
                        message: "Maximum percentile is 100",
                      },
                    })}
                    className="border-2 rounded-md p-2 mt-2"
                  />
                  {errors.percentile && (
                    <span className="text-red-500 text-xs">
                      {errors.percentile.message}
                    </span>
                  )}
                </div>
              </div>

              <div
                className={clsx(
                  "form-group flex md:flex-row flex-col md:items-center gap-4 justify-between"
                )}
              >
                <label
                  htmlFor="rank"
                  className="flex items-center md:gap-6 gap-3"
                >
                  <div className="numbering py-1 px-3 rounded-full bg-blue-950 text-white">
                    3
                  </div>
                  <div className="text-label">
                    Update your <span className="font-bold">Current Score</span>
                  </div>
                </label>
                <div className="input-group flex flex-col">
                  <input
                    type="number"
                    placeholder="Current Score"
                    {...register("currentScore", {
                      required: "Score is required",
                      min: { value: 0, message: "Minimum score is 0" },
                      max: { value: 15, message: "Maximum score is 15" },
                    })}
                    className="border-2 rounded-md p-2 mt-2"
                  />
                  {errors.currentScore && (
                    <span className="text-red-500 text-xs">
                      {errors.currentScore.message}
                    </span>
                  )}
                </div>
              </div>

              <DialogFooter className="mt-4">
                <DialogClose className="text-blue-950 border-2 rounded-md px-5">
                  Cancel
                </DialogClose>
                <DialogClose
                  type="submit"
                  className="flex items-center gap-2 bg-blue-950 text-white py-2 px-4 rounded-md cursor-pointer"
                >
                  Save <FaArrowRight />
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default UpdateCard;
