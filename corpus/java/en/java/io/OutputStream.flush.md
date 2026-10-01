---
id: "java-en-function-outputstream-flush"
language: "java"
lang: "en"
category: "function"
name: "OutputStream.flush"
signature: "public void flush() throws IOException"
title: "OutputStream.flush"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/OutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputStream.flush

```java
public void flush() throws IOException
```

Flushes this output stream and forces any buffered output bytes
 to be written out. The general contract of `flush` is
 that calling it is an indication that, if any bytes previously
 written have been buffered by the implementation of the output
 stream, such bytes should immediately be written to their
 intended destination.
 

 If the intended destination of this stream is an abstraction provided by
 the underlying operating system, for example a file, then flushing the
 stream guarantees only that bytes previously written to the stream are
 passed to the operating system for writing; it does not guarantee that
 they are actually written to a physical device such as a disk drive.

 The `flush` method of `OutputStream` does nothing.

**异常**

- **IOException** — if an I/O error occurs.
