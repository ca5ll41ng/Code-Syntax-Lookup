---
id: "java-en-function-socket-isconnected"
language: "java"
lang: "en"
category: "function"
name: "Socket.isConnected"
signature: "public boolean isConnected()"
title: "Socket.isConnected"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.isConnected

```java
public boolean isConnected()
```

Returns the connection state of the socket.
 

 `close() Closing` a socket doesn't clear its connection state, which means
 this method will return `true` for a closed socket
 if it was successfully connected prior to being closed.

**返回**

- true if the socket was successfully connected to a server

> *Since 1.4*
