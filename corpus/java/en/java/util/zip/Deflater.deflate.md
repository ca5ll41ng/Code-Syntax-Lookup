---
id: "java-en-function-deflater-deflate"
language: "java"
lang: "en"
category: "function"
name: "Deflater.deflate"
signature: "public int deflate(byte[] output, int off, int len)"
title: "Deflater.deflate"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Deflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Deflater.deflate

```java
public int deflate(byte[] output, int off, int len)
```

Compresses the input data and fills specified buffer with compressed
 data. Returns actual number of bytes of compressed data. A return value
 of 0 indicates that `needsInput() needsInput` should be called
 in order to determine if more input data is required.

 

This method uses `NO_FLUSH` as its compression flush mode.
 An invocation of this method of the form `deflater.deflate(b, off, len)`
 yields the same result as the invocation of
 `deflater.deflate(b, off, len, Deflater.NO_FLUSH)`.

**参数**

- **output** — the buffer for the compressed data
- **off** — the start offset of the data
- **len** — the maximum number of bytes of compressed data

**返回**

- the actual number of bytes of compressed data written to the output buffer

**异常**

- **IllegalStateException** — if the Deflater is closed
