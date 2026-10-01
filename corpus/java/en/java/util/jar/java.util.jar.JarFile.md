---
id: "java-en-function-java-util-jar-jarfile"
language: "java"
lang: "en"
category: "function"
name: "java.util.jar.JarFile"
title: "JarFile"
directive: "type"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile

The `JarFile` class is used to read the contents of a jar file
 from any file that can be opened with `java.io.RandomAccessFile`.
 It extends the class `java.util.zip.ZipFile` with support
 for reading an optional `Manifest` entry, and support for
 processing multi-release jar files.  The `Manifest` can be used
 to specify meta-information about the jar file and its entries.

 

A multi-release jar file is a jar file that
 contains a manifest with a main attribute named "Multi-Release",
 a set of "base" entries, some of which are public classes with public
 or protected methods that comprise the public interface of the jar file,
 and a set of "versioned" entries contained in subdirectories of the
 "META-INF/versions" directory.  The versioned entries are partitioned by the
 major version of the Java platform.  A versioned entry, with a version
 `n`, `8 < n`, in the "META-INF/versions/{n}" directory overrides
 the base entry as well as any entry with a version number `i` where
 `8 < i < n`.

 

By default, a `JarFile` for a multi-release jar file is configured
 to process the multi-release jar file as if it were a plain (unversioned) jar
 file, and as such an entry name is associated with at most one base entry.
 The `JarFile` may be configured to process a multi-release jar file by
 creating the `JarFile` with the
 `JarFile` constructor.  The
 `Runtime.Version` object sets a maximum version used when searching for
 versioned entries.  When so configured, an entry name
 can correspond with at most one base entry and zero or more versioned
 entries. A search is required to associate the entry name with the latest
 versioned entry whose version is less than or equal to the maximum version
 (see `getEntry`).

 

Class loaders that utilize `JarFile` to load classes from the
 contents of `JarFile` entries should construct the `JarFile`
 by invoking the `JarFile`
 constructor with the value `Runtime.version()` assigned to the last
 argument.  This assures that classes compatible with the major
 version of the running JVM are loaded from multi-release jar files.

 

 If the `verify` flag is on when opening a signed jar file, the content
 of the jar entry is verified against the signature embedded inside the manifest
 that is associated with its `getRealName() path name`. For a
 multi-release jar file, the content of a versioned entry is verified against
 its own signature and `getCodeSigners` returns its own signers.

 

Please note that the verification process does not include validating the
 signer's certificate. A caller should inspect the return value of
 `getCodeSigners` to further determine if the signature
 can be trusted.

 

 Unless otherwise noted, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be
 thrown.

 
 If the API can not be used to configure a `JarFile` (e.g. to override
 the configuration of a compiled application or library), two `System`
 properties are available.
 
 
- 
 `jdk.util.jar.version` can be assigned a value that is the
 `String` representation of a non-negative integer
 `<= Runtime.version().feature()`.  The value is used to set the effective
 runtime version to something other than the default value obtained by
 evaluating `Runtime.version().feature()`. The effective runtime version
 is the version that the `JarFile`
 constructor uses when the value of the last argument is
 `JarFile.runtimeVersion()`.
 
 
- 
 `jdk.util.jar.enableMultiRelease` can be assigned one of the three
 `String` values true, false, or force.  The
 value true, the default value, enables multi-release jar file
 processing.  The value false disables multi-release jar processing,
 ignoring the "Multi-Release" manifest attribute, and the versioned
 directories in a multi-release jar file if they exist.  Furthermore,
 the method `isMultiRelease` returns false. The value
 force causes the `JarFile` to be initialized to runtime
 versioning after construction.  It effectively does the same as this code:
 `(new JarFile(File, boolean, int, JarFile.runtimeVersion())`.

**参见**

- Manifest
- java.util.zip.ZipFile
- java.util.jar.JarEntry

> *Since 1.2*
