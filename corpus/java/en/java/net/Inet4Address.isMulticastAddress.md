---
id: "java-en-function-inet4address-ismulticastaddress"
language: "java"
lang: "en"
category: "function"
name: "Inet4Address.isMulticastAddress"
signature: "public boolean isMulticastAddress()"
title: "Inet4Address.isMulticastAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Inet4Address.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inet4Address.isMulticastAddress

```java
public boolean isMulticastAddress()
```

Utility routine to check if the InetAddress is an
 IP multicast address. IP multicast address is a Class D
 address i.e first four bits of the address are 1110.

**返回**

- a `boolean` indicating if the InetAddress is an IP multicast address
