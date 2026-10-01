---
id: "java-en-function-interfaceaddress-equals"
language: "java"
lang: "en"
category: "function"
name: "InterfaceAddress.equals"
signature: "public boolean equals(Object obj)"
title: "InterfaceAddress.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InterfaceAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InterfaceAddress.equals

```java
public boolean equals(Object obj)
```

Compares this object against the specified object.
 The result is `true` if and only if the argument is
 not `null` and it represents the same interface address as
 this object.
 

 Two instances of `InterfaceAddress` represent the same
 address if the InetAddress, the prefix length and the broadcast are
 the same for both.

**参数**

- **obj** — the object to compare against.

**返回**

- `true` if the objects are the same; `false` otherwise.

**参见**

- java.net.InterfaceAddress#hashCode()
