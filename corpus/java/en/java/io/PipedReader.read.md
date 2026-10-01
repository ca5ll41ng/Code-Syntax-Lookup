---
id: "java-en-function-pipedreader-read"
language: "java"
lang: "en"
category: "function"
name: "PipedReader.read"
signature: "public synchronized int read() throws IOException"
title: "PipedReader.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedReader.read

```java
public synchronized int read() throws IOException
```

Reads the next character of data from this piped stream.
 If no character is available because the end of the stream
 has been reached, the value `-1` is returned.
 This method blocks until input data is available, the end of
 the stream is detected, or an exception is thrown.

**返回**

- the next character of data, or `-1` if the end of the stream is reached.

**异常**

- **IOException** — if the pipe is `broken`, `connect(java.io.PipedWriter) unconnected`, closed, or an I/O error occurs.
