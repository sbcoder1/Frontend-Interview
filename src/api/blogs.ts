import axios from "axios";

const API_URL = "http://localhost:3001";

export interface Blog {
  id?: number;
  title: string;
  category: string[];
  description: string;
  content: string;
  coverImage: string;
  date: string;
}

// GET all blogs
export const getBlogs = async (): Promise<Blog[]> => {
  const response = await axios.get(`${API_URL}/blogs`);
  return response.data;
};

// GET blog by ID
export const getBlogById = async (id: number): Promise<Blog> => {
  const response = await axios.get(`${API_URL}/blogs/${id}`);
  return response.data;
};

// CREATE new blog
export const createBlog = async (blog: Blog): Promise<Blog> => {
  const response = await axios.post(`${API_URL}/blogs`, blog);
  return response.data;
};
