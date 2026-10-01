---
id: "java-en-function-inetaddress-getallbyname"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.getAllByName"
signature: "public static InetAddress[] getAllByName(String host) throws UnknownHostException"
title: "InetAddress.getAllByName"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.getAllByName

```java
public static InetAddress[] getAllByName(String host) throws UnknownHostException
```

Given the name of a host, returns an array of its IP addresses,
 based on the system-wide `InetAddressResolver resolver`.

 

 The host name can either be a machine name, such as
 "`www.example.com`", or a textual representation of its IP
 address. If a literal IP address is supplied, only the
 validity of the address format is checked.

 

 For `host` specified in literal IPv6 address,
 either the form defined in RFC 2732 or the literal IPv6 address
 format defined in RFC 2373 is accepted. A literal IPv6 address may
 also be qualified by appending a scoped zone identifier or scope_id.
 The syntax and usage of scope_ids is described
 here.

 

 If the host is `null` or `host.length()` is equal
 to zero, then an `InetAddress` representing an address of the
 loopback interface is returned.
 See RFC&nbsp;3330
 section&nbsp;2 and RFC&nbsp;2373
 section&nbsp;2.5.3.

**参数**

- **host** — the name of the host, or `null`.

**返回**

- an array of all the IP addresses for a given host name.

**异常**

- **UnknownHostException** — if no IP address for the `host` could be found, or if a scope_id was specified for a global IPv6 address.
