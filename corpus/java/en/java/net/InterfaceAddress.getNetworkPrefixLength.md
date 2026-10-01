---
id: "java-en-function-interfaceaddress-getnetworkprefixlength"
language: "java"
lang: "en"
category: "function"
name: "InterfaceAddress.getNetworkPrefixLength"
signature: "public short getNetworkPrefixLength()"
title: "InterfaceAddress.getNetworkPrefixLength"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InterfaceAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InterfaceAddress.getNetworkPrefixLength

```java
public short getNetworkPrefixLength()
```

Returns the network prefix length for this address. This is also known
 as the subnet mask in the context of IPv4 addresses.
 Typical IPv4 values would be 8 (255.0.0.0), 16 (255.255.0.0)
 or 24 (255.255.255.0). 

 Typical IPv6 values would be 128 (::1/128) or 10 (fe80::203:baff:fe27:1243/10)

**返回**

- a `short` representing the prefix length for the subnet of that address.
