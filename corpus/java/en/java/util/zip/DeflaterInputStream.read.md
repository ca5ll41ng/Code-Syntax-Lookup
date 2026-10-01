---
id: "java-en-function-deflaterinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "DeflaterInputStream.read"
signature: "public int read() throws IOException"
title: "DeflaterInputStream.read"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterInputStream.read

```java
public int read() throws IOException
```

Reads a single byte of compressed data from the input stream.
 This method will block until some input can be read and compressed.

**返回**

- a single byte of compressed data, or -1 if the end of the uncompressed input stream is reached

**异常**

- **IOException** — if an I/O error occurs or if this stream is already closed
