---
id: "java-en-function-naming-unbind"
language: "java"
lang: "en"
category: "function"
name: "Naming.unbind"
signature: "public static void unbind(String name) throws RemoteException, NotBoundException, java.net.MalformedURLException"
title: "Naming.unbind"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/Naming.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Naming.unbind

```java
public static void unbind(String name) throws RemoteException, NotBoundException, java.net.MalformedURLException
```

Destroys the binding for the specified name that is associated
 with a remote object.

**参数**

- **name** — a name in URL format (without the scheme component)

**异常**

- **NotBoundException** — if name is not currently bound
- **MalformedURLException** — if the name is not an appropriately formatted URL
- **RemoteException** — if registry could not be contacted
- **AccessException** — if this operation is not permitted (if originating from a non-local host, for example)

> *Since 1.1*
