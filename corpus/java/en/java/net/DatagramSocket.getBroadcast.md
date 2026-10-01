---
id: "java-en-function-datagramsocket-getbroadcast"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getBroadcast"
signature: "public boolean getBroadcast() throws SocketException"
title: "DatagramSocket.getBroadcast"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getBroadcast

```java
public boolean getBroadcast() throws SocketException
```

Tests if SO_BROADCAST is enabled.

 This method is equivalent to calling `getOption(SocketOption)
 getOption`.

**返回**

- a `boolean` indicating whether or not SO_BROADCAST is enabled.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as an UDP error, or the socket is closed.

**参见**

- #setBroadcast(boolean)
- StandardSocketOptions#SO_BROADCAST

> *Since 1.4*
