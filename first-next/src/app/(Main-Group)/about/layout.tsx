import React, { Suspense } from "react";

function layout({ children }: { children: React.ReactElement }) {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <div className="bg-gray-400 animate-pulse w-40 h-40"></div>
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}

export default layout;
