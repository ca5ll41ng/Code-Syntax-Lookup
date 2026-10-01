---
id: "java-en-function-unicastremoteobject-unicastremoteobject"
language: "java"
lang: "en"
category: "function"
name: "UnicastRemoteObject.UnicastRemoteObject"
signature: "protected UnicastRemoteObject() throws RemoteException"
title: "UnicastRemoteObject.UnicastRemoteObject"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/UnicastRemoteObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnicastRemoteObject.UnicastRemoteObject

```java
protected UnicastRemoteObject() throws RemoteException
```

Creates and exports a new UnicastRemoteObject object using an
 anonymous port.

 

The object is exported with a server socket
 created using the `RMISocketFactory` class.

**异常**

- **RemoteException** — if failed to export object

> *Since 1.1*
