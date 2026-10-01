---
id: "java-en-function-bufferedinputstream-close"
language: "java"
lang: "en"
category: "function"
name: "BufferedInputStream.close"
signature: "public void close() throws IOException"
title: "BufferedInputStream.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedInputStream.close

```java
public void close() throws IOException
```

Closes this input stream and releases any system resources
 associated with the stream.
 Once the stream has been closed, further read(), available(), reset(),
 or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect.

**异常**

- **IOException** — if an I/O error occurs.
