---
id: "java-en-function-pipedoutputstream-flush"
language: "java"
lang: "en"
category: "function"
name: "PipedOutputStream.flush"
signature: "public synchronized void flush() throws IOException"
title: "PipedOutputStream.flush"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PipedOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PipedOutputStream.flush

```java
public synchronized void flush() throws IOException
```

Flushes this output stream and forces any buffered output bytes
 to be written out.
 This will notify any readers that bytes are waiting in the pipe.

**异常**

- **IOException** — {@inheritDoc}
