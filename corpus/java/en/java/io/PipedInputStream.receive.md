---
id: "java-en-function-pipedinputstream-receive"
language: "java"
lang: "en"
category: "function"
name: "PipedInputStream.receive"
signature: "protected synchronized void receive(int b) throws IOException"
title: "PipedInputStream.receive"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedInputStream.receive

```java
protected synchronized void receive(int b) throws IOException
```

Receives a byte of data.  This method will block if no input is
 available.

**参数**

- **b** — the byte being received

**异常**

- **IOException** — If the pipe is  `broken`, `connect(java.io.PipedOutputStream) unconnected`, closed, or if an I/O error occurs.

> *Since 1.1*
