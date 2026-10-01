---
id: "java-en-function-pipedinputstream-connect"
language: "java"
lang: "en"
category: "function"
name: "PipedInputStream.connect"
signature: "public void connect(PipedOutputStream src) throws IOException"
title: "PipedInputStream.connect"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedInputStream.connect

```java
public void connect(PipedOutputStream src) throws IOException
```

Causes this piped input stream to be connected
 to the piped  output stream `src`.
 If this object is already connected to some
 other piped output  stream, an `IOException`
 is thrown.
 

 If `src` is an
 unconnected piped output stream and `snk`
 is an unconnected piped input stream, they
 may be connected by either the call:

 {@snippet lang=java :
     snk.connect(src)
 }
 

 or the call:

 {@snippet lang=java :
     src.connect(snk)
 }
 

 The two calls have the same effect.

**参数**

- **src** — The piped output stream to connect to.

**异常**

- **IOException** — if an I/O error occurs.
