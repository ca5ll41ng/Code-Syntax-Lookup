---
id: "java-en-function-socket-shutdownoutput"
language: "java"
lang: "en"
category: "function"
name: "Socket.shutdownOutput"
signature: "public void shutdownOutput() throws IOException"
title: "Socket.shutdownOutput"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.shutdownOutput

```java
public void shutdownOutput() throws IOException
```

Shutdown the connection for writing without closing the socket.
 

 If you write to a `getOutputStream() socket output stream`
 after invoking this method, the stream will throw an `IOException`.

**异常**

- **IOException** — if an I/O error occurs when shutting down this socket, the socket is not connected, the socket is already shutdown for writing, or the socket is closed.

**参见**

- java.net.Socket#shutdownInput()
- java.net.Socket#close()
- java.net.Socket#setSoLinger(boolean, int)
- #isOutputShutdown()

> *Since 1.3*
