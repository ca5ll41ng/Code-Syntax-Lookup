---
id: "java-en-function-socket-getlocaladdress"
language: "java"
lang: "en"
category: "function"
name: "Socket.getLocalAddress"
signature: "public InetAddress getLocalAddress()"
title: "Socket.getLocalAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getLocalAddress

```java
public InetAddress getLocalAddress()
```

Gets the local address to which the socket is bound.

**返回**

- the local address to which the socket is bound, or the wildcard address if the socket is closed or not bound yet.

> *Since 1.1*
