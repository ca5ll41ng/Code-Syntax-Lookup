---
id: "java-en-function-gzipoutputstream-gzipoutputstream"
language: "java"
lang: "en"
category: "function"
name: "GZIPOutputStream.GZIPOutputStream"
signature: "public GZIPOutputStream(OutputStream out, int size) throws IOException"
title: "GZIPOutputStream.GZIPOutputStream"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/GZIPOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GZIPOutputStream.GZIPOutputStream

```java
public GZIPOutputStream(OutputStream out, int size) throws IOException
```

Creates a new output stream with the specified buffer size.

 

The new output stream instance is created as if by invoking
 the 3-argument constructor GZIPOutputStream(out, size, false).

**参数**

- **out** — the output stream
- **size** — the output buffer size

**异常**

- **IOException** — If an I/O error has occurred.
- **IllegalArgumentException** — if `size <= 0`
