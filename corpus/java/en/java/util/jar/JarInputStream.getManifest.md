---
id: "java-en-function-jarinputstream-getmanifest"
language: "java"
lang: "en"
category: "function"
name: "JarInputStream.getManifest"
signature: "public Manifest getManifest()"
title: "JarInputStream.getManifest"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarInputStream.getManifest

```java
public Manifest getManifest()
```

Returns the `Manifest` for this JAR file when it is the first entry
 in the stream (or the second entry if the first entry in the stream is
 `META-INF/` and the second entry is `META-INF/MANIFEST.MF`), or
 `null` otherwise.

**返回**

- the `Manifest` for this JAR file, or `null` otherwise.
