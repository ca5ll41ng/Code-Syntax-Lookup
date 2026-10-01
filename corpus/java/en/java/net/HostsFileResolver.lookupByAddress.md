---
id: "java-en-function-hostsfileresolver-lookupbyaddress"
language: "java"
lang: "en"
category: "function"
name: "HostsFileResolver.lookupByAddress"
signature: "public String lookupByAddress(byte[] addr) throws UnknownHostException"
title: "HostsFileResolver.lookupByAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HostsFileResolver.lookupByAddress

```java
public String lookupByAddress(byte[] addr) throws UnknownHostException
```

Lookup the host name  corresponding to the IP address provided.
 Search the configured host file a host name corresponding to
 the specified IP address.

**参数**

- **addr** — byte array representing an IP address

**返回**

- `String` representing the host name mapping

**异常**

- **UnknownHostException** — if no host found for the specified IP address
- **IllegalArgumentException** — if IP address is of illegal length
- **NullPointerException** — if addr is `null`
