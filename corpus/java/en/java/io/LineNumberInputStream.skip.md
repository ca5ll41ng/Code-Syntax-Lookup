---
id: "java-en-function-linenumberinputstream-skip"
language: "java"
lang: "en"
category: "function"
name: "LineNumberInputStream.skip"
signature: "public long skip(long n) throws IOException"
title: "LineNumberInputStream.skip"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberInputStream.skip

```java
public long skip(long n) throws IOException
```

Skips over and discards `n` bytes of data from this
 input stream. The `skip` method may, for a variety of
 reasons, end up skipping over some smaller number of bytes,
 possibly `0`. The actual number of bytes skipped is
 returned.  If `n` is negative, no bytes are skipped.
 

 The `skip` method of `LineNumberInputStream` creates
 a byte array and then repeatedly reads into it until
 `n` bytes have been read or the end of the stream has
 been reached.

**参数**

- **n** — the number of bytes to be skipped.

**返回**

- the actual number of bytes skipped.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.FilterInputStream#in
