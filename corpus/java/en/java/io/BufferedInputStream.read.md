---
id: "java-en-function-bufferedinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "BufferedInputStream.read"
signature: "public synchronized int read() throws IOException"
title: "BufferedInputStream.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedInputStream.read

```java
public synchronized int read() throws IOException
```

See
 the general contract of the `read`
 method of `InputStream`.

**返回**

- the next byte of data, or `-1` if the end of the stream is reached.

**异常**

- **IOException** — if this input stream has been closed by invoking its `close` method, or an I/O error occurs.

**参见**

- java.io.FilterInputStream#in
