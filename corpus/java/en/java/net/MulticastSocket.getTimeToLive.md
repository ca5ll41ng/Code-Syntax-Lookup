---
id: "java-en-function-multicastsocket-gettimetolive"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.getTimeToLive"
signature: "public int getTimeToLive() throws IOException"
title: "MulticastSocket.getTimeToLive"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.getTimeToLive

```java
public int getTimeToLive() throws IOException
```

Get the default time-to-live for multicast packets sent out on
 the socket.

 This method is equivalent to calling `getOption(SocketOption)
 getOption`.

**返回**

- the default time-to-live value

**异常**

- **IOException** — if an I/O exception occurs while getting the default time-to-live value, or the socket is closed.

**参见**

- #setTimeToLive(int)
- StandardSocketOptions#IP_MULTICAST_TTL

> *Since 1.2*
