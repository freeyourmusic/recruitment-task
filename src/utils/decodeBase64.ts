export function decodeBase64(data64: string) {
  const dataString = Buffer.from(data64, "base64").toString("utf8");
  return JSON.parse(dataString);
}
