---
id: "java-en-function-inet6address-ismulticastaddress"
language: "java"
lang: "en"
category: "function"
name: "Inet6Address.isMulticastAddress"
signature: "public boolean isMulticastAddress()"
title: "Inet6Address.isMulticastAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Inet6Address.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inet6Address.isMulticastAddress

```java
public boolean isMulticastAddress()
```

Utility routine to check if the InetAddress is an IP multicast
 address. 11111111 at the start of the address identifies the
 address as being a multicast address.

**返回**

- a `boolean` indicating if the InetAddress is an IP multicast address
