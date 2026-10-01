---
id: "java-en-function-pipedwriter-flush"
language: "java"
lang: "en"
category: "function"
name: "PipedWriter.flush"
signature: "public synchronized void flush() throws IOException"
title: "PipedWriter.flush"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedWriter.flush

```java
public synchronized void flush() throws IOException
```

Flushes this output stream and forces any buffered output characters
 to be written out.
 This will notify any readers that characters are waiting in the pipe.

**异常**

- **IOException** — if the pipe is closed, or an I/O error occurs.
