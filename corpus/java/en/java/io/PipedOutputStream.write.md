---
id: "java-en-function-pipedoutputstream-write"
language: "java"
lang: "en"
category: "function"
name: "PipedOutputStream.write"
signature: "public void write(int b) throws IOException"
title: "PipedOutputStream.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedOutputStream.write

```java
public void write(int b) throws IOException
```

Writes the specified `byte` to the piped output stream.
 

 Implements the `write` method of `OutputStream`.

**参数**

- **b** — the `byte` to be written.

**异常**

- **IOException** — if the pipe is  broken, `connect(java.io.PipedInputStream) unconnected`, closed, or if an I/O error occurs.
