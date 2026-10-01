---
id: "java-en-function-networkinterface-getparent"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.getParent"
signature: "public NetworkInterface getParent()"
title: "NetworkInterface.getParent"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.getParent

```java
public NetworkInterface getParent()
```

Returns the parent NetworkInterface of this interface if this is
 a subinterface, or `null` if it is a physical
 (non virtual) interface or has no parent.

**返回**

- The `NetworkInterface` this interface is attached to.

> *Since 1.6*
