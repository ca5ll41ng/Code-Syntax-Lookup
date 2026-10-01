---
id: "java-en-function-inputstream-available"
language: "java"
lang: "en"
category: "function"
name: "InputStream.available"
signature: "public int available() throws IOException"
title: "InputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.available

```java
public int available() throws IOException
```

Returns an estimate of the number of bytes that can be read (or skipped
 over) from this input stream without blocking, which may be 0, or 0 when
 end of stream is detected.  The read might be on the same thread or
 another thread.  A single read or skip of this many bytes will not block,
 but may read or skip fewer bytes.

 

 Note that while some implementations of `InputStream` will
 return the total number of bytes in the stream, many will not.  It is
 never correct to use the return value of this method to allocate
 a buffer intended to hold all data in this stream.

 

 A subclass's implementation of this method may choose to throw an
 `IOException` if this input stream has been closed by invoking the
 `close` method.

 The `available` method of `InputStream` always returns
 `0`.

 This method should be overridden by subclasses.

**返回**

- an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking or `0` when it reaches the end of the input stream.

**异常**

- **IOException** — if an I/O error occurs.
