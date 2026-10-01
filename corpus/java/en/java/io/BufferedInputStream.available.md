---
id: "java-en-function-bufferedinputstream-available"
language: "java"
lang: "en"
category: "function"
name: "BufferedInputStream.available"
signature: "public synchronized int available() throws IOException"
title: "BufferedInputStream.available"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedInputStream.available

```java
public synchronized int available() throws IOException
```

Returns an estimate of the number of bytes that can be read (or
 skipped over) from this input stream without blocking by the next
 invocation of a method for this input stream. The next invocation might be
 the same thread or another thread.  A single read or skip of this
 many bytes will not block, but may read or skip fewer bytes.
 

 This method returns the sum of the number of bytes remaining to be read in
 the buffer (`count - pos`) and the result of calling the
 `in in``.available()`.

**返回**

- an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking.

**异常**

- **IOException** — if this input stream has been closed by invoking its `close` method, or an I/O error occurs.
