---
id: "java-en-function-naming-rebind"
language: "java"
lang: "en"
category: "function"
name: "Naming.rebind"
signature: "public static void rebind(String name, Remote obj) throws RemoteException, java.net.MalformedURLException"
title: "Naming.rebind"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/Naming.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Naming.rebind

```java
public static void rebind(String name, Remote obj) throws RemoteException, java.net.MalformedURLException
```

Rebinds the specified name to a new remote object. Any existing
 binding for the name is replaced.

**参数**

- **name** — a name in URL format (without the scheme component)
- **obj** — new remote object to associate with the name

**异常**

- **MalformedURLException** — if the name is not an appropriately formatted URL
- **RemoteException** — if registry could not be contacted
- **AccessException** — if this operation is not permitted (if originating from a non-local host, for example)

> *Since 1.1*
