---
id: "java-en-function-datagramsocket-getinetaddress"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getInetAddress"
signature: "public InetAddress getInetAddress()"
title: "DatagramSocket.getInetAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getInetAddress

```java
public InetAddress getInetAddress()
```

Returns the address to which this socket is connected. Returns
 `null` if the socket is not connected.
 

 If the socket was connected prior to being `close closed`,
 then this method will continue to return the connected address
 after the socket is closed.

**返回**

- the address to which this socket is connected.

> *Since 1.2*
