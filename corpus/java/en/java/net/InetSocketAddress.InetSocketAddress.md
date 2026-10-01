---
id: "java-en-function-inetsocketaddress-inetsocketaddress"
language: "java"
lang: "en"
category: "function"
name: "InetSocketAddress.InetSocketAddress"
signature: "public InetSocketAddress(int port)"
title: "InetSocketAddress.InetSocketAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetSocketAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetSocketAddress.InetSocketAddress

```java
public InetSocketAddress(int port)
```

Creates a socket address where the IP address is the wildcard address
 and the port number a specified value.
 

 A valid port value is between 0 and 65535.
 A port number of `zero` will let the system pick up an
 ephemeral port in a `bind` operation.

**参数**

- **port** — The port number

**异常**

- **IllegalArgumentException** — if the port parameter is outside the specified range of valid port values.
