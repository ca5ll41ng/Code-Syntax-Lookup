---
id: "java-en-function-serversocket-getlocalport"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.getLocalPort"
signature: "public int getLocalPort()"
title: "ServerSocket.getLocalPort"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.getLocalPort

```java
public int getLocalPort()
```

Returns the port number on which this socket is listening.
 

 If the socket was bound prior to being `close closed`,
 then this method will continue to return the port number
 after the socket is closed.

**返回**

- the port number to which this socket is listening or -1 if the socket is not bound yet.
