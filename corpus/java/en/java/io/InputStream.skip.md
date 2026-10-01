---
id: "java-en-function-inputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "InputStream.skip"
signature: "public long skip(long n) throws IOException"
title: "InputStream.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.skip

```java
public long skip(long n) throws IOException
```

Skips over and discards `n` bytes of data from this input
 stream. The `skip` method may, for a variety of reasons, end
 up skipping over some smaller number of bytes, possibly `0`.
 This may result from any of a number of conditions; reaching end of file
 before `n` bytes have been skipped is only one possibility.
 The actual number of bytes skipped is returned. If `n` is
 negative, the `skip` method for class `InputStream` always
 returns 0, and no bytes are skipped. Subclasses may handle the negative
 value differently.

 The `skip` method implementation of this class creates a
 byte array and then repeatedly reads into it until `n` bytes
 have been read or the end of the stream has been reached. Subclasses are
 encouraged to provide a more efficient implementation of this method.
 For instance, the implementation may depend on the ability to seek.

**参数**

- **n** — the number of bytes to be skipped.

**返回**

- the actual number of bytes skipped which might be zero.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.InputStream#skipNBytes(long)
