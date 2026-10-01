---
id: "java-en-function-inetaddress-getbyaddress"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.getByAddress"
signature: "public static InetAddress getByAddress(String host, byte[] addr) throws UnknownHostException"
title: "InetAddress.getByAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.getByAddress

```java
public static InetAddress getByAddress(String host, byte[] addr) throws UnknownHostException
```

Creates an InetAddress based on the provided host name and IP address.
 The system-wide `InetAddressResolver resolver` is not used to check
 the validity of the address.

 

 The host name can either be a machine name, such as
 "`www.example.com`", or a textual representation of its IP
 address.
 

 No validity checking is done on the host name either.

 

 If addr specifies an IPv4 address an instance of Inet4Address
 will be returned; otherwise, an instance of Inet6Address
 will be returned.

 

 IPv4 address byte array must be 4 bytes long and IPv6 byte array
 must be 16 bytes long

**参数**

- **host** — the specified host
- **addr** — the raw IP address in network byte order

**返回**

- an InetAddress object created from the raw IP address.

**异常**

- **UnknownHostException** — if IP address is of illegal length

> *Since 1.4*
