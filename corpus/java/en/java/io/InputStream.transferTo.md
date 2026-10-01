---
id: "java-en-function-inputstream-transferto"
language: "java"
lang: "en"
category: "function"
name: "InputStream.transferTo"
signature: "public long transferTo(OutputStream out) throws IOException"
title: "InputStream.transferTo"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStream.transferTo

```java
public long transferTo(OutputStream out) throws IOException
```

Reads all bytes from this input stream and writes the bytes to the
 given output stream in the order that they are read. On return, this
 input stream will be at end of stream. This method does not close either
 stream.
 

 This method may block indefinitely reading from the input stream, or
 writing to the output stream. The behavior for the case where the input
 and/or output stream is asynchronously closed, or the thread
 interrupted during the transfer, is highly input and output stream
 specific, and therefore not specified.
 

 If the total number of bytes transferred is greater than `MAX_VALUE`, then `Long.MAX_VALUE` will be returned.
 

 If an I/O error occurs reading from the input stream or writing to the
 output stream, then it may do so after some bytes have been read or
 written. Consequently the input stream may not be at end of stream and
 one, or both, streams may be in an inconsistent state. It is strongly
 recommended that both streams be promptly closed if an I/O error occurs.

**参数**

- **out** — the output stream, non-null

**返回**

- the number of bytes transferred

**异常**

- **IOException** — if an I/O error occurs when reading or writing
- **NullPointerException** — if `out` is `null`

> *Since 9*
