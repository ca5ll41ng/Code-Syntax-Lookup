---
id: "java-en-function-urlconnection-getoutputstream"
language: "java"
lang: "en"
category: "function"
name: "URLConnection.getOutputStream"
signature: "public OutputStream getOutputStream() throws IOException"
title: "URLConnection.getOutputStream"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLConnection.getOutputStream

```java
public OutputStream getOutputStream() throws IOException
```

Returns an output stream that writes to this connection.

**返回**

- an output stream that writes to this connection.

**异常**

- **IOException** — if an I/O error occurs while creating the output stream.
- **UnknownServiceException** — if the protocol does not support output.
