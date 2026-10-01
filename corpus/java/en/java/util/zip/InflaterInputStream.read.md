---
id: "java-en-function-inflaterinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "InflaterInputStream.read"
signature: "public int read() throws IOException"
title: "InflaterInputStream.read"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/InflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InflaterInputStream.read

```java
public int read() throws IOException
```

Reads a byte of uncompressed data. This method will block until
 enough input is available for decompression.

**返回**

- the byte read, or -1 if end of compressed input is reached

**异常**

- **IOException** — if an I/O error has occurred
