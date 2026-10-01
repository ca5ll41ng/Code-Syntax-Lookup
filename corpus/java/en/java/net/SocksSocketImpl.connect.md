---
id: "java-en-function-sockssocketimpl-connect"
language: "java"
lang: "en"
category: "function"
name: "SocksSocketImpl.connect"
signature: "protected void connect(SocketAddress endpoint, int timeout) throws IOException"
title: "SocksSocketImpl.connect"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocksSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocksSocketImpl.connect

```java
protected void connect(SocketAddress endpoint, int timeout) throws IOException
```

Connects the Socks Socket to the specified endpoint. It will first
 connect to the SOCKS proxy and negotiate the access. If the proxy
 grants the connections, then the connect is successful and all
 further traffic will go to the "real" endpoint.

**参数**

- **endpoint** — the `SocketAddress` to connect to.
- **timeout** — the timeout value in milliseconds

**异常**

- **IOException** — if the connection can't be established.
- **IllegalArgumentException** — if endpoint is null or a SocketAddress subclass not supported by this socket
