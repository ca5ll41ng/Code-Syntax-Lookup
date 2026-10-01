---
id: "java-en-function-gzipoutputstream-write"
language: "java"
lang: "en"
category: "function"
name: "GZIPOutputStream.write"
signature: "public synchronized void write(byte[] buf, int off, int len) throws IOException"
title: "GZIPOutputStream.write"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/GZIPOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GZIPOutputStream.write

```java
public synchronized void write(byte[] buf, int off, int len) throws IOException
```

Writes array of bytes to the compressed output stream. This method
 will block until all the bytes are written.

**参数**

- **buf** — the data to be written
- **off** — the start offset of the data
- **len** — the length of the data

**异常**

- **IOException** — If an I/O error has occurred.
