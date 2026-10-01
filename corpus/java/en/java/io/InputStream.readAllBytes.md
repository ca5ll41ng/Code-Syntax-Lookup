---
id: "java-en-function-inputstream-readallbytes"
language: "java"
lang: "en"
category: "function"
name: "InputStream.readAllBytes"
signature: "public byte[] readAllBytes() throws IOException"
title: "InputStream.readAllBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.readAllBytes

```java
public byte[] readAllBytes() throws IOException
```

Reads all remaining bytes from the input stream. This method blocks until
 all remaining bytes have been read and end of stream is detected, or an
 exception is thrown. This method does not close the input stream.

 

 When this stream reaches end of stream, further invocations of this
 method will return an empty byte array.

 

 Note that this method is intended for simple cases where it is
 convenient to read all bytes into a byte array. It is not intended for
 reading input streams with large amounts of data.

 

 The behavior for the case where the input stream is asynchronously
 closed, or the thread interrupted during the read, is highly input
 stream specific, and therefore not specified.

 

 If an I/O error occurs reading from the input stream, then it may do
 so after some, but not all, bytes have been read. Consequently the input
 stream may not be at end of stream and may be in an inconsistent state.
 It is strongly recommended that the stream be promptly closed if an I/O
 error occurs.

 This method invokes `readNBytes` with a length of
 `MAX_VALUE`.

**返回**

- a byte array containing the bytes read from this input stream

**异常**

- **IOException** — if an I/O error occurs
- **OutOfMemoryError** — if an array of the required size cannot be allocated.

> *Since 9*
