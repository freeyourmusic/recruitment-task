export async function fetchData(props: {
  url: string;
  data?: Record<string, string | number>;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  jwtToken: string;
}) {
  const { url, data, method = "GET", jwtToken } = props;
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `DevToken ${jwtToken}`,
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  return response.json();
}
