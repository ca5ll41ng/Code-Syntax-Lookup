---
id: "java-en-function-pipedreader-ready"
language: "java"
lang: "en"
category: "function"
name: "PipedReader.ready"
signature: "public synchronized boolean ready() throws IOException"
title: "PipedReader.ready"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedReader.ready

```java
public synchronized boolean ready() throws IOException
```

Tell whether this stream is ready to be read.  A piped character
 stream is ready if the circular buffer is not empty.

**异常**

- **IOException** — if the pipe is `broken`, `connect(java.io.PipedWriter) unconnected`, or closed.
