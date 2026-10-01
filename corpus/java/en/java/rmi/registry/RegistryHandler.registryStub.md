---
id: "java-en-function-registryhandler-registrystub"
language: "java"
lang: "en"
category: "function"
name: "RegistryHandler.registryStub"
signature: "Registry registryStub(String host, int port) throws RemoteException, UnknownHostException"
title: "RegistryHandler.registryStub"
directive: "method"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/RegistryHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RegistryHandler.registryStub

```java
Registry registryStub(String host, int port) throws RemoteException, UnknownHostException
```

Returns a "stub" for contacting a remote registry
 on the specified host and port.

**参数**

- **host** — name of remote registry host
- **port** — remote registry port

**返回**

- remote registry stub

**异常**

- **RemoteException** — if a remote error occurs
- **UnknownHostException** — if unable to resolve given hostname

> **⚠ Deprecated** — no replacement.  As of the Java 2 platform v1.2, RMI no longer uses the RegistryHandler to obtain the registry's stub.
