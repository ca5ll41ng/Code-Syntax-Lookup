---
id: "java-en-function-jarfile-runtimeversion"
language: "java"
lang: "en"
category: "function"
name: "JarFile.runtimeVersion"
signature: "public static Runtime.Version runtimeVersion()"
title: "JarFile.runtimeVersion"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.runtimeVersion

```java
public static Runtime.Version runtimeVersion()
```

Returns the version that represents the effective runtime versioned
 configuration of a multi-release jar file.
 

 By default the feature version number of the returned `Version` will
 be equal to the feature version number of `Runtime.version()`.
 However, if the `jdk.util.jar.version` property is set, the
 returned `Version` is derived from that property and feature version
 numbers may not be equal.

**返回**

- the version that represents the runtime versioned configuration

> *Since 9*
