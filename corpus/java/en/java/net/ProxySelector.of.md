---
id: "java-en-function-proxyselector-of"
language: "java"
lang: "en"
category: "function"
name: "ProxySelector.of"
signature: "public static ProxySelector of(InetSocketAddress proxyAddress)"
title: "ProxySelector.of"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ProxySelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProxySelector.of

```java
public static ProxySelector of(InetSocketAddress proxyAddress)
```

Returns a ProxySelector which uses the given proxy address for all HTTP
 and HTTPS requests. If `proxyAddress` is `null`
 then proxying is disabled.

**参数**

- **proxyAddress** — The address of the proxy

**返回**

- a ProxySelector

> *Since 9*
