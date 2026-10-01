---
id: "java-en-function-inetaddress-ofliteral"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.ofLiteral"
signature: "public static InetAddress ofLiteral(String ipAddressLiteral)"
title: "InetAddress.ofLiteral"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.ofLiteral

```java
public static InetAddress ofLiteral(String ipAddressLiteral)
```

Creates an `InetAddress` based on the provided `#format
 textual representation` of an IP address.
 

 The provided IP address literal is parsed as
 `ofLiteral(String) an IPv4 address literal` first.
 If it cannot be parsed as an IPv4 address literal, then the method attempts
 to parse it as `ofLiteral(String) an IPv6 address literal`.
 If neither attempts succeed an `IllegalArgumentException` is thrown.
 

 This method doesn't block, i.e. no reverse lookup is performed.

**参数**

- **ipAddressLiteral** — the textual representation of an IP address.

**返回**

- an `InetAddress` object with no hostname set, and constructed from the provided IP address literal.

**异常**

- **IllegalArgumentException** — if the `ipAddressLiteral` cannot be parsed as an IPv4 or IPv6 address literal.
- **NullPointerException** — if the `ipAddressLiteral` is `null`.

**参见**

- Inet4Address#ofLiteral(String)
- Inet6Address#ofLiteral(String)
- Inet4Address#ofPosixLiteral(String)

> *Since 22*
