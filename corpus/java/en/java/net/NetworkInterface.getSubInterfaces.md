---
id: "java-en-function-networkinterface-getsubinterfaces"
language: "java"
lang: "en"
category: "function"
name: "NetworkInterface.getSubInterfaces"
signature: "public Enumeration<NetworkInterface> getSubInterfaces()"
title: "NetworkInterface.getSubInterfaces"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface.getSubInterfaces

```java
public Enumeration<NetworkInterface> getSubInterfaces()
```

Get an Enumeration with all the subinterfaces (also known as virtual
 interfaces) attached to this network interface.
 

 For instance eth0:1 will be a subinterface to eth0.

**返回**

- an Enumeration object with all of the subinterfaces of this network interface

**参见**

- #subInterfaces()

> *Since 1.6*
