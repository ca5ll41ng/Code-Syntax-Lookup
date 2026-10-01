---
id: "java-en-function-datagramsocket-getport"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getPort"
signature: "public int getPort()"
title: "DatagramSocket.getPort"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getPort

```java
public int getPort()
```

Returns the port number to which this socket is connected.
 Returns `-1` if the socket is not connected.
 

 If the socket was connected prior to being `close closed`,
 then this method will continue to return the connected port number
 after the socket is closed.

**返回**

- the port number to which this socket is connected.

> *Since 1.2*
