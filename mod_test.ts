import { assertEquals } from "@std/assert";
import {
  GetXcodeReleaseByVersion,
  GetXcodeReleasesByRelease,
  GetXcodeReleasesSinceDate,
  GetXcodeReleasesUntilDate,
} from "./mod.ts";
import { parseXcodeReleases } from "./mod.ts";
import type { XcodeRelease } from "./types.ts";

Deno.test(function GetXcodeReleaseByVersion_OK() {
  const releases: XcodeRelease[] = parseXcodeReleases(input);
  const version: string = "16.1";
  const result: XcodeRelease | undefined = GetXcodeReleaseByVersion(
    releases,
    version,
  );
  assertEquals(result?.version.number, version);
});

Deno.test(function GetXcodeReleaseByVersion_NOK() {
  const releases: XcodeRelease[] = parseXcodeReleases(input);
  const version: string = "16.2";
  const result: XcodeRelease | undefined = GetXcodeReleaseByVersion(
    releases,
    version,
  );
  assertEquals(result, undefined);
});

Deno.test(function GetXcodeReleasesByRelease_OK() {
  const releases: XcodeRelease[] = parseXcodeReleases(input);
  const result: XcodeRelease[] = GetXcodeReleasesByRelease(releases, "release");
  assertEquals(result.length, 3);
});

Deno.test(function GetXcodeReleasesSinceDate_Since202408() {
  const releases: XcodeRelease[] = parseXcodeReleases(input);
  const date: Date = new Date("2024-08-01");
  const result: XcodeRelease[] = GetXcodeReleasesSinceDate(releases, date);
  assertEquals(result.length, 2);
});

Deno.test(function GetXcodeReleasesUntilDate_Until202408() {
  const releases: XcodeRelease[] = parseXcodeReleases(input);
  const date: Date = new Date("2024-08-01");
  const result: XcodeRelease[] = GetXcodeReleasesUntilDate(releases, date);
  assertEquals(result.length, releases.length - 2);
});

const input: string = `
[
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
  },
  {
    "_dateOrder": 20240806,
    "_swiftOrder": 6000000,
    "_versionOrder": 16000000005,
    "checksums": {
      "sha1": "fc57b98bde42196a1af1f9452419a9d848d4fdb1"
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
      "day": 6,
      "month": 8,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_16_beta_5/Xcode_16_beta_5.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-16-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.5",
    "sdks": {
      "iOS": [
        {
          "build": "22A5326g",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "24A5309c",
          "number": "15.0",
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
      "build": "16A5221g",
      "number": "16.0",
      "release": {
        "beta": 5
      }
    }
  },
  {
    "_dateOrder": 20240723,
    "_swiftOrder": 6000000,
    "_versionOrder": 16000000004,
    "checksums": {
      "sha1": "4de78bdf473ecaf42e358e91c3886c2768cf338b"
    },
    "compilers": {
      "clang": [
        {
          "build": "1600.0.23.1",
          "number": "16.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "6.0.0.6.8",
          "number": "6.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 23,
      "month": 7,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_16_beta_4/Xcode_16_beta_4.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-16-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.5",
    "sdks": {
      "iOS": [
        {
          "build": "22A5316f",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "24A5298f",
          "number": "15.0",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "22J5324f",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "22N5286f",
          "number": "2.0",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "22R5318f",
          "number": "11.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "16A5211f",
      "number": "16.0",
      "release": {
        "beta": 4
      }
    }
  },
  {
    "_dateOrder": 20240708,
    "_swiftOrder": 6000000,
    "_versionOrder": 16000000003,
    "checksums": {
      "sha1": "d79bd4475e17a0db2fb59861f1220de3f6518baa"
    },
    "compilers": {
      "clang": [
        {
          "build": "1600.0.22.7",
          "number": "16.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "6.0.0.5.15",
          "number": "6.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 8,
      "month": 7,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_16_beta_3/Xcode_16_beta_3.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-16-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.5",
    "sdks": {
      "iOS": [
        {
          "build": "22A5307d",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "24A5289c",
          "number": "15.0",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "22J5315c",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "22N5277d",
          "number": "2.0",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "22R5309d",
          "number": "11.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "16A5202i",
      "number": "16.0",
      "release": {
        "beta": 3
      }
    }
  },
  {
    "_dateOrder": 20240625,
    "_swiftOrder": 6000000,
    "_versionOrder": 16000000002,
    "checksums": {
      "sha1": "35acecd39dd330039110b96b40c5e60ec70db4c2"
    },
    "compilers": {
      "clang": [
        {
          "build": "1600.0.21.4",
          "number": "16.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "6.0.0.4.52",
          "number": "6.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 25,
      "month": 6,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_16_beta_2/Xcode_16_beta_2.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-16-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.5",
    "sdks": {
      "iOS": [
        {
          "build": "22A5297f",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "24A5279g",
          "number": "15.0",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "22J5305d",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "22N5267d",
          "number": "2.0",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "22R5299c",
          "number": "11.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "16A5171r",
      "number": "16.0",
      "release": {
        "beta": 2
      }
    }
  },
  {
    "_dateOrder": 20240610,
    "_swiftOrder": 6000000,
    "_versionOrder": 16000000001,
    "checksums": {
      "sha1": "5be49fe777439f9935ec7c131116bd4854ee3017"
    },
    "compilers": {
      "clang": [
        {
          "build": "1600.0.20.10",
          "number": "16.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "6.0.0.3.300",
          "number": "6.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 10,
      "month": 6,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_16_beta/Xcode_16_beta.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-16-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.5",
    "sdks": {
      "iOS": [
        {
          "build": "22A5282g",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "24A5264i",
          "number": "15.0",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "22J5290f",
          "number": "18.0",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "22N5252g",
          "number": "2.0",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "22R5284g",
          "number": "11.0",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "16A5171c",
      "number": "16.0",
      "release": {
        "beta": 1
      }
    }
  },
  {
    "_dateOrder": 20240513,
    "_swiftOrder": 5010000,
    "_versionOrder": 15004000999,
    "checksums": {
      "sha1": "0e841786aaaff88feedf648f2b8b273616c39fdb"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.3.9.4",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.10.0.13",
          "number": "5.10",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 13,
      "month": 5,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.4/Xcode_15.4.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_4-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.0",
    "sdks": {
      "iOS": [
        {
          "build": "21F77",
          "number": "17.5",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23F73",
          "number": "14.5",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21L566",
          "number": "17.5",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21O5565d",
          "number": "1.2",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21T569",
          "number": "10.5",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15F31d",
      "number": "15.4",
      "release": {
        "release": true
      }
    }
  },
  {
    "_dateOrder": 20240507,
    "_swiftOrder": 5010000,
    "_versionOrder": 15004000901,
    "checksums": {
      "sha1": "5c2a760dec99c7170e1f86e6b05bf3c073bad276"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.3.9.4",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.10.0.13",
          "number": "5.10",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 7,
      "month": 5,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.4_Release_Candidate/Xcode_15.4_Release_Candidate.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_4-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.0",
    "sdks": {
      "iOS": [
        {
          "build": "21F77",
          "number": "17.5",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23F73",
          "number": "14.5",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21L566",
          "number": "17.5",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21O5565d",
          "number": "1.2",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21T569",
          "number": "10.5",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15F31c",
      "number": "15.4",
      "release": {
        "rc": 1
      }
    }
  },
  {
    "_dateOrder": 20240416,
    "_swiftOrder": 5010000,
    "_versionOrder": 15004000001,
    "checksums": {
      "sha1": "cbde3cae8a8ef10e99b2c75f64dda42a5085b7e4"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.3.9.4",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.10.0.13",
          "number": "5.10",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 16,
      "month": 4,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.4_beta/Xcode_15.4_beta.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_4-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.0",
    "sdks": {
      "iOS": [
        {
          "build": "21F5058d",
          "number": "17.5",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23F5059d",
          "number": "14.5",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21L5553d",
          "number": "17.5",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21O5565d",
          "number": "1.2",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21T5555c",
          "number": "10.5",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15F5021i",
      "number": "15.4",
      "release": {
        "beta": 1
      }
    }
  },
  {
    "_dateOrder": 20240305,
    "_swiftOrder": 5010000,
    "_versionOrder": 15003000999,
    "checksums": {
      "sha1": "f5fc8f91c15ae9d64dcce913a9f012282b062c2c"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.3.9.4",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.10.0.13",
          "number": "5.10",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 5,
      "month": 3,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.3/Xcode_15.3.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_3-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.0",
    "sdks": {
      "iOS": [
        {
          "build": "21E210",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23E208",
          "number": "14.4",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21L224",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21O200",
          "number": "1.1",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21T214",
          "number": "10.4",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15E204a",
      "number": "15.3",
      "release": {
        "release": true
      }
    }
  },
  {
    "_dateOrder": 20240304,
    "_swiftOrder": 5010000,
    "_versionOrder": 15003000902,
    "checksums": {
      "sha1": "f5fc8f91c15ae9d64dcce913a9f012282b062c2c"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.3.9.4",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.10.0.13",
          "number": "5.10",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 4,
      "month": 3,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.3_Release_Candidate_2/Xcode_15.3_Release_Candidate_2.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_3-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.0",
    "sdks": {
      "iOS": [
        {
          "build": "21E210",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23E208",
          "number": "14.4",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21L224",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21O200",
          "number": "1.1",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21T214",
          "number": "10.4",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15E204a",
      "number": "15.3",
      "release": {
        "rc": 2
      }
    }
  },
  {
    "_dateOrder": 20240227,
    "_swiftOrder": 5010000,
    "_versionOrder": 15003000901,
    "checksums": {
      "sha1": "cb1dbf26cf046d401af3b151f393459b66b9a4a2"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.3.9.4",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.10.0.13",
          "number": "5.10",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 27,
      "month": 2,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.3_Release_Candidate/Xcode_15.3_Release_Candidate.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_3-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.0",
    "sdks": {
      "iOS": [
        {
          "build": "21E212",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23E5196c",
          "number": "14.4",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21L5212c",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21O5188b",
          "number": "1.1",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21T5202c",
          "number": "10.4",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15E5202a",
      "number": "15.3",
      "release": {
        "rc": 1
      }
    }
  },
  {
    "_dateOrder": 20240213,
    "_swiftOrder": 5010000,
    "_versionOrder": 15003000003,
    "checksums": {
      "sha1": "facfba2cd84292b748abae4196509fc38dbf1144"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.3.9.4",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.10.0.13",
          "number": "5.10",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 13,
      "month": 2,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.3_beta_3/Xcode_15.3_beta_3.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_3-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.0",
    "sdks": {
      "iOS": [
        {
          "build": "21E5200b",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23E5196c",
          "number": "14.4",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21L5212c",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21O5188b",
          "number": "1.1",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21T5202c",
          "number": "10.4",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15E5194e",
      "number": "15.3",
      "release": {
        "beta": 3
      }
    }
  },
  {
    "_dateOrder": 20240206,
    "_swiftOrder": 5010000,
    "_versionOrder": 15003000002,
    "checksums": {
      "sha1": "3de2de44b6dff33022a8bc2c5abba0c2fdddc3f4"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.3.9.3",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.10.0.12.7",
          "number": "5.10",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 6,
      "month": 2,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.3_beta_2/Xcode_15.3_beta_2.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_3-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.0",
    "sdks": {
      "iOS": [
        {
          "build": "21E5195d",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23E5191c",
          "number": "14.4",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21L5206e",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21O5181e",
          "number": "1.1",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21T5196c",
          "number": "10.4",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15E5188j",
      "number": "15.3",
      "release": {
        "beta": 2
      }
    }
  },
  {
    "_dateOrder": 20240125,
    "_swiftOrder": 5010000,
    "_versionOrder": 15003000001,
    "checksums": {
      "sha1": "b842a4de915788844d4291e12b5f2d390abc50b4"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.3.7.5",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.10.0.10.5",
          "number": "5.10",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 25,
      "month": 1,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.3_beta/Xcode_15.3_beta.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_3-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "14.0",
    "sdks": {
      "iOS": [
        {
          "build": "21E5184g",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23E5180g",
          "number": "14.4",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21L5195f",
          "number": "17.4",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21N301",
          "number": "1.0",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21T5185f",
          "number": "10.4",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15E5178i",
      "number": "15.3",
      "release": {
        "beta": 1
      }
    }
  },
  {
    "_dateOrder": 20240108,
    "_swiftOrder": 5009002,
    "_versionOrder": 15002000999,
    "checksums": {
      "sha1": "3f1e6943264ba640f83e655768df439902acc406"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.1.0.2.5",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.9.2.2.56",
          "number": "5.9.2",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 8,
      "month": 1,
      "year": 2024
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.2/Xcode_15.2.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_2-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "13.5",
    "sdks": {
      "iOS": [
        {
          "build": "21C52",
          "number": "17.2",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23C53",
          "number": "14.2",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21K354",
          "number": "17.2",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21N301",
          "number": "1.0",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21S355",
          "number": "10.2",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15C500b",
      "number": "15.2",
      "release": {
        "release": true
      }
    }
  },
  {
    "_dateOrder": 20231212,
    "_swiftOrder": 5009002,
    "_versionOrder": 15002000001,
    "checksums": {
      "sha1": "b6e2a7058c0464ecf0b3f4f286b5b5ea2dfbaa8d"
    },
    "compilers": {
      "clang": [
        {
          "build": "1500.1.0.2.5",
          "number": "15.0.0",
          "release": {
            "release": true
          }
        }
      ],
      "swift": [
        {
          "build": "5.9.2.2.56",
          "number": "5.9.2",
          "release": {
            "release": true
          }
        }
      ]
    },
    "date": {
      "day": 12,
      "month": 12,
      "year": 2023
    },
    "links": {
      "download": {
        "url": "https://download.developer.apple.com/Developer_Tools/Xcode_15.2_beta/Xcode_15.2_beta.xip"
      },
      "notes": {
        "url": "https://developer.apple.com/documentation/xcode-release-notes/xcode-15_2-release-notes"
      }
    },
    "name": "Xcode",
    "requires": "13.5",
    "sdks": {
      "iOS": [
        {
          "build": "21C52",
          "number": "17.2",
          "release": {
            "release": true
          }
        }
      ],
      "macOS": [
        {
          "build": "23C53",
          "number": "14.2",
          "release": {
            "release": true
          }
        }
      ],
      "tvOS": [
        {
          "build": "21K354",
          "number": "17.2",
          "release": {
            "release": true
          }
        }
      ],
      "visionOS": [
        {
          "build": "21N301",
          "number": "1.0",
          "release": {
            "release": true
          }
        }
      ],
      "watchOS": [
        {
          "build": "21S355",
          "number": "10.2",
          "release": {
            "release": true
          }
        }
      ]
    },
    "version": {
      "build": "15C5500c",
      "number": "15.2",
      "release": {
        "beta": 1
      }
    }
  }
]`;
