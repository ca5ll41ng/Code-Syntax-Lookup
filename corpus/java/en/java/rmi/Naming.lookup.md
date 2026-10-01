---
id: "java-en-function-naming-lookup"
language: "java"
lang: "en"
category: "function"
name: "Naming.lookup"
signature: "public static Remote lookup(String name) throws NotBoundException, java.net.MalformedURLException, RemoteException"
title: "Naming.lookup"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/Naming.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Naming.lookup

```java
public static Remote lookup(String name) throws NotBoundException, java.net.MalformedURLException, RemoteException
```

Returns a reference, a stub, for the remote object associated
 with the specified name.

**参数**

- **name** — a name in URL format (without the scheme component)

**返回**

- a reference for a remote object

**异常**

- **NotBoundException** — if name is not currently bound
- **RemoteException** — if registry could not be contacted
- **AccessException** — if this operation is not permitted
- **MalformedURLException** — if the name is not an appropriately formatted URL

> *Since 1.1*
