import type { XcodeRelease } from "./types.ts";
import {
  DivideXcodeReleasesByVersion,
  GetXcodeReleasesByRelease,
  GetXcodeReleasesCompatibleVersion,
  IsPatchVersion,
} from "./mod.ts";

/**
 * Get Xcode versions in GitHub hosted
 * - all OS compatible versions side-by-side
 * - for beta, GM versions - latest beta only
 * - old patch versions are deprecated in 3 months
 *
 * See: https://github.com/actions/runner-images?tab=readme-ov-file#support-policy
 *
 * @param xr XcodeReleases all versions
 * @param macOSVersion macOS version that running on this action
 * @returns XcodeRelease[]
 */
export function GetXcodeVersionsInGitHubHosted(
  xr: XcodeRelease[],
  macOSVersion: string,
): XcodeRelease[] {
  let result: XcodeRelease[] = [];
  // all OS compatible versions side-by-side
  const releasesVersions: XcodeRelease[] = GetXcodeReleasesByRelease(
    xr,
    "release",
  );
  const compatibleReleaseVersions: XcodeRelease[] =
    GetXcodeReleasesCompatibleVersion(
      releasesVersions,
      macOSVersion,
    );

  const releasesByVersion = DivideXcodeReleasesByVersion(
    compatibleReleaseVersions,
  );
  for (const [_, releases] of releasesByVersion) {
    // Add not patch version
    const minorVersion = releases.filter((release) => !IsPatchVersion(release));
    result = result.concat(minorVersion);

    // Add not deprecated patch version
    const patchReleases = releases.filter((release) =>
      IsPatchVersion(release) && !IsDeprecatedVersionInGHA(release)
    );
    result = result.concat(patchReleases);
  }

  // for beta, GM versions - latest beta only
  const betaVersions: XcodeRelease[] = GetXcodeReleasesByRelease(xr, "beta");
  result = result.concat(betaVersions[betaVersions.length - 1]);

  result.sort((a, b) => b._versionOrder - a._versionOrder);

  // remove duplicates
  result = result.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return result;
}

/**
 * Is the Xcode release is deprecated as per the support policy (3 months)
 * @param XcodeRelease release
 * @returns boolean
 */
export function IsDeprecatedVersionInGHA(release: XcodeRelease): boolean {
  const date = new Date();
  date.setMonth(date.getMonth() - 3);
  const releaseDate = new Date(
    release.date.year,
    release.date.month - 1,
    release.date.day,
  );
  return releaseDate < date;
}
