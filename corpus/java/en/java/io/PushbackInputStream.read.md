---
id: "java-en-function-pushbackinputstream-read"
language: "java"
lang: "en"
category: "function"
name: "PushbackInputStream.read"
signature: "public int read() throws IOException"
title: "PushbackInputStream.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackInputStream.read

```java
public int read() throws IOException
```

Reads the next byte of data from this input stream. The value
 byte is returned as an `int` in the range
 `0` to `255`. If no byte is available
 because the end of the stream has been reached, the value
 `-1` is returned. This method blocks until input data
 is available, the end of the stream is detected, or an exception
 is thrown.

 

 This method returns the most recently pushed-back byte, if there is
 one, and otherwise calls the `read` method of its underlying
 input stream and returns whatever value that method returns.

**返回**

- the next byte of data, or `-1` if the end of the stream has been reached.

**异常**

- **IOException** — if this input stream has been closed by invoking its `close` method, or an I/O error occurs.

**参见**

- java.io.InputStream#read()
