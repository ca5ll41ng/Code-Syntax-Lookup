---
id: "java-en-function-membershipkey-networkinterface"
language: "java"
lang: "en"
category: "function"
name: "MembershipKey.networkInterface"
signature: "public abstract NetworkInterface networkInterface()"
title: "MembershipKey.networkInterface"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MembershipKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MembershipKey.networkInterface

```java
public abstract NetworkInterface networkInterface()
```

Returns the network interface for which this membership key was created.
 This method will continue to return the network interface even after the
 membership becomes `isValid invalid`.

**返回**

- the network interface
