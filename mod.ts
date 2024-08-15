import type { XcodeRelease } from "./types.ts";

/**
 * Get the Xcode releases from https://xcodereleases.com/data.json
 * @returns {Promise<XcodeRelease[]>}
 */
export async function GetXcodeReleases(): Promise<XcodeRelease[]> {
  return await GetXcodeReleasesWithURL("https://xcodereleases.com/data.json");
}

/**
 * Get the Xcode releases from a URL
 * @param url
 * @returns {Promise<XcodeRelease[]>}
 */
export async function GetXcodeReleasesWithURL(
  url: string,
): Promise<XcodeRelease[]> {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => parseXcodeReleases(data));
}

/**
 * Parse the Xcode releases from a string
 * @param data
 * @returns XcodeRelease[]
 */
export function parseXcodeReleases(data: string): XcodeRelease[] {
  return JSON.parse(data);
}
