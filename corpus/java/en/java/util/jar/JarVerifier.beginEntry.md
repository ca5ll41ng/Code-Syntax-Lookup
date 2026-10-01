---
id: "java-en-function-jarverifier-beginentry"
language: "java"
lang: "en"
category: "function"
name: "JarVerifier.beginEntry"
signature: "public void beginEntry(JarEntry je, ManifestEntryVerifier mev) throws IOException"
title: "JarVerifier.beginEntry"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarVerifier.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarVerifier.beginEntry

```java
public void beginEntry(JarEntry je, ManifestEntryVerifier mev) throws IOException
```

This method scans to see which entry we're parsing and
 keeps various state information depending on what type of
 file is being parsed.
