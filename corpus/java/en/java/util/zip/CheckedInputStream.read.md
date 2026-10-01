---
id: "java-en-function-checkedinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "CheckedInputStream.read"
signature: "public int read() throws IOException"
title: "CheckedInputStream.read"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/CheckedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CheckedInputStream.read

```java
public int read() throws IOException
```

Reads a byte. Will block if no input is available.

**返回**

- the byte read, or -1 if the end of the stream is reached.

**异常**

- **IOException** — if an I/O error has occurred
