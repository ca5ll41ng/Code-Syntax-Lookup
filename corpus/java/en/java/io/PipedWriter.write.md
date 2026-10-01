---
id: "java-en-function-pipedwriter-write"
language: "java"
lang: "en"
category: "function"
name: "PipedWriter.write"
signature: "public void write(int c) throws IOException"
title: "PipedWriter.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedWriter.write

```java
public void write(int c) throws IOException
```

Writes the specified `char` to the piped output stream.
 If a thread was reading data characters from the connected piped input
 stream, but the thread is no longer alive, then an
 `IOException` is thrown.
 

 Implements the `write` method of `Writer`.

**参数**

- **c** — the `char` to be written.

**异常**

- **IOException** — if the pipe is `broken`, `connect(java.io.PipedReader) unconnected`, closed or an I/O error occurs.
