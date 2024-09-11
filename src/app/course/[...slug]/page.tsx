import MainVideoSummary from "@/components/MainVideoSummary";
import QuizCards from "@/components/QuizCards";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string[];
  };
};

const CoursePage = async ({ params: { slug } }: Props) => {
  const [courseId, unitIndexParam, chapterIndexParam] = slug;

  // Fetch the course along with units, chapters, and questions
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      units: {
        include: {
          chapters: {
            include: { questions: true }, // Questions for the quiz
          },
        },
      },
    },
  });

  // Redirect if course not found
  if (!course) {
    return redirect("/gallery");
  }

  // Parse the unit and chapter index
  let unitIndex = parseInt(unitIndexParam);
  let chapterIndex = parseInt(chapterIndexParam);

  const unit = course.units[unitIndex];
  if (!unit) {
    return redirect("/gallery");
  }

  const chapter = unit.chapters[chapterIndex];
  if (!chapter) {
    return redirect("/gallery");
  }

  return (
    <div>
      <div className="px-8">
        <div className="flex">
          {/* Render the video summary component */}
          <MainVideoSummary
            chapter={chapter}
            chapterIndex={chapterIndex}
            unit={unit}
            unitIndex={unitIndex}
          />

          {/* Render the quiz cards for the chapter */}
          <QuizCards chapter={chapter} />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
