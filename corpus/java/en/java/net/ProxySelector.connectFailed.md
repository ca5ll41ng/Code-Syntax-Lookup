---
id: "java-en-function-proxyselector-connectfailed"
language: "java"
lang: "en"
category: "function"
name: "ProxySelector.connectFailed"
signature: "public abstract void connectFailed(URI uri, SocketAddress sa, IOException ioe)"
title: "ProxySelector.connectFailed"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ProxySelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProxySelector.connectFailed

```java
public abstract void connectFailed(URI uri, SocketAddress sa, IOException ioe)
```

Called to indicate that a connection could not be established
 to a proxy/socks server. An implementation of this method can
 temporarily remove the proxies or reorder the sequence of
 proxies returned by `select`, using the address
 and the IOException caught when trying to connect.

**参数**

- **uri** — The URI that the proxy at sa failed to serve.
- **sa** — The socket address of the proxy/SOCKS server
- **ioe** — The I/O exception thrown when the connect failed.

**异常**

- **IllegalArgumentException** — if either argument is null
