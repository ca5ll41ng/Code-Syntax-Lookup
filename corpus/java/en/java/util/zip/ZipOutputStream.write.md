---
id: "java-en-function-zipoutputstream-write"
language: "java"
lang: "en"
category: "function"
name: "ZipOutputStream.write"
signature: "public synchronized void write(byte[] b, int off, int len) throws IOException"
title: "ZipOutputStream.write"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipOutputStream.write

```java
public synchronized void write(byte[] b, int off, int len) throws IOException
```

Writes an array of bytes to the current ZIP entry data. This method
 will block until all the bytes are written.

**参数**

- **b** — the data to be written
- **off** — the start offset in the data
- **len** — the number of bytes that are written

**异常**

- **ZipException** — if a ZIP file error has occurred
- **IOException** — if an I/O error has occurred
