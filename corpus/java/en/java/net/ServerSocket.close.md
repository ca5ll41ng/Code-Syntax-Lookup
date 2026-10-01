---
id: "java-en-function-serversocket-close"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.close"
signature: "public void close() throws IOException"
title: "ServerSocket.close"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.close

```java
public void close() throws IOException
```

Closes this socket.

 Any thread currently blocked in `accept` will throw
 a `SocketException`.

 

 If this socket has an associated channel then the channel is closed
 as well.

 

 Once closed, several of the methods defined by this class will throw
 an exception if invoked on the closed socket.

**异常**

- **IOException** — if an I/O error occurs when closing the socket.
