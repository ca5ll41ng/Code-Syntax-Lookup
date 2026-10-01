---
id: "java-en-function-socketimpl-getinputstream"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.getInputStream"
signature: "protected abstract InputStream getInputStream() throws IOException"
title: "SocketImpl.getInputStream"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.getInputStream

```java
protected abstract InputStream getInputStream() throws IOException
```

Returns an input stream for this socket.

**返回**

- a stream for reading from this socket.

**异常**

- **IOException** — if an I/O error occurs when creating the input stream.
