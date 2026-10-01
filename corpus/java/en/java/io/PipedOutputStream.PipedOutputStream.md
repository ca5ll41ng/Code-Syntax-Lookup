---
id: "java-en-function-pipedoutputstream-pipedoutputstream"
language: "java"
lang: "en"
category: "function"
name: "PipedOutputStream.PipedOutputStream"
signature: "public PipedOutputStream(PipedInputStream snk) throws IOException"
title: "PipedOutputStream.PipedOutputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedOutputStream.PipedOutputStream

```java
public PipedOutputStream(PipedInputStream snk) throws IOException
```

Creates a piped output stream connected to the specified piped
 input stream. Data bytes written to this stream will then be
 available as input from `snk`.

**参数**

- **snk** — The piped input stream to connect to.

**异常**

- **IOException** — if an I/O error occurs.
