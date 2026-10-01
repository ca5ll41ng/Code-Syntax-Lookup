---
id: "java-en-function-rmisocketfactory-getdefaultsocketfactory"
language: "java"
lang: "en"
category: "function"
name: "RMISocketFactory.getDefaultSocketFactory"
signature: "public static synchronized RMISocketFactory getDefaultSocketFactory()"
title: "RMISocketFactory.getDefaultSocketFactory"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMISocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMISocketFactory.getDefaultSocketFactory

```java
public static synchronized RMISocketFactory getDefaultSocketFactory()
```

Returns a reference to the default socket factory used
 by this RMI implementation.  This will be the factory used
 by the RMI runtime when getSocketFactory
 returns null.

**返回**

- the default RMI socket factory

> *Since 1.1*
