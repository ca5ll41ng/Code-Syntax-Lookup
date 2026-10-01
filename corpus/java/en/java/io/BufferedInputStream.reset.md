---
id: "java-en-function-bufferedinputstream-reset"
language: "java"
lang: "en"
category: "function"
name: "BufferedInputStream.reset"
signature: "public synchronized void reset() throws IOException"
title: "BufferedInputStream.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedInputStream.reset

```java
public synchronized void reset() throws IOException
```

See the general contract of the `reset`
 method of `InputStream`.
 

 If `markpos` is `-1`
 (no mark has been set or the mark has been
 invalidated), an `IOException`
 is thrown. Otherwise, `pos` is
 set equal to `markpos`.

**异常**

- **IOException** — if this stream has not been marked or, if the mark has been invalidated, or the stream has been closed by invoking its `close` method, or an I/O error occurs.

**参见**

- java.io.BufferedInputStream#mark(int)
