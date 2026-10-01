---
id: "java-en-function-networkinterface-equals"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.equals"
signature: "public boolean equals(Object obj)"
title: "NetworkInterface.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.equals

```java
public boolean equals(Object obj)
```

Compares this object against the specified object.
 The result is `true` if and only if the argument is
 not `null` and it represents the same NetworkInterface
 as this object.
 

 Two instances of `NetworkInterface` represent the same
 NetworkInterface if both the name and the set of `InetAddress`es
 bound to the interfaces are equal.

 underlying interface may not compare equal if the addresses
 of the underlying interface are being dynamically updated by
 the system.

**参数**

- **obj** — the object to compare against.

**返回**

- `true` if the objects are the same; `false` otherwise.

**参见**

- java.net.InetAddress#getAddress()
