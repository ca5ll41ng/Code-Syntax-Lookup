---
id: "java-en-function-inet4address-equals"
language: "java"
lang: "en"
category: "function"
name: "Inet4Address.equals"
signature: "public boolean equals(Object obj)"
title: "Inet4Address.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Inet4Address.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inet4Address.equals

```java
public boolean equals(Object obj)
```

Compares this object against the specified object.
 The result is `true` if and only if the argument is
 not `null` and it represents the same IP address as
 this object.
 

 Two instances of `InetAddress` represent the same IP
 address if the length of the byte arrays returned by
 `getAddress` is the same for both, and each of the
 array components is the same for the byte arrays.

**参数**

- **obj** — the object to compare against.

**返回**

- `true` if the objects are the same; `false` otherwise.

**参见**

- java.net.InetAddress#getAddress()
