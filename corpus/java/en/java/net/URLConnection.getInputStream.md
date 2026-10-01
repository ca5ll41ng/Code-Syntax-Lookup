---
id: "java-en-function-urlconnection-getinputstream"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getInputStream"
signature: "public InputStream getInputStream() throws IOException"
title: "URLConnection.getInputStream"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getInputStream

```java
public InputStream getInputStream() throws IOException
```

Returns an input stream that reads from this open connection.

 A SocketTimeoutException can be thrown when reading from the
 returned input stream if the read timeout expires before data
 is available for read.

 `java.util.zip.InflaterInputStream InflaterInputStream`, whose
 `read(byte[], int, int)
 read` method can modify any element of the output
 buffer.

**返回**

- an input stream that reads from this open connection.

**异常**

- **IOException** — if an I/O error occurs while creating the input stream.
- **UnknownServiceException** — if the protocol does not support input.

**参见**

- #setReadTimeout(int)
- #getReadTimeout()
