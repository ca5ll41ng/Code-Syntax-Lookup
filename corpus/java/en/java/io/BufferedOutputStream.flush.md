---
id: "java-en-function-bufferedoutputstream-flush"
language: "java"
lang: "en"
category: "function"
name: "BufferedOutputStream.flush"
signature: "public synchronized void flush() throws IOException"
title: "BufferedOutputStream.flush"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedOutputStream.flush

```java
public synchronized void flush() throws IOException
```

Flushes this buffered output stream. This forces any buffered
 output bytes to be written out to the underlying output stream.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterOutputStream#out
