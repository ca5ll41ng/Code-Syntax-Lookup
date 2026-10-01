---
id: "java-en-function-naming-bind"
language: "java"
lang: "en"
category: "function"
name: "Naming.bind"
signature: "public static void bind(String name, Remote obj) throws AlreadyBoundException, java.net.MalformedURLException, RemoteException"
title: "Naming.bind"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/Naming.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Naming.bind

```java
public static void bind(String name, Remote obj) throws AlreadyBoundException, java.net.MalformedURLException, RemoteException
```

Binds the specified name to a remote object.

**参数**

- **name** — a name in URL format (without the scheme component)
- **obj** — a reference for the remote object (usually a stub)

**异常**

- **AlreadyBoundException** — if name is already bound
- **MalformedURLException** — if the name is not an appropriately formatted URL
- **RemoteException** — if registry could not be contacted
- **AccessException** — if this operation is not permitted (if originating from a non-local host, for example)

> *Since 1.1*
