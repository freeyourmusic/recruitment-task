import { fetchData } from "./fetchData";

export function searchMusic({
  query,
  jwtToken,
}: {
  query: string;
  jwtToken: string;
}) {
  return fetchData({
    url: `https://api.musicapi.com/api/${data.integrationUserUUID}/search?limitParam=10`,
    jwtToken,
    method: "POST",
    data: {
      type: "track",
      track: query,
    },
  });
}
