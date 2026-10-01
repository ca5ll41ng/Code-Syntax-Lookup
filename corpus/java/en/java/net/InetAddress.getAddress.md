---
id: "java-en-function-inetaddress-getaddress"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.getAddress"
signature: "public byte[] getAddress()"
title: "InetAddress.getAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.getAddress

```java
public byte[] getAddress()
```

Returns the raw IP address of this `InetAddress`
 object. The result is in network byte order: the highest order
 byte of the address is in `getAddress()[0]`.

**返回**

- the raw IP address of this object.
