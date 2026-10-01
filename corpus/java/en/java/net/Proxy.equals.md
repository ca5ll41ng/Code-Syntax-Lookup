---
id: "java-en-function-proxy-equals"
language: "java"
lang: "en"
category: "function"
name: "Proxy.equals"
signature: "public final boolean equals(Object obj)"
title: "Proxy.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Proxy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Proxy.equals

```java
public final boolean equals(Object obj)
```

Compares this object against the specified object.
 The result is `true` if and only if the argument is
 not `null` and it represents the same proxy as
 this object.
 

 Two instances of `Proxy` represent the same
 address if both the SocketAddresses and type are equal.

**参数**

- **obj** — the object to compare against.

**返回**

- `true` if the objects are the same; `false` otherwise.

**参见**

- java.net.InetSocketAddress#equals(java.lang.Object)
