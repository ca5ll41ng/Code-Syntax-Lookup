---
id: "java-en-function-locateregistry-createregistry"
language: "java"
lang: "en"
category: "function"
name: "LocateRegistry.createRegistry"
signature: "public static Registry createRegistry(int port) throws RemoteException"
title: "LocateRegistry.createRegistry"
directive: "method"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/LocateRegistry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocateRegistry.createRegistry

```java
public static Registry createRegistry(int port) throws RemoteException
```

Creates and exports a Registry instance on the local
 host that accepts requests on the specified port.

 

The Registry instance is exported as if the static
 `exportObject(Remote,int)
 UnicastRemoteObject.exportObject` method is invoked, passing the
 Registry instance and the specified port as
 arguments, except that the Registry instance is
 exported with a well-known object identifier, an `ObjID`
 instance constructed with the value `REGISTRY_ID`.

**参数**

- **port** — the port on which the registry accepts requests

**返回**

- the registry

**异常**

- **RemoteException** — if the registry could not be exported

> *Since 1.1*
