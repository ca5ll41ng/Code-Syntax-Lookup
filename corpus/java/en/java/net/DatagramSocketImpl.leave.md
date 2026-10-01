---
id: "java-en-function-datagramsocketimpl-leave"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.leave"
signature: "protected abstract void leave(InetAddress inetaddr) throws IOException"
title: "DatagramSocketImpl.leave"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.leave

```java
protected abstract void leave(InetAddress inetaddr) throws IOException
```

Leave the multicast group.

**参数**

- **inetaddr** — multicast address to leave.

**异常**

- **IOException** — if an I/O exception occurs while leaving the multicast group.
