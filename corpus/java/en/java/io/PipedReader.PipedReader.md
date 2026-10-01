---
id: "java-en-function-pipedreader-pipedreader"
language: "java"
lang: "en"
category: "function"
name: "PipedReader.PipedReader"
signature: "public PipedReader(PipedWriter src) throws IOException"
title: "PipedReader.PipedReader"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedReader.PipedReader

```java
public PipedReader(PipedWriter src) throws IOException
```

Creates a `PipedReader` so
 that it is connected to the piped writer
 `src`. Data written to `src`
 will then be available as input from this stream.

**参数**

- **src** — the stream to connect to.

**异常**

- **IOException** — if an I/O error occurs.
