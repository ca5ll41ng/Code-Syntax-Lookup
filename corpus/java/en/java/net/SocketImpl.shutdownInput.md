---
id: "java-en-function-socketimpl-shutdowninput"
language: "java"
lang: "en"
category: "function"
name: "SocketImpl.shutdownInput"
signature: "protected void shutdownInput() throws IOException"
title: "SocketImpl.shutdownInput"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketImpl.shutdownInput

```java
protected void shutdownInput() throws IOException
```

Places the input stream for this socket at "end of stream".
 Any data sent to this socket is acknowledged and then
 silently discarded.

 If you read from a socket input stream after invoking this method on the
 socket, the stream's `available` method will return 0, and its
 `read` methods will return `-1` (end of stream).

**异常**

- **IOException** — if an I/O error occurs when shutting down this socket.

**参见**

- java.net.Socket#shutdownOutput()
- java.net.Socket#close()
- java.net.Socket#setSoLinger(boolean, int)

> *Since 1.3*
