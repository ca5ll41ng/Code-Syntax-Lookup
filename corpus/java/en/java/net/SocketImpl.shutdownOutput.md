---
id: "java-en-function-socketimpl-shutdownoutput"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.shutdownOutput"
signature: "protected void shutdownOutput() throws IOException"
title: "SocketImpl.shutdownOutput"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.shutdownOutput

```java
protected void shutdownOutput() throws IOException
```

Disables the output stream for this socket.
 For a TCP socket, any previously written data will be sent
 followed by TCP's normal connection termination sequence.

 If you write to a socket output stream after invoking
 shutdownOutput() on the socket, the stream will throw
 an IOException.

**异常**

- **IOException** — if an I/O error occurs when shutting down this socket.

**参见**

- java.net.Socket#shutdownInput()
- java.net.Socket#close()
- java.net.Socket#setSoLinger(boolean, int)

> *Since 1.3*
