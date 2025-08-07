"use client";
import React from "react";

function FileConvert() {
  async function fileConvert() {
    try {
      const raw = await fetch("/api/file-convert", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ file: "asndkjasg" }),
      });
      const res = await raw.json();
      console.log(res);
    } catch (error) {}
  }
  return (
    <div>
      <button
        className="border border-white rounded-10 p-2"
        onClick={() => fileConvert()}
      >
        Convert file
      </button>
    </div>
  );
}

export default FileConvert;
