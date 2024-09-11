import { Chapter, Unit } from "@prisma/client";
import React from "react";

type Props = {
  chapter: Chapter;
  unit: Unit;
  unitIndex: number;
  chapterIndex: number;
};

const MainVideoSummary = ({
  unit,
  unitIndex,
  chapter,
  chapterIndex,
}: Props) => {
  return (
    <div className="flex-[2] mt-4 pl-4 pr-4 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold">{chapter.name}</h1>
      <div className="relative w-full mt-4 pb-[56.25%] max-h-[24rem]">
        <iframe
          title="chapter video"
          className="absolute top-0 left-0 w-full h-full mx-auto"
          src={`https://www.youtube.com/embed/${chapter.videoId}`}
          allowFullScreen
        />
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-semibold">Summary</h3>
        <p className="mt-2 text-secondary-foreground/80 text-lg">{chapter.summary}</p>
      </div>
    </div>
  );
};

export default MainVideoSummary;
