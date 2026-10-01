---
id: "java-en-function-gzipinputstream-gzipinputstream"
language: "java"
lang: "en"
category: "function"
name: "GZIPInputStream.GZIPInputStream"
signature: "public GZIPInputStream(InputStream in, int size) throws IOException"
title: "GZIPInputStream.GZIPInputStream"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/GZIPInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GZIPInputStream.GZIPInputStream

```java
public GZIPInputStream(InputStream in, int size) throws IOException
```

Creates a new input stream with the specified buffer size.

**参数**

- **in** — the input stream
- **size** — the input buffer size

**异常**

- **ZipException** — if a GZIP format error has occurred or the compression method used is unsupported
- **NullPointerException** — if `in` is null
- **IOException** — if an I/O error occurs when reading the member header from the underlying stream
- **IllegalArgumentException** — if `size <= 0`
