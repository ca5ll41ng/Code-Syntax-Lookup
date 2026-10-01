---
id: "java-en-function-writer-close"
language: "java"
lang: "en"
category: "function"
name: "Writer.close"
signature: "public abstract void close() throws IOException"
title: "Writer.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Writer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Writer.close

```java
public abstract void close() throws IOException
```

Closes the stream, flushing it first. Once the stream has been closed,
 further write() or flush() invocations will cause an IOException to be
 thrown. Closing a previously closed stream has no effect.

**异常**

- **IOException** — If an I/O error occurs
