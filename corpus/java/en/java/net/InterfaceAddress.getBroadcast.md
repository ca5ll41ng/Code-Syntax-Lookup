---
id: "java-en-function-interfaceaddress-getbroadcast"
language: "java"
lang: "en"
category: "function"
name: "InterfaceAddress.getBroadcast"
signature: "public InetAddress getBroadcast()"
title: "InterfaceAddress.getBroadcast"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InterfaceAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InterfaceAddress.getBroadcast

```java
public InetAddress getBroadcast()
```

Returns an `InetAddress` for the broadcast address
 for this InterfaceAddress.
 

 Only IPv4 networks have broadcast address therefore, in the case
 of an IPv6 network, `null` will be returned.
 

 Some network interfaces do not support broadcasting and may
 also return `null`.

**返回**

- the `InetAddress` representing the broadcast address or `null` if there is no broadcast address.
