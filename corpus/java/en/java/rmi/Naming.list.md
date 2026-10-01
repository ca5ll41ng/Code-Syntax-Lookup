---
id: "java-en-function-naming-list"
language: "java"
lang: "en"
category: "function"
name: "Naming.list"
signature: "public static String[] list(String name) throws RemoteException, java.net.MalformedURLException"
title: "Naming.list"
directive: "method"
module: "java.rmi/java.rmi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/Naming.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Naming.list

```java
public static String[] list(String name) throws RemoteException, java.net.MalformedURLException
```

Returns an array of the names bound in the registry.  The names are
 URL-formatted (without the scheme component) strings. The array contains
 a snapshot of the names present in the registry at the time of the
 call.

**参数**

- **name** — a registry name in URL format (without the scheme component)

**返回**

- an array of names (in the appropriate format) bound in the registry

**异常**

- **MalformedURLException** — if the name is not an appropriately formatted URL
- **RemoteException** — if registry could not be contacted.

> *Since 1.1*
