/**
 * Helper function to extract ids from the resource's url.
 * `"https://swapi.dev/api/planets/1/"` => `"1"`
 * @param url
 * @returns
 */
export default function getIdFromUrl(url: string): string | undefined {
  if (!url) return undefined;

  const segments = url.split("/");
  return segments[segments.length - 2];
}
