---
id: "java-en-function-inetsocketaddress-equals"
language: "java"
lang: "en"
category: "function"
name: "InetSocketAddress.equals"
signature: "public final boolean equals(Object obj)"
title: "InetSocketAddress.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetSocketAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetSocketAddress.equals

```java
public final boolean equals(Object obj)
```

Compares this object against the specified object.
 The result is `true` if and only if the argument is
 not `null` and it represents the same address as
 this object.
 

 Two instances of `InetSocketAddress` represent the same
 address if both the InetAddresses (or hostnames if it is unresolved) and port
 numbers are equal.
 If both addresses are unresolved, then the hostname and the port number
 are compared.

 Note: Hostnames are case insensitive. e.g. "FooBar" and "foobar" are
 considered equal.

**参数**

- **obj** — the object to compare against.

**返回**

- `true` if the objects are the same; `false` otherwise.

**参见**

- java.net.InetAddress#equals(java.lang.Object)
