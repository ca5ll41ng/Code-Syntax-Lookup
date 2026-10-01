---
id: "java-en-function-jarfile-stream"
language: "java"
lang: "en"
category: "function"
name: "JarFile.stream"
signature: "public Stream<JarEntry> stream()"
title: "JarFile.stream"
directive: "method"
module: "java.base/java.util.jar"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/jar/JarFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JarFile.stream

```java
public Stream<JarEntry> stream()
```

Returns an ordered `Stream` over the jar file entries.
 Entries appear in the `Stream` in the order they appear in
 the central directory of the jar file.

**返回**

- an ordered `Stream` of entries in this jar file

**异常**

- **IllegalStateException** — if the jar file has been closed

> *Since 1.8*
