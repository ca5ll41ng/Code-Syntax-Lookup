---
id: "java-en-function-closeable-close"
language: "java"
lang: "en"
category: "function"
name: "Closeable.close"
signature: "public void close() throws IOException"
title: "Closeable.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Closeable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Closeable.close

```java
public void close() throws IOException
```

Closes this stream and releases any system resources associated
 with it. If the stream is already closed then invoking this
 method has no effect.

 

 As noted in `close`, cases where the
 close may fail require careful attention. It is strongly advised
 to relinquish the underlying resources and to internally
 mark the `Closeable` as closed, prior to throwing
 the `IOException`.

**异常**

- **IOException** — if an I/O error occurs
