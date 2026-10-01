---
id: "java-en-function-registry-rebind"
language: "java"
lang: "en"
category: "function"
name: "Registry.rebind"
signature: "public void rebind(String name, Remote obj) throws RemoteException, AccessException"
title: "Registry.rebind"
directive: "method"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/Registry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Registry.rebind

```java
public void rebind(String name, Remote obj) throws RemoteException, AccessException
```

Replaces the binding for the specified name in
 this registry with the supplied remote reference.  If there is
 an existing binding for the specified name, it is
 discarded.

**参数**

- **name** — the name to associate with the remote reference
- **obj** — a reference to a remote object (usually a stub)

**异常**

- **RemoteException** — if remote communication with the registry failed; if exception is a ServerException containing an AccessException, then the registry denies the caller access to perform this operation (if originating from a non-local host, for example)
- **AccessException** — if this registry is local and it denies the caller access to perform this operation
- **NullPointerException** — if name is null, or if obj is null
