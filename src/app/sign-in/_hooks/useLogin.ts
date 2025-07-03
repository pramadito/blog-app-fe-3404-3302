import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Payload {
  login: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const { data } = await axiosInstance.post("/api/users/login", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("sign in success");
      router.replace("/");
    },
    onError: (error: AxiosError<{ message: string; code: number }>) => {
      toast.error(error.response?.data.message ?? "Something went wrong!");
    },
  });
};

export default useLogin;
