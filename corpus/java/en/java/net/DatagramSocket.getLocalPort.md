---
id: "java-en-function-datagramsocket-getlocalport"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getLocalPort"
signature: "public int getLocalPort()"
title: "DatagramSocket.getLocalPort"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getLocalPort

```java
public int getLocalPort()
```

Returns the port number on the local host to which this socket
 is bound.

**返回**

- the port number on the local host to which this socket is bound, `-1` if the socket is closed, or `0` if it is not bound yet.
