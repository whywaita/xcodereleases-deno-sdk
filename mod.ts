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
 * The response sorted by _versionOrder
 * @param url
 * @returns {Promise<XcodeRelease[]>}
 */
export async function GetXcodeReleasesWithURL(
  url: string,
): Promise<XcodeRelease[]> {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => parseXcodeReleases(data))
    .then((releases) =>
      releases.sort((a, b) => a._versionOrder - b._versionOrder)
    );
}

/**
 * Parse the Xcode releases from a string
 * @param data
 * @returns XcodeRelease[]
 */
export function parseXcodeReleases(data: string): XcodeRelease[] {
  return JSON.parse(data);
}

/**
 * Get the Xcode release by version
 * @param releases
 * @param version
 * @returns XcodeRelease[]
 */
export function GetXcodeReleaseByVersion(
  releases: XcodeRelease[],
  version: string,
): XcodeRelease | undefined {
  return releases.find((release) => release.version.number === version);
}

/**
 * Get the Xcode releases by version
 * @param releases: XcodeRelease[]
 * @param version: string
 * @returns XcodeRelease[]
 */
export function GetXcodeReleasesByRelease(
  releases: XcodeRelease[],
  releaseType: "release" | "beta" | "rc" | "gm" | "gmSeed" | "dp",
): XcodeRelease[] {
  switch (releaseType) {
    case "release":
      return releases.filter((release) => release.version.release.release);
    case "beta":
      return releases.filter((release) =>
        release.version.release.beta !== undefined
      );
    case "rc":
      return releases.filter((release) =>
        release.version.release.rc !== undefined
      );
    case "gm":
      return releases.filter((release) => release.version.release.gm);
    case "gmSeed":
      return releases.filter((release) =>
        release.version.release.gmSeed !== undefined
      );
    case "dp":
      return releases.filter((release) =>
        release.version.release.dp !== undefined
      );
  }
}

/**
 * Get the Xcode releases until date
 * @param releases
 * @param date
 * @returns XcodeRelease[]
 */
export function GetXcodeReleasesUntilDate(
  releases: XcodeRelease[],
  date: Date,
): XcodeRelease[] {
  return releases.filter((release) => {
    const releaseDate = new Date(
      release.date.year,
      release.date.month - 1,
      release.date.day,
    );

    return releaseDate <= date;
  });
}

/**
 * Get the Xcode releases since date
 * @param releases
 * @param date
 * @returns XcodeRelease[]
 */
export function GetXcodeReleasesSinceDate(
  releases: XcodeRelease[],
  date: Date,
): XcodeRelease[] {
  return releases.filter((release) => {
    const releaseDate = new Date(
      release.date.year,
      release.date.month - 1,
      release.date.day,
    );

    return releaseDate >= date;
  });
}

/**
 * Get the Xcode releases compatible with macOS version
 * @param releases
 * @param macOSVersion
 * @returns XcodeReleases[]
 */
export function GetXcodeReleasesCompatibleVersion(
  releases: XcodeRelease[],
  macOSVersion: string,
): XcodeRelease[] {
  // requires: "14.5" support macOS 14.5+
  const [major, minor] = macOSVersion.split(".");
  const majorVersion = parseInt(major);
  const minorVersion = parseInt(minor);

  return releases.filter((release) => {
    const [requiredMajor, requiredMinor] = release.requires.split(".");
    const requiredMajorVersion = parseInt(requiredMajor);
    const requiredMinorVersion = parseInt(requiredMinor);

    return majorVersion > requiredMajorVersion ||
      (majorVersion === requiredMajorVersion &&
        minorVersion >= requiredMinorVersion);
  });
}

export type { XcodeRelease } from "./types.ts";
