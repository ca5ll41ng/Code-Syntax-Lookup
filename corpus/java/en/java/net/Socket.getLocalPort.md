---
id: "java-en-function-socket-getlocalport"
language: "java"
lang: "en"
category: "function"
name: "Socket.getLocalPort"
signature: "public int getLocalPort()"
title: "Socket.getLocalPort"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getLocalPort

```java
public int getLocalPort()
```

Returns the local port number to which this socket is bound.
 

 If the socket was bound prior to being `close closed`,
 then this method will continue to return the local port number
 after the socket is closed.

**返回**

- the local port number to which this socket is bound or -1 if the socket is not bound yet.
