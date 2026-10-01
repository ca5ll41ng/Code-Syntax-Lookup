---
id: "java-en-function-multicastsocket-getloopbackmode"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.getLoopbackMode"
signature: "public boolean getLoopbackMode() throws SocketException"
title: "MulticastSocket.getLoopbackMode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.getLoopbackMode

```java
public boolean getLoopbackMode() throws SocketException
```

Get the setting for local loopback of multicast datagrams.

**返回**

- true if the LoopbackMode has been disabled

**异常**

- **SocketException** — if an error occurs while getting the value, or the socket is closed.

**参见**

- #setLoopbackMode

> *Since 1.4*

> **⚠ Deprecated** — Use `getOption` with `IP_MULTICAST_LOOP` instead.
