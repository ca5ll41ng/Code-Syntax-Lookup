---
id: "java-en-function-socket-socket"
language: "java"
lang: "en"
category: "function"
name: "Socket.Socket"
signature: "public Socket()"
title: "Socket.Socket"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.Socket

```java
public Socket()
```

Creates an unconnected Socket.
 

 If the application has specified a `SocketImplFactory client
 socket implementation factory`, that factory's
 `createSocketImpl() createSocketImpl`
 method is called to create the actual socket implementation. Otherwise
 a system-default socket implementation is created.

> *Since 1.1*
