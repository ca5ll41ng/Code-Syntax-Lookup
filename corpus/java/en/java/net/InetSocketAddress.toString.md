---
id: "java-en-function-inetsocketaddress-tostring"
language: "java"
lang: "en"
category: "function"
name: "InetSocketAddress.toString"
signature: "public String toString()"
title: "InetSocketAddress.toString"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetSocketAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetSocketAddress.toString

```java
public String toString()
```

Constructs a string representation of this InetSocketAddress.
 This string is constructed by calling `toString`
 on the InetAddress and concatenating the port number (with a colon).
 

 If the address is an IPv6 address, the IPv6 literal is enclosed in
 square brackets, for example: `"localhost/[0:0:0:0:0:0:0:1]:80"`.
 If the address is `isUnresolved() unresolved`,
 `` is displayed in place of the address literal, for
 example `"foo/:80"`.
 

 To retrieve a string representation of the hostname or the address, use
 `getHostString`, rather than parsing the string returned by this
 `toString` method.

**返回**

- a string representation of this object.
