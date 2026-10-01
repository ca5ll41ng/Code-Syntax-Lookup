---
id: "java-en-function-datagramsocketimpl-bind"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.bind"
signature: "protected abstract void bind(int lport, InetAddress laddr) throws SocketException"
title: "DatagramSocketImpl.bind"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.bind

```java
protected abstract void bind(int lport, InetAddress laddr) throws SocketException
```

Binds a datagram socket to a local port and address.

**参数**

- **lport** — the local port
- **laddr** — the local address

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error.
