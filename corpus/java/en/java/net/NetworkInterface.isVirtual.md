---
id: "java-en-function-networkinterface-isvirtual"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.isVirtual"
signature: "public boolean isVirtual()"
title: "NetworkInterface.isVirtual"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.isVirtual

```java
public boolean isVirtual()
```

Returns whether this interface is a virtual interface (also called
 subinterface).
 Virtual interfaces are, on some systems, interfaces created as a child
 of a physical interface and given different settings (like address or
 MTU). Usually the name of the interface will the name of the parent
 followed by a colon (:) and a number identifying the child since there
 can be several virtual interfaces attached to a single physical
 interface.

**返回**

- `true` if this interface is a virtual interface.

> *Since 1.6*
