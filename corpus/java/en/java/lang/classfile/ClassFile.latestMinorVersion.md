---
id: "java-en-function-classfile-latestminorversion"
language: "java"
lang: "en"
category: "function"
name: "ClassFile.latestMinorVersion"
signature: "static int latestMinorVersion()"
title: "ClassFile.latestMinorVersion"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFile.latestMinorVersion

```java
static int latestMinorVersion()
```

{@return the latest class minor version supported by the current runtime}

 This does not report the `PREVIEW_MINOR_VERSION` when the current
 runtime has preview feature enabled, as `class` files with a major
 version other than `latestMajorVersion` and the preview minor
 version are not supported.
