---
id: "java-en-function-pushbackinputstream-close"
language: "java"
lang: "en"
category: "function"
name: "PushbackInputStream.close"
signature: "public synchronized void close() throws IOException"
title: "PushbackInputStream.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackInputStream.close

```java
public synchronized void close() throws IOException
```

Closes this input stream and releases any system resources
 associated with the stream.
 Once the stream has been closed, further read(), unread(),
 available(), reset(), or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect.

**异常**

- **IOException** — if an I/O error occurs.
