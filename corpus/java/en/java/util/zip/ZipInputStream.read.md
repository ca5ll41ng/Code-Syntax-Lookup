---
id: "java-en-function-zipinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "ZipInputStream.read"
signature: "public int read() throws IOException"
title: "ZipInputStream.read"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipInputStream.read

```java
public int read() throws IOException
```

Reads the next byte of data from the input stream for the current
 ZIP entry. This method will block until enough input is available for
 decompression.

**返回**

- the byte read, or -1 if the end of the stream is reached

**异常**

- **IOException** — if an I/O error has occurred
