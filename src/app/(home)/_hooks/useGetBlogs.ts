import { axiosInstance } from "@/lib/axios";
import { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

const useGetBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Blog[]>("/api/data/Blogs");
      return data;
    },
  });
};

export default useGetBlogs;
