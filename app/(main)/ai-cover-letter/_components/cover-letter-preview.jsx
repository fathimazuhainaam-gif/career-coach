"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({ content, onContentChange }) => {
  return (
    <div className="py-4">
      <MDEditor value={content} onChange={onContentChange} preview="live" height={700} />
    </div>
  );
};

export default CoverLetterPreview;
