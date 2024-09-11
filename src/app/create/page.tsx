import { getAuthSession } from "@/lib/auth";
import React from "react";
import { redirect } from "next/navigation";
import CreateCourseForm from "@/components/CreateCourseForm";

type Props = {};

const CreatePage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/gallery");
  }
  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">
      SUPER
      </h1>
      <div className="flex p-4 mt-5 border-none text-xl">
        <h2>
        Transform Text into Engaging Videos Instantly. Upload PDFs or Brochures and Automatically Generate Video Content with Integrated Quizzes and Analytics.
        </h2>
      </div>

      <CreateCourseForm />
    </div>
  );
};

export default CreatePage;