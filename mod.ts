import type { XcodeRelease } from "./types.ts";

export async function GetXcodeReleases(): Promise<XcodeRelease[]> {
  return await GetXcodeReleasesWithURL("https://xcodereleases.com/data.json");
}

export async function GetXcodeReleasesWithURL(
  url: string,
): Promise<XcodeRelease[]> {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => parseXcodeReleases(data));
}

export function parseXcodeReleases(data: string): XcodeRelease[] {
  return JSON.parse(data);
}
