---
id: "java-en-function-zipinputstream-readallbytes"
language: "java"
lang: "en"
category: "function"
name: "ZipInputStream.readAllBytes"
signature: "public byte[] readAllBytes() throws IOException"
title: "ZipInputStream.readAllBytes"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipInputStream.readAllBytes

```java
public byte[] readAllBytes() throws IOException
```

Reads all remaining bytes from the input stream for the current ZIP entry.
 This method blocks until all remaining bytes have been read and end of
 stream is detected, or an exception is thrown. This method does not close
 the input stream.

 

 When this stream reaches end of stream, further invocations of this
 method will return an empty byte array.

 

 Note that this method is intended for simple cases where it is
 convenient to read all bytes into a byte array. It is not intended for
 reading input streams with large amounts of data.

 

 If an I/O error occurs reading from the input stream, then it may do
 so after some, but not all, bytes have been read. Consequently, the input
 stream may not be at end of stream and may be in an inconsistent state.
 It is strongly recommended that the stream be promptly closed if an I/O
 error occurs.

**异常**

- **OutOfMemoryError** — {@inheritDoc}

> *Since 9*
