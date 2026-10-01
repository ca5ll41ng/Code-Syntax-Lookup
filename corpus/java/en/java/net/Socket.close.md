---
id: "java-en-function-socket-close"
language: "java"
lang: "en"
category: "function"
name: "Socket.close"
signature: "public void close() throws IOException"
title: "Socket.close"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.close

```java
public void close() throws IOException
```

Closes this socket.
 

 Any thread currently blocked in an I/O operation upon this socket
 will throw a `SocketException`.
 

 Once a socket has been closed, it is not available for further networking
 use (i.e. can't be reconnected or rebound) and several of the methods defined
 by this class will throw an exception if invoked on the closed socket. A new
 socket needs to be created.

 

 Closing this socket will also close the socket's
 `java.io.InputStream InputStream` and
 `java.io.OutputStream OutputStream`.

 

 If this socket has an associated channel then the channel is closed
 as well.

**异常**

- **IOException** — if an I/O error occurs when closing this socket.

**参见**

- #isClosed()
