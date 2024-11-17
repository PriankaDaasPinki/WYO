import React from "react";

import projectListData from "../../data/projects/projectListData";
import Card from "../../components/project/Card";

function ProjectList() {
  let items = [];
  items = projectListData.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return <div className="row justify-content-start m-0 mt-2 p-0">{items}</div>;
}

export default ProjectList;
