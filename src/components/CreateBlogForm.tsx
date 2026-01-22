import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog, Blog } from "../api/blogs";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationFn: (newBlog: Blog) => createBlog(newBlog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setTitle("");
      setDescription("");
      setContent("");
    },
  });

  const handleSubmit = () => {
    if (!title || !description || !content) return;

    mutation.mutate({
      title,
      description,
      content,
      category: ["TECH"],
      coverImage: "",
      date: new Date().toISOString(),
    });
  };

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog, Blog } from "../api/blogs";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationFn: (newBlog: Blog) => createBlog(newBlog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setTitle("");
      setDescription("");
      setContent("");
    },
  });

  const handleSubmit = () => {
    if (!title || !description || !content) return;

    mutation.mutate({
      title,
      description,
      content,
      category: ["TECH"],
      coverImage: "",
      date: new Date().toISOString(),
    });
  };

return (
  <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
    {/* Header */}
    <div className="px-6 py-5 border-b bg-slate-50">
      <h2 className="text-xl font-bold text-gray-900">
        Create New Blog
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Publish a new article to the blog feed
      </p>
    </div>

    {/* Form Body */}
    <div className="px-6 py-6 space-y-6">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          className="w-full h-11 rounded-lg border px-4 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Eg. Future of AI in Finance"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <input
          className="w-full h-11 rounded-lg border px-4 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Short summary shown in blog list"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          rows={6}
          className="w-full rounded-lg border px-4 py-3 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write the full blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>

    {/* Footer */}
    <div className="px-6 py-4 border-t bg-slate-50">
      <button
        onClick={handleSubmit}
        disabled={mutation.isPending}
        className="w-full h-11 rounded-lg bg-blue-600
                   text-white text-sm font-semibold
                   hover:bg-blue-700 transition
                   disabled:opacity-60"
      >
        {mutation.isPending ? "Publishing..." : "Publish Blog"}
      </button>
    </div>
  </div>
);

}
