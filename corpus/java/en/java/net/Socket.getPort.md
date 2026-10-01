---
id: "java-en-function-socket-getport"
language: "java"
lang: "en"
category: "function"
name: "Socket.getPort"
signature: "public int getPort()"
title: "Socket.getPort"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getPort

```java
public int getPort()
```

Returns the remote port number to which this socket is connected.
 

 If the socket was connected prior to being `close closed`,
 then this method will continue to return the connected port number
 after the socket is closed.

**返回**

- the remote port number to which this socket is connected, or 0 if the socket is not connected yet.
