---
id: "java-en-function-remoteref-newcall"
language: "java"
lang: "en"
category: "function"
name: "RemoteRef.newCall"
signature: "RemoteCall newCall(RemoteObject obj, Operation[] op, int opnum, long hash) throws RemoteException"
title: "RemoteRef.newCall"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteRef.newCall

```java
RemoteCall newCall(RemoteObject obj, Operation[] op, int opnum, long hash) throws RemoteException
```

Creates an appropriate call object for a new remote method
 invocation on this object.  Passing operation array and index,
 allows the stubs generator to assign the operation indexes and
 interpret them. The remote reference may need the operation to
 encode in the call.

**参数**

- **obj** — remote stub through which to make call
- **op** — array of stub operations
- **opnum** — operation number
- **hash** — stub/skeleton interface hash

**返回**

- call object representing remote call

**异常**

- **RemoteException** — if failed to initiate new remote call

**参见**

- #invoke(Remote,java.lang.reflect.Method,Object[],long)

> *Since 1.1*

> **⚠ Deprecated** — 1.2 style stubs no longer use this method. Instead of using a sequence of method calls on the stub's the remote reference (newCall, invoke, and done), a stub uses a single method, invoke(Remote, Method, Object[], int), on the remote reference to carry out parameter marshalling, remote method executing and unmarshalling of the return value.
