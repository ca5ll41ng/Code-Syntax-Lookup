---
id: "java-en-function-datagramsocket-supportedoptions"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.supportedOptions"
signature: "public Set<SocketOption<?>> supportedOptions()"
title: "DatagramSocket.supportedOptions"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.supportedOptions

```java
public Set<SocketOption<?>> supportedOptions()
```

Returns a set of the socket options supported by this socket.

 This method will continue to return the set of options even after
 the socket has been closed.

**返回**

- A set of the socket options supported by this socket. This set may be empty if the socket's DatagramSocketImpl cannot be created.

> *Since 9*
