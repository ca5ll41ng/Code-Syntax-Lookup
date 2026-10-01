---
id: "java-en-function-registryhandler-registryimpl"
language: "java"
lang: "en"
category: "function"
name: "RegistryHandler.registryImpl"
signature: "Registry registryImpl(int port) throws RemoteException"
title: "RegistryHandler.registryImpl"
directive: "method"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/RegistryHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RegistryHandler.registryImpl

```java
Registry registryImpl(int port) throws RemoteException
```

Constructs and exports a Registry on the specified port.
 The port must be non-zero.

**参数**

- **port** — port to export registry on

**返回**

- registry stub

**异常**

- **RemoteException** — if a remote error occurs

> **⚠ Deprecated** — no replacement.  As of the Java 2 platform v1.2, RMI no longer uses the RegistryHandler to obtain the registry's implementation.
