import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import type { XcodeRelease } from "./types.ts";
import { parseXcodeReleases } from "./mod.ts";

Deno.test(function parseJSON_OK() {
  const testInput: string = `[
  {
    "_dateOrder": 20240812,
    "_swiftOrder": 6000000,
    "_versionOrder": 16001000001,
    "checksums": {
      "sha1": "0ecc3cc5640ee37036422a89497e41544aecf320"
    },
    "compilers": {
      "clang": [
        {
          "build": "1600.0.24.1",
          "number": "16.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "6.0.0.7.6",
          "number": "6.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 12,
      "month": 8,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_16.1_beta/Xcode_16.1_beta.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-16_1-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.5",
    "sdks": {
      "iOS": [
        {
          "build": "22B5023b",
          "number": "18.1",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "24B5024b",
          "number": "15.1",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "22J5335e",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "22N5297d",
          "number": "2.0",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "22R5328f",
          "number": "11.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "16B5001e",
      "number": "16.1",
      "release": {
        "beta": 1
      }
    }
  }
]`;
  const got: XcodeRelease[] = parseXcodeReleases(testInput);

  assertEquals(got.length, 1);
  assertEquals(
    got[0].checksums?.sha1,
    "0ecc3cc5640ee37036422a89497e41544aecf320",
  );
  assertEquals(got[0].name, "Xcode");
  assertEquals(got[0].requires, "14.5");

  assertEquals(got[0].compilers?.clang?.length, 1);
  assertEquals(got[0].compilers?.clang?.[0].build, "1600.0.24.1");
  assertEquals(got[0].compilers?.clang?.[0].number, "16.0.0");
  assertEquals(got[0].compilers?.clang?.[0].release.release, true);

  assertEquals(got[0].sdks?.iOS?.length, 1);
  assertEquals(got[0].sdks?.iOS?.[0].build, "22B5023b");
  assertEquals(got[0].sdks?.iOS?.[0].number, "18.1");
  assertEquals(got[0].sdks?.iOS?.[0].release.release, true);
});
