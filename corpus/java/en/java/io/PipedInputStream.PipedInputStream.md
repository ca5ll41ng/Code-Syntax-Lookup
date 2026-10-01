---
id: "java-en-function-pipedinputstream-pipedinputstream"
language: "java"
lang: "en"
category: "function"
name: "PipedInputStream.PipedInputStream"
signature: "public PipedInputStream(PipedOutputStream src) throws IOException"
title: "PipedInputStream.PipedInputStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedInputStream.PipedInputStream

```java
public PipedInputStream(PipedOutputStream src) throws IOException
```

Creates a `PipedInputStream` so
 that it is connected to the piped output
 stream `src`. Data bytes written
 to `src` will then be  available
 as input from this stream.

**参数**

- **src** — the stream to connect to.

**异常**

- **IOException** — if an I/O error occurs.
