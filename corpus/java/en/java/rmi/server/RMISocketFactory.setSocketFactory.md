---
id: "java-en-function-rmisocketfactory-setsocketfactory"
language: "java"
lang: "en"
category: "function"
name: "RMISocketFactory.setSocketFactory"
signature: "public static synchronized void setSocketFactory(RMISocketFactory fac) throws IOException"
title: "RMISocketFactory.setSocketFactory"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMISocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMISocketFactory.setSocketFactory

```java
public static synchronized void setSocketFactory(RMISocketFactory fac) throws IOException
```

Set the global socket factory from which RMI gets sockets (if the
 remote object is not associated with a specific client and/or server
 socket factory). The RMI socket factory can only be set once.

**参数**

- **fac** — the socket factory

**异常**

- **IOException** — if the RMI socket factory is already set

**参见**

- #getSocketFactory

> *Since 1.1*
