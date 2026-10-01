---
id: "java-en-function-jarfile-getversion"
language: "java"
lang: "en"
category: "function"
name: "JarFile.getVersion"
signature: "public final Runtime.Version getVersion()"
title: "JarFile.getVersion"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.getVersion

```java
public final Runtime.Version getVersion()
```

Returns the maximum version used when searching for versioned entries.
 

 If this `JarFile` is not a multi-release jar file or is not
 configured to be processed as such, then the version returned will be the
 same as that returned from `baseVersion`.

**返回**

- the maximum version

> *Since 9*
