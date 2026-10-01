---
id: "java-en-function-datagramsocketimpl-joingroup"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.joinGroup"
signature: "protected abstract void joinGroup(SocketAddress mcastaddr, NetworkInterface netIf) throws IOException"
title: "DatagramSocketImpl.joinGroup"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.joinGroup

```java
protected abstract void joinGroup(SocketAddress mcastaddr, NetworkInterface netIf) throws IOException
```

Join the multicast group.

**参数**

- **mcastaddr** — address to join.
- **netIf** — specifies the local interface to receive multicast datagram packets

**异常**

- **IOException** — if an I/O exception occurs while joining the multicast group

> *Since 1.4*
