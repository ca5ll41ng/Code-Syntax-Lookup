---
id: "java-en-function-inputstream-read"
language: "java"
lang: "en"
category: "function"
name: "InputStream.read"
signature: "public abstract int read() throws IOException"
title: "InputStream.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.read

```java
public abstract int read() throws IOException
```

Reads the next byte of data from the input stream. The value byte is
 returned as an `int` in the range `0` to
 `255`. If no byte is available because the end of the stream
 has been reached, the value `-1` is returned. This method
 blocks until input data is available, the end of the stream is detected,
 or an exception is thrown.

**返回**

- the next byte of data, or `-1` if the end of the stream is reached.

**异常**

- **IOException** — if an I/O error occurs.
