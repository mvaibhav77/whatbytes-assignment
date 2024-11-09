import React from "react";

type Props = {
  title: string;
};

const PageHeader = ({ title }: Props) => {
  return (
    <div className="page-header">
      <h1 className="text-xl text-slate-500">{title}</h1>
    </div>
  );
};

export default PageHeader;
