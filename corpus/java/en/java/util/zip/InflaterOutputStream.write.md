---
id: "java-en-function-inflateroutputstream-write"
language: "java"
lang: "en"
category: "function"
name: "InflaterOutputStream.write"
signature: "public void write(int b) throws IOException"
title: "InflaterOutputStream.write"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterOutputStream.write

```java
public void write(int b) throws IOException
```

Writes a byte to the decompressed output stream.

**参数**

- **b** — a single byte of compressed data to decompress and write to the output stream

**异常**

- **IOException** — if an I/O error occurs or this stream is already closed
- **ZipException** — if a compression (ZIP) format error occurs
