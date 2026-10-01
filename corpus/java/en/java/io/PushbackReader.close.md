---
id: "java-en-function-pushbackreader-close"
language: "java"
lang: "en"
category: "function"
name: "PushbackReader.close"
signature: "public void close() throws IOException"
title: "PushbackReader.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackReader.close

```java
public void close() throws IOException
```

Closes the stream and releases any system resources associated with
 it. Once the stream has been closed, further read(),
 unread(), ready(), or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect. This method will block
 while there is another thread blocking on the reader.

**异常**

- **IOException** — If an I/O error occurs
