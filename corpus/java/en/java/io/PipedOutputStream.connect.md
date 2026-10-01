---
id: "java-en-function-pipedoutputstream-connect"
language: "java"
lang: "en"
category: "function"
name: "PipedOutputStream.connect"
signature: "public synchronized void connect(PipedInputStream snk) throws IOException"
title: "PipedOutputStream.connect"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedOutputStream.connect

```java
public synchronized void connect(PipedInputStream snk) throws IOException
```

Connects this piped output stream to a receiver. If this object
 is already connected to some other piped input stream, an
 `IOException` is thrown.
 

 If `snk` is an unconnected piped input stream and
 `src` is an unconnected piped output stream, they may
 be connected by either the call:
 {@snippet lang=java :
     src.connect(snk)
 }
 or the call:
 {@snippet lang=java :
     snk.connect(src)
 }
 The two calls have the same effect.

**参数**

- **snk** — the piped input stream to connect to.

**异常**

- **IOException** — if an I/O error occurs.
