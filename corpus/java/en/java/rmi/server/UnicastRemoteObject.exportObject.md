---
id: "java-en-function-unicastremoteobject-exportobject"
language: "java"
lang: "en"
category: "function"
name: "UnicastRemoteObject.exportObject"
signature: "public static RemoteStub exportObject(Remote obj) throws RemoteException"
title: "UnicastRemoteObject.exportObject"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/UnicastRemoteObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnicastRemoteObject.exportObject

```java
public static RemoteStub exportObject(Remote obj) throws RemoteException
```

Exports the remote object to make it available to receive incoming
 calls using an anonymous port. This method will always return a
 statically generated stub.

 

The object is exported with a server socket
 created using the `RMISocketFactory` class.

**参数**

- **obj** — the remote object to be exported

**返回**

- remote object stub

**异常**

- **RemoteException** — if export fails

> *Since 1.1*

> **⚠ Deprecated** — This method is deprecated because it supports only static stubs. Use `exportObject` or `exportObject(Remote, int, RMIClientSocketFactory, RMIServerSocketFactory) exportObject` instead.
