---
id: "java-en-function-inetaddressresolver-lookupbyname"
language: "java"
lang: "en"
category: "function"
name: "InetAddressResolver.lookupByName"
signature: "Stream<InetAddress> lookupByName(String host, LookupPolicy lookupPolicy) throws UnknownHostException"
title: "InetAddressResolver.lookupByName"
directive: "method"
module: "java.base/java.net.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/spi/InetAddressResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddressResolver.lookupByName

```java
Stream<InetAddress> lookupByName(String host, LookupPolicy lookupPolicy) throws UnknownHostException
```

Given the name of a host, returns a stream of IP addresses of the requested
 address family associated with a provided hostname.

 

 `host` should be a machine name, such as "`www.example.com`",
 not a textual representation of its IP address. No validation is performed on
 the given `host` name: if a textual representation is supplied, the name
 resolution is likely to fail and `UnknownHostException` may be thrown.

 

 The address family type and addresses order are specified by the
 `LookupPolicy` instance. Lookup operation characteristics could be
 acquired with `characteristics`.
 If `IPV4` and
 `IPV6` characteristics provided then this
 method returns addresses of both IPV4 and IPV6 families.

**参数**

- **host** — the specified hostname
- **lookupPolicy** — the address lookup policy

**返回**

- a stream of IP addresses for the requested host

**异常**

- **NullPointerException** — if either parameter is `null`
- **UnknownHostException** — if no IP address for the `host` could be found

**参见**

- LookupPolicy
