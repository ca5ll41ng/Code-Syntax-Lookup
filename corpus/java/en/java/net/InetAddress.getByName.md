---
id: "java-en-function-inetaddress-getbyname"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.getByName"
signature: "public static InetAddress getByName(String host) throws UnknownHostException"
title: "InetAddress.getByName"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.getByName

```java
public static InetAddress getByName(String host) throws UnknownHostException
```

Determines the IP address of a host, given the host's name.

 

 The host name can either be a machine name, such as
 "`www.example.com`", or a textual representation of its
 IP address. If a literal IP address is supplied, only the
 validity of the address format is checked.

 

 For `host` specified in literal IPv6 address,
 either the form defined in RFC 2732 or the literal IPv6 address
 format defined in RFC 2373 is accepted. IPv6 scoped addresses are also
 supported. See here for a description of IPv6
 scoped addresses.

 

 If the host is `null` or `host.length()` is equal
 to zero, then an `InetAddress` representing an address of the
 loopback interface is returned.
 See RFC&nbsp;3330
 section&nbsp;2 and RFC&nbsp;2373
 section&nbsp;2.5.3.

**参数**

- **host** — the specified host, or `null`.

**返回**

- an IP address for the given host name.

**异常**

- **UnknownHostException** — if no IP address for the `host` could be found, or if a scope_id was specified for a global IPv6 address.
