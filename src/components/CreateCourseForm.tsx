"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

type Props = {};

type Input = {
  file?: FileList;
  additionalInfo?: string;
};

const CreateCourseForm  = (props: Props) => {
  const router = useRouter();
  const { toast } = useToast();

  const { mutate: uploadFile, isLoading } = useMutation({
    mutationFn: async (data: Input) => {
      // Form data for file upload
      const formData = new FormData();
      if (data.file) {
        formData.append("file", data.file[0]); // Assumes a single file
      }
      if (data.additionalInfo) {
        formData.append("additionalInfo", data.additionalInfo);
      }

      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
  });

  const form = useForm<Input>({
    defaultValues: {
      file: undefined,
      additionalInfo: "",
    },
  });

  function onSubmit(data: Input) {
    if (!data.file) {
      toast({
        title: "Error",
        description: "Please upload a file",
        variant: "destructive",
      });
      return;
    }
    uploadFile(data, {
      onSuccess: () => {
        toast({
          title: "Success",
          description: "File uploaded successfully",
        });
        router.push(`/success`);
      },
      onError: (error) => {
        console.error(error);
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      },
    });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6">Upload Your File</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* File Upload Field */}
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium mb-2">Upload PDF/Image</FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    {...field}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Additional Info Field */}
          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium mb-2">Additional Information</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter any additional information (optional)"
                    {...field}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition duration-300"
            size="lg"
          >
            {isLoading ? "Uploading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCourseForm ;
