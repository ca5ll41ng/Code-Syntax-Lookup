---
id: "java-en-function-datagramsocket-isconnected"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.isConnected"
signature: "public boolean isConnected()"
title: "DatagramSocket.isConnected"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.isConnected

```java
public boolean isConnected()
```

Returns the connection state of the socket.
 

 If the socket was connected prior to being `close closed`,
 then this method will continue to return `true`
 after the socket is closed.

**返回**

- true if the socket successfully connected to a server

> *Since 1.4*
