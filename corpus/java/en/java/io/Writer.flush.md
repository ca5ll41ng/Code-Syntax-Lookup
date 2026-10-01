---
id: "java-en-function-writer-flush"
language: "java"
lang: "en"
category: "function"
name: "Writer.flush"
signature: "public abstract void flush() throws IOException"
title: "Writer.flush"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Writer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Writer.flush

```java
public abstract void flush() throws IOException
```

Flushes the stream.  If the stream has saved any characters from the
 various write() methods in a buffer, write them immediately to their
 intended destination.  Then, if that destination is another character or
 byte stream, flush it.  Thus one flush() invocation will flush all the
 buffers in a chain of Writers and OutputStreams.

 

 If the intended destination of this stream is an abstraction provided
 by the underlying operating system, for example a file, then flushing the
 stream guarantees only that bytes previously written to the stream are
 passed to the operating system for writing; it does not guarantee that
 they are actually written to a physical device such as a disk drive.

**异常**

- **IOException** — If an I/O error occurs
