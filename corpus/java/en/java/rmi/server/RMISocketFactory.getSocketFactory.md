---
id: "java-en-function-rmisocketfactory-getsocketfactory"
language: "java"
lang: "en"
category: "function"
name: "RMISocketFactory.getSocketFactory"
signature: "public static synchronized RMISocketFactory getSocketFactory()"
title: "RMISocketFactory.getSocketFactory"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMISocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMISocketFactory.getSocketFactory

```java
public static synchronized RMISocketFactory getSocketFactory()
```

Returns the socket factory set by the setSocketFactory
 method. Returns null if no socket factory has been
 set.

**返回**

- the socket factory

**参见**

- #setSocketFactory(RMISocketFactory)

> *Since 1.1*
