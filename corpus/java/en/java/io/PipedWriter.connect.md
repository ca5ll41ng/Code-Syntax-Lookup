---
id: "java-en-function-pipedwriter-connect"
language: "java"
lang: "en"
category: "function"
name: "PipedWriter.connect"
signature: "public synchronized void connect(PipedReader snk) throws IOException"
title: "PipedWriter.connect"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedWriter.connect

```java
public synchronized void connect(PipedReader snk) throws IOException
```

Connects this piped writer to a receiver. If this object
 is already connected to some other piped reader, an
 `IOException` is thrown.
 

 If `snk` is an unconnected piped reader and
 `src` is an unconnected piped writer, they may
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

- **snk** — the piped reader to connect to.

**异常**

- **IOException** — if an I/O error occurs.
