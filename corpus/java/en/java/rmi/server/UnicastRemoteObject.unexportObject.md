---
id: "java-en-function-unicastremoteobject-unexportobject"
language: "java"
lang: "en"
category: "function"
name: "UnicastRemoteObject.unexportObject"
signature: "public static boolean unexportObject(Remote obj, boolean force) throws java.rmi.NoSuchObjectException"
title: "UnicastRemoteObject.unexportObject"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/UnicastRemoteObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnicastRemoteObject.unexportObject

```java
public static boolean unexportObject(Remote obj, boolean force) throws java.rmi.NoSuchObjectException
```

Removes the remote object, obj, from the RMI runtime. If
 successful, the object can no longer accept incoming RMI calls.
 If the force parameter is true, the object is forcibly unexported
 even if there are pending calls to the remote object or the
 remote object still has calls in progress.  If the force
 parameter is false, the object is only unexported if there are
 no pending or in progress calls to the object.

**参数**

- **obj** — the remote object to be unexported
- **force** — if true, unexports the object even if there are pending or in-progress calls; if false, only unexports the object if there are no pending or in-progress calls

**返回**

- true if operation is successful, false otherwise

**异常**

- **NoSuchObjectException** — if the remote object is not currently exported

> *Since 1.2*
