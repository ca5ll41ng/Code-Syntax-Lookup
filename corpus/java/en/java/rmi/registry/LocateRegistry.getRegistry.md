---
id: "java-en-function-locateregistry-getregistry"
language: "java"
lang: "en"
category: "function"
name: "LocateRegistry.getRegistry"
signature: "public static Registry getRegistry() throws RemoteException"
title: "LocateRegistry.getRegistry"
directive: "method"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/LocateRegistry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocateRegistry.getRegistry

```java
public static Registry getRegistry() throws RemoteException
```

Returns a reference to the remote object Registry for
 the local host on the default registry port of 1099.

**返回**

- reference (a stub) to the remote object registry

**异常**

- **RemoteException** — if the reference could not be created

> *Since 1.1*
