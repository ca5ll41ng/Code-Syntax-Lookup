---
id: "java-en-function-pushbackinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "PushbackInputStream.skip"
signature: "public long skip(long n) throws IOException"
title: "PushbackInputStream.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PushbackInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushbackInputStream.skip

```java
public long skip(long n) throws IOException
```

Skips over and discards `n` bytes of data from this
 input stream. The `skip` method may, for a variety of
 reasons, end up skipping over some smaller number of bytes,
 possibly zero.  If `n` is negative, no bytes are skipped.

 

 The `skip` method of `PushbackInputStream`
 first skips over the bytes in the pushback buffer, if any.  It then
 calls the `skip` method of the underlying input stream if
 more bytes need to be skipped.  The actual number of bytes skipped
 is returned.

**参数**

- **n** — {@inheritDoc}

**返回**

- {@inheritDoc}

**异常**

- **IOException** — if the stream has been closed by invoking its `close` method, `in.skip(n)` throws an IOException, or an I/O error occurs.

**参见**

- java.io.FilterInputStream#in
- java.io.InputStream#skip(long n)

> *Since 1.2*
