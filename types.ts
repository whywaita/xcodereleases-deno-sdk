/**
 * Types for the Xcode releases.
 */
export type XcodeRelease = {
  _dateOrder: number;
  _swiftOrder: number;
  _versionOrder: number;
  checksums?: Checksums;
  compilers?: Compilers;
  date: DateDay;
  links?: Links;
  name: string;
  requires: string;
  sdks?: SDKs;
  version: Version;
};

export interface Checksums {
  sha1: string;
}

export interface Compilers {
  gcc?: Compiler[];
  llvm?: Compiler[];
  llvm_gcc?: Compiler[];
  clang?: Compiler[];
  swift?: Compiler[];
}

export interface Release {
  release: boolean;
}

export interface Compiler {
  build: string;
  number: string;
  release: Release;
}

export interface Version {
  build: string;
  number: string;
  release: ReleaseVersion;
}

export interface ReleaseVersion {
  beta?: number;
  release?: boolean;
  rc?: number;
  gm?: boolean;
  gmSeed?: number;
  dp?: number;
}

export interface DateDay {
  day: number;
  month: number;
  year: number;
}

export interface Links {
  download?: URL;
  notes?: URL;
}

export interface SDKs {
  macOS?: SDK[];
  iOS?: SDK[];
  tvOS?: SDK[];
  visionOS?: SDK[];
  watchOS?: SDK[];
}

export interface SDK {
  build?: string;
  release: Release;
  number?: string;
}
