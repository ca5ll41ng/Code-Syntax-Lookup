---
id: "java-en-function-inputstream-skipnbytes"
language: "java"
lang: "en"
category: "function"
name: "InputStream.skipNBytes"
signature: "public void skipNBytes(long n) throws IOException"
title: "InputStream.skipNBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.skipNBytes

```java
public void skipNBytes(long n) throws IOException
```

Skips over and discards exactly `n` bytes of data from this input
 stream.  If `n` is zero, then no bytes are skipped.
 If `n` is negative, then no bytes are skipped.
 Subclasses may handle the negative value differently.

 

 This method blocks until the requested number of bytes has been
 skipped, end of file is reached, or an exception is thrown.

 

 If end of stream is reached before the stream is at the desired
 position, then an `EOFException` is thrown.

 

 If an I/O error occurs, then the input stream may be
 in an inconsistent state. It is strongly recommended that the
 stream be promptly closed if an I/O error occurs.

 Subclasses are encouraged to provide a more efficient implementation
 of this method.

 If `n` is zero or negative, then no bytes are skipped.
 If `n` is positive, the default implementation of this method
 invokes `skip` repeatedly with its parameter equal
 to the remaining number of bytes to skip until the requested number
 of bytes has been skipped or an error condition occurs.  If at any
 point the return value of `skip()` is negative or greater than the
 remaining number of bytes to be skipped, then an `IOException` is
 thrown.  If `skip()` ever returns zero, then `read` is
 invoked to read a single byte, and if it returns `-1`, then an
 `EOFException` is thrown.  Any exception thrown by `skip()`
 or `read()` will be propagated.

**参数**

- **n** — the number of bytes to be skipped.

**异常**

- **EOFException** — if end of stream is encountered before the stream can be positioned `n` bytes beyond its position when this method was invoked.
- **IOException** — if the stream cannot be positioned properly or if an I/O error occurs.

**参见**

- java.io.InputStream#skip(long)

> *Since 12*
