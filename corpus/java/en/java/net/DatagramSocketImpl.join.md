---
id: "java-en-function-datagramsocketimpl-join"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.join"
signature: "protected abstract void join(InetAddress inetaddr) throws IOException"
title: "DatagramSocketImpl.join"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.join

```java
protected abstract void join(InetAddress inetaddr) throws IOException
```

Join the multicast group.

**参数**

- **inetaddr** — multicast address to join.

**异常**

- **IOException** — if an I/O exception occurs while joining the multicast group.
