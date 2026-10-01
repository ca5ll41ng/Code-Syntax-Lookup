---
id: "java-en-function-inputstream-readnbytes"
language: "java"
lang: "en"
category: "function"
name: "InputStream.readNBytes"
signature: "public byte[] readNBytes(int len) throws IOException"
title: "InputStream.readNBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.readNBytes

```java
public byte[] readNBytes(int len) throws IOException
```

Reads up to a specified number of bytes from the input stream. This
 method blocks until the requested number of bytes has been read, end
 of stream is detected, or an exception is thrown. This method does not
 close the input stream.

 

 The length of the returned array equals the number of bytes read
 from the stream. If `len` is zero, then no bytes are read and
 an empty byte array is returned. Otherwise, up to `len` bytes
 are read from the stream. Fewer than `len` bytes may be read if
 end of stream is encountered.

 

 When this stream reaches end of stream, further invocations of this
 method will return an empty byte array.

 

 Note that this method is intended for simple cases where it is
 convenient to read the specified number of bytes into a byte array. The
 total amount of memory allocated by this method is proportional to the
 number of bytes read from the stream which is bounded by `len`.
 Therefore, the method may be safely called with very large values of
 `len` provided sufficient memory is available.

 

 The behavior for the case where the input stream is asynchronously
 closed, or the thread interrupted during the read, is highly input
 stream specific, and therefore not specified.

 

 If an I/O error occurs reading from the input stream, then it may do
 so after some, but not all, bytes have been read. Consequently the input
 stream may not be at end of stream and may be in an inconsistent state.
 It is strongly recommended that the stream be promptly closed if an I/O
 error occurs.

 The number of bytes allocated to read data from this stream and return
 the result is bounded by `2*(long)len`, inclusive.

**参数**

- **len** — the maximum number of bytes to read

**返回**

- a byte array containing the bytes read from this input stream

**异常**

- **IllegalArgumentException** — if `length` is negative
- **IOException** — if an I/O error occurs
- **OutOfMemoryError** — if an array of the required size cannot be allocated.

> *Since 11*
