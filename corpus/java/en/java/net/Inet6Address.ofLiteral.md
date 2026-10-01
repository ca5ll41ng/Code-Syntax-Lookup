---
id: "java-en-function-inet6address-ofliteral"
language: "java"
lang: "en"
category: "function"
name: "Inet6Address.ofLiteral"
signature: "public static InetAddress ofLiteral(String ipv6AddressLiteral)"
title: "Inet6Address.ofLiteral"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Inet6Address.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inet6Address.ofLiteral

```java
public static InetAddress ofLiteral(String ipv6AddressLiteral)
```

Creates an `InetAddress` based on the provided `#format textual representation` of an IPv6 address.
 

 If the provided address literal cannot represent `#format
 a valid IPv6 address` an `IllegalArgumentException` is thrown.
 An `IllegalArgumentException` is also thrown if an IPv6 scoped address literal
 contains a scope-id that doesn't map to any network interface on the system, or
 if a scope-id is present in an IPv4-mapped IPv6 address literal.
 

 This method doesn't block, i.e. no reverse lookup is performed.
 

 Note that IPv6 address literal forms are also supported when enclosed in
 square brackets.
 Note also that if the supplied literal represents an `#special-ipv6-address IPv4-mapped IPv6 address` an
 instance of `Inet4Address` is returned.

**参数**

- **ipv6AddressLiteral** — the textual representation of an IPv6 address.

**返回**

- an `InetAddress` object with no hostname set, and constructed from the provided IPv6 address literal.

**异常**

- **IllegalArgumentException** — if the `ipv6AddressLiteral` cannot be parsed as an IPv6 address literal.
- **NullPointerException** — if the `ipv6AddressLiteral` is `null`.

> *Since 22*
