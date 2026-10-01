---
id: "java-en-function-serverref-exportobject"
language: "java"
lang: "en"
category: "function"
name: "ServerRef.exportObject"
signature: "RemoteStub exportObject(Remote obj, Object data) throws RemoteException"
title: "ServerRef.exportObject"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/ServerRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerRef.exportObject

```java
RemoteStub exportObject(Remote obj, Object data) throws RemoteException
```

Creates a client stub object for the supplied Remote object.
 If the call completes successfully, the remote object should
 be able to accept incoming calls from clients.

**参数**

- **obj** — the remote object implementation
- **data** — information necessary to export the object

**返回**

- the stub for the remote object

**异常**

- **RemoteException** — if an exception occurs attempting to export the object (e.g., stub class could not be found)

> *Since 1.1*
