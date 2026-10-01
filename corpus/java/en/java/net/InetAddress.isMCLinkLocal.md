---
id: "java-en-function-inetaddress-ismclinklocal"
language: "java"
lang: "en"
category: "function"
name: "InetAddress.isMCLinkLocal"
signature: "public boolean isMCLinkLocal()"
title: "InetAddress.isMCLinkLocal"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddress.isMCLinkLocal

```java
public boolean isMCLinkLocal()
```

Utility routine to check if the multicast address has link scope.

**返回**

- a `boolean` indicating if the address has is a multicast address of link-local scope, false if it is not of link-local scope or it is not a multicast address

> *Since 1.4*
