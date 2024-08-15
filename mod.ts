import type { XcodeRelease } from "./types.ts";

export async function GetXcodeReleases(): Promise<XcodeRelease[]> {
  return await fetch("https://xcodereleases.com/data.json")
    .then((response) => response.json())
    .then((data) => parseXcodeReleases(data));
}

export function parseXcodeReleases(data: string): XcodeRelease[] {
  return JSON.parse(data);
}