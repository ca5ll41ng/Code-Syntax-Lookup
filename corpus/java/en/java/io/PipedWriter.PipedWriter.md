---
id: "java-en-function-pipedwriter-pipedwriter"
language: "java"
lang: "en"
category: "function"
name: "PipedWriter.PipedWriter"
signature: "public PipedWriter(PipedReader snk) throws IOException"
title: "PipedWriter.PipedWriter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedWriter.PipedWriter

```java
public PipedWriter(PipedReader snk) throws IOException
```

Creates a piped writer connected to the specified piped
 reader. Data characters written to this stream will then be
 available as input from `snk`.

**参数**

- **snk** — The piped reader to connect to.

**异常**

- **IOException** — if an I/O error occurs.
