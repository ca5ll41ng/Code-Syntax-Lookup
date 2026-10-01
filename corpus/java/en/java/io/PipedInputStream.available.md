---
id: "java-en-function-pipedinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "PipedInputStream.available"
signature: "public synchronized int available() throws IOException"
title: "PipedInputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedInputStream.available

```java
public synchronized int available() throws IOException
```

Returns the number of bytes that can be read from this input
 stream without blocking.

**返回**

- the number of bytes that can be read from this input stream without blocking, or `0` if this input stream has been closed by invoking its `close` method, or if the pipe is `connect(java.io.PipedOutputStream) unconnected`, or `broken`.

**异常**

- **IOException** — {@inheritDoc}

> *Since 1.0.2*
