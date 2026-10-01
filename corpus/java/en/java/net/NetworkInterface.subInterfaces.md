---
id: "java-en-function-networkinterface-subinterfaces"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.subInterfaces"
signature: "public Stream<NetworkInterface> subInterfaces()"
title: "NetworkInterface.subInterfaces"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.subInterfaces

```java
public Stream<NetworkInterface> subInterfaces()
```

Get a Stream of all subinterfaces (also known as virtual
 interfaces) attached to this network interface.

**返回**

- a Stream object with all of the subinterfaces of this network interface

> *Since 9*
