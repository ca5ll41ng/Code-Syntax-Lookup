---
id: "java-en-function-registry-list"
language: "java"
lang: "en"
category: "function"
name: "Registry.list"
signature: "public String[] list() throws RemoteException, AccessException"
title: "Registry.list"
directive: "method"
module: "java.rmi/java.rmi.registry"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/registry/Registry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Registry.list

```java
public String[] list() throws RemoteException, AccessException
```

Returns an array of the names bound in this registry.  The
 array will contain a snapshot of the names bound in this
 registry at the time of the given invocation of this method.

**返回**

- an array of the names bound in this registry

**异常**

- **RemoteException** — if remote communication with the registry failed; if exception is a ServerException containing an AccessException, then the registry denies the caller access to perform this operation
- **AccessException** — if this registry is local and it denies the caller access to perform this operation
