---
id: "java-en-function-inetsocketaddress-createunresolved"
language: "java"
lang: "en"
category: "function"
name: "InetSocketAddress.createUnresolved"
signature: "public static InetSocketAddress createUnresolved(String host, int port)"
title: "InetSocketAddress.createUnresolved"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetSocketAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetSocketAddress.createUnresolved

```java
public static InetSocketAddress createUnresolved(String host, int port)
```

Creates an unresolved socket address from a hostname and a port number.
 

 No attempt will be made to resolve the hostname into an InetAddress.
 The address will be flagged as unresolved.
 

 A valid port value is between 0 and 65535.
 A port number of `zero` will let the system pick up an
 ephemeral port in a `bind` operation.

**参数**

- **host** — the Host name
- **port** — The port number

**返回**

- an `InetSocketAddress` representing the unresolved socket address

**异常**

- **IllegalArgumentException** — if the port parameter is outside the range of valid port values, or if the hostname parameter is `null`.

**参见**

- #isUnresolved()

> *Since 1.5*
