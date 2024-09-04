# xcodereleases-deno-sdk

xcodereleases-deno-sdk provides Type definition of [xcodereleases.com](https://xcodereleases.com) for deno

## Usage

```typescript
import type { XcodeRelease } from "jsr:@whywaita/xcodereleases-deno-sdk@0.1.7";

// Get all xcode releases
const xr: XcodeRelease[] = await GetXcodeReleases();

// Example 1: all OS compatible versions side-by-side
const releasesVersions: XcodeRelease[] = GetXcodeReleasesByRelease(
    xr,
    "release",
);
const compatibleVersions: XcodeRelease[] =
    GetXcodeReleasesCompatibleVersion(
        releasesVersions,
        macOSVersion,
    );

// Example 2: for beta, GM versions - latest beta only
const betaVersions: XcodeRelease[] = GetXcodeReleasesByRelease(xr, "beta");
result = result.concat(betaVersions[0]);
const gmVersions: XcodeRelease[] = GetXcodeReleasesByRelease(xr, "gm");
result = result.concat(gmVersions[0]);

// Example 3: old patch versions are deprecated in 3 months
const date = new Date();
date.setMonth(date.getMonth() - 3);
const oldVersions: XcodeRelease[] = GetXcodeReleasesSinceDate(xr, date);
```