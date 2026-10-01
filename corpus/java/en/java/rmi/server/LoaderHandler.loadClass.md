---
id: "java-en-function-loaderhandler-loadclass"
language: "java"
lang: "en"
category: "function"
name: "LoaderHandler.loadClass"
signature: "Class<?> loadClass(String name) throws MalformedURLException, ClassNotFoundException"
title: "LoaderHandler.loadClass"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/LoaderHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoaderHandler.loadClass

```java
Class<?> loadClass(String name) throws MalformedURLException, ClassNotFoundException
```

Loads a class from the location specified by the
 java.rmi.server.codebase property.

**参数**

- **name** — the name of the class to load

**返回**

- the Class object representing the loaded class

**异常**

- **MalformedURLException** — if the system property **java.rmi.server.codebase** contains an invalid URL
- **ClassNotFoundException** — if a definition for the class could not be found at the codebase location.

> *Since 1.1*

> **⚠ Deprecated** — no replacement
