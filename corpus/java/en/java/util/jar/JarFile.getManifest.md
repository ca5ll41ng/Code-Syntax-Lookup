---
id: "java-en-function-jarfile-getmanifest"
language: "java"
lang: "en"
category: "function"
name: "JarFile.getManifest"
signature: "public Manifest getManifest() throws IOException"
title: "JarFile.getManifest"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.getManifest

```java
public Manifest getManifest() throws IOException
```

Returns the jar file manifest, or `null` if none.

**返回**

- the jar file manifest, or `null` if none

**异常**

- **IllegalStateException** — may be thrown if the jar file has been closed
- **IOException** — if an I/O error has occurred
