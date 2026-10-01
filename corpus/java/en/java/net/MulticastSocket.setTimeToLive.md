---
id: "java-en-function-multicastsocket-settimetolive"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.setTimeToLive"
signature: "public void setTimeToLive(int ttl) throws IOException"
title: "MulticastSocket.setTimeToLive"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.setTimeToLive

```java
public void setTimeToLive(int ttl) throws IOException
```

Set the default time-to-live for multicast packets sent out
 on this `MulticastSocket` in order to control the
 scope of the multicasts.

 

 The ttl **must** be in the range `0 <= ttl <=
 255` or an `IllegalArgumentException` will be thrown.
 Multicast packets sent with a TTL of `0` are not transmitted
 on the network but may be delivered locally.

 This method is equivalent to calling `setOption(SocketOption, Object)
 setOption`.

**参数**

- **ttl** — the time-to-live

**异常**

- **IOException** — if an I/O exception occurs while setting the default time-to-live value, or the socket is closed.

**参见**

- #getTimeToLive()
- StandardSocketOptions#IP_MULTICAST_TTL

> *Since 1.2*
