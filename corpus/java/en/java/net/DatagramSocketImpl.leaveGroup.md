---
id: "java-en-function-datagramsocketimpl-leavegroup"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.leaveGroup"
signature: "protected abstract void leaveGroup(SocketAddress mcastaddr, NetworkInterface netIf) throws IOException"
title: "DatagramSocketImpl.leaveGroup"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.leaveGroup

```java
protected abstract void leaveGroup(SocketAddress mcastaddr, NetworkInterface netIf) throws IOException
```

Leave the multicast group.

**参数**

- **mcastaddr** — address to leave.
- **netIf** — specified the local interface to leave the group at

**异常**

- **IOException** — if an I/O exception occurs while leaving the multicast group

> *Since 1.4*
