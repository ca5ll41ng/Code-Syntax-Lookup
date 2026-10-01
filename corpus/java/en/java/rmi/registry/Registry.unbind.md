---
id: "java-en-function-registry-unbind"
language: "java"
lang: "en"
category: "function"
name: "Registry.unbind"
signature: "public void unbind(String name) throws RemoteException, NotBoundException, AccessException"
title: "Registry.unbind"
directive: "method"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/Registry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Registry.unbind

```java
public void unbind(String name) throws RemoteException, NotBoundException, AccessException
```

Removes the binding for the specified name in
 this registry.

**参数**

- **name** — the name of the binding to remove

**异常**

- **NotBoundException** — if name is not currently bound
- **RemoteException** — if remote communication with the registry failed; if exception is a ServerException containing an AccessException, then the registry denies the caller access to perform this operation (if originating from a non-local host, for example)
- **AccessException** — if this registry is local and it denies the caller access to perform this operation
- **NullPointerException** — if name is null
