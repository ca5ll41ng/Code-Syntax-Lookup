---
id: "java-en-function-remoteref-done"
language: "java"
lang: "en"
category: "function"
name: "RemoteRef.done"
signature: "void done(RemoteCall call) throws RemoteException"
title: "RemoteRef.done"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RemoteRef.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RemoteRef.done

```java
void done(RemoteCall call) throws RemoteException
```

Allows the remote reference to clean up (or reuse) the connection.
 Done should only be called if the invoke returns successfully
 (non-exceptionally) to the stub.

**参数**

- **call** — object representing remote call

**异常**

- **RemoteException** — if remote error occurs during call cleanup

**参见**

- #invoke(Remote,java.lang.reflect.Method,Object[],long)

> *Since 1.1*

> **⚠ Deprecated** — 1.2 style stubs no longer use this method. Instead of using a sequence of method calls to the remote reference (newCall, invoke, and done), a stub uses a single method, invoke(Remote, Method, Object[], int), on the remote reference to carry out parameter marshalling, remote method executing and unmarshalling of the return value.
