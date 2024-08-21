import React, { useEffect, useState } from "react";

import SubjectSelect from "./SubjectSelect";
import UploadLibrary from "./UploadLibrary";
import UploadTrend from "@/pages/UploadTrend";

const UploadContainer = () => {
  const [subject, setSubject] = useState<string>("trend");

  return (
    <>
      <div className="mt-[80px] px-[10%] py-[5%]">
        <SubjectSelect setSubject={setSubject} />
        {subject == "library" && <UploadLibrary />}
        {subject == "trend" && <UploadTrend />}
      </div>
    </>
  );
};

export default UploadContainer;
