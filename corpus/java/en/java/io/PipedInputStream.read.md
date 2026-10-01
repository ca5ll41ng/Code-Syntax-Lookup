---
id: "java-en-function-pipedinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "PipedInputStream.read"
signature: "public synchronized int read() throws IOException"
title: "PipedInputStream.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedInputStream.read

```java
public synchronized int read() throws IOException
```

Reads the next byte of data from this piped input stream. The
 value byte is returned as an `int` in the range
 `0` to `255`.
 This method blocks until input data is available, the end of the
 stream is detected, or an exception is thrown.

**返回**

- {@inheritDoc}

**异常**

- **IOException** — if the pipe is `connect(java.io.PipedOutputStream) unconnected`, `broken`, closed, or if an I/O error occurs.
