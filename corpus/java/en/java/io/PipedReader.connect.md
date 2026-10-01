---
id: "java-en-function-pipedreader-connect"
language: "java"
lang: "en"
category: "function"
name: "PipedReader.connect"
signature: "public void connect(PipedWriter src) throws IOException"
title: "PipedReader.connect"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedReader.connect

```java
public void connect(PipedWriter src) throws IOException
```

Causes this piped reader to be connected
 to the piped  writer `src`.
 If this object is already connected to some
 other piped writer, an `IOException`
 is thrown.
 

 If `src` is an
 unconnected piped writer and `snk`
 is an unconnected piped reader, they
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

- **src** — The piped writer to connect to.

**异常**

- **IOException** — if an I/O error occurs.
