---
id: "java-en-function-socket-shutdowninput"
language: "java"
lang: "en"
category: "function"
name: "Socket.shutdownInput"
signature: "public void shutdownInput() throws IOException"
title: "Socket.shutdownInput"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.shutdownInput

```java
public void shutdownInput() throws IOException
```

Shutdown the connection for reading without closing the socket.
 

 If you read from a `getInputStream() socket input stream`
 after invoking this method, the stream's `available` method will
 return `0`, and its `read` methods will return `-1` (end of stream).

**异常**

- **IOException** — if an I/O error occurs when shutting down this socket, the socket is not connected, the socket is already shutdown for reading, or the socket is closed.

**参见**

- java.net.Socket#shutdownOutput()
- java.net.Socket#close()
- java.net.Socket#setSoLinger(boolean, int)
- #isInputShutdown()

> *Since 1.3*
