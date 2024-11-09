import ComparisonGraph from "@/components/ComparisonGraph";
import PageHeader from "@/components/PageHeader";
import QuickStatistics from "@/components/QuickStatistics";
import UpdateCard from "@/components/UpdateCard";

export default function Home() {
  return (
    <div className="skill-test w-full py-6 px-4 flex flex-col gap-4">
      {/* heading */}
      <PageHeader title={"Skill Test"} />

      {/* main content */}
      <div className="main-content flex md:flex-row flex-col gap-6 w-full">
        <div className="col-1 flex-1 flex flex-col gap-6">
          <UpdateCard />
          <QuickStatistics />
          <ComparisonGraph />
        </div>
        <div className="col-2 flex-1">COL 2</div>
      </div>
    </div>
  );
}
