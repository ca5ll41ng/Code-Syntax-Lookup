---
id: "java-en-function-inetaddressresolver-lookupbyaddress"
language: "java"
lang: "en"
category: "function"
name: "InetAddressResolver.lookupByAddress"
signature: "String lookupByAddress(byte[] addr) throws UnknownHostException"
title: "InetAddressResolver.lookupByAddress"
directive: "method"
module: "java.base/java.net.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/spi/InetAddressResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddressResolver.lookupByAddress

```java
String lookupByAddress(byte[] addr) throws UnknownHostException
```

Lookup the host name corresponding to the raw IP address provided.

 

 `addr` argument is in network byte order: the highest order byte of the address
 is in `addr[0]`.

 

 IPv4 address byte array must be 4 bytes long and IPv6 byte array
 must be 16 bytes long.

**参数**

- **addr** — byte array representing a raw IP address

**返回**

- `String` representing the host name mapping

**异常**

- **UnknownHostException** — if no host name is found for the specified IP address
- **IllegalArgumentException** — if the length of the provided byte array doesn't correspond to a valid IP address length
- **NullPointerException** — if addr is `null`
