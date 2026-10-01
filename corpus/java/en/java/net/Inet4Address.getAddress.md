---
id: "java-en-function-inet4address-getaddress"
language: "java"
lang: "en"
category: "function"
name: "Inet4Address.getAddress"
signature: "public byte[] getAddress()"
title: "Inet4Address.getAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Inet4Address.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inet4Address.getAddress

```java
public byte[] getAddress()
```

Returns the raw IP address of this `InetAddress`
 object. The result is in network byte order: the highest order
 byte of the address is in `getAddress()[0]`.

**返回**

- the raw IP address of this object.
