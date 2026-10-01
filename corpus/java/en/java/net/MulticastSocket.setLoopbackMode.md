---
id: "java-en-function-multicastsocket-setloopbackmode"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.setLoopbackMode"
signature: "public void setLoopbackMode(boolean disable) throws SocketException"
title: "MulticastSocket.setLoopbackMode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.setLoopbackMode

```java
public void setLoopbackMode(boolean disable) throws SocketException
```

Disable/Enable local loopback of multicast datagrams.
 The option is used by the platform's networking code as a hint
 for setting whether multicast data will be looped back to
 the local socket.

 

Because this option is a hint, applications that want to
 verify what loopback mode is set to should call
 `getLoopbackMode`

**参数**

- **disable** — `true` to disable the LoopbackMode

**异常**

- **SocketException** — if an error occurs while setting the value, or the socket is closed.

**参见**

- #getLoopbackMode

> *Since 1.4*

> **⚠ Deprecated** — Use `setOption` with `IP_MULTICAST_LOOP` instead. The loopback mode is enabled by default, `MulticastSocket.setOption(StandardSocketOptions.IP_MULTICAST_LOOP, false)` disables it.
