import { useQuery } from "@tanstack/react-query";
import platforms from "../Data/platforms";
import apiClient from "../services/api-client";
import { Platform } from "../components/PlatformSelector";
import { FetchResponse } from "../services/api-client";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
