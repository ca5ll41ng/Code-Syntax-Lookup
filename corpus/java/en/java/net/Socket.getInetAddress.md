---
id: "java-en-function-socket-getinetaddress"
language: "java"
lang: "en"
category: "function"
name: "Socket.getInetAddress"
signature: "public InetAddress getInetAddress()"
title: "Socket.getInetAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getInetAddress

```java
public InetAddress getInetAddress()
```

Returns the address to which the socket is connected.
 

 If the socket was connected prior to being `close closed`,
 then this method will continue to return the connected address
 after the socket is closed.

**返回**

- the remote IP address to which this socket is connected, or `null` if the socket is not connected.
