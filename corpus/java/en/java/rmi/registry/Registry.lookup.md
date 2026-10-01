---
id: "java-en-function-registry-lookup"
language: "java"
lang: "en"
category: "function"
name: "Registry.lookup"
signature: "public Remote lookup(String name) throws RemoteException, NotBoundException, AccessException"
title: "Registry.lookup"
directive: "method"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/Registry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Registry.lookup

```java
public Remote lookup(String name) throws RemoteException, NotBoundException, AccessException
```

Returns the remote reference bound to the specified
 name in this registry.

**参数**

- **name** — the name for the remote reference to look up

**返回**

- a reference to a remote object

**异常**

- **NotBoundException** — if name is not currently bound
- **RemoteException** — if remote communication with the registry failed; if exception is a ServerException containing an AccessException, then the registry denies the caller access to perform this operation
- **AccessException** — if this registry is local and it denies the caller access to perform this operation
- **NullPointerException** — if name is null
