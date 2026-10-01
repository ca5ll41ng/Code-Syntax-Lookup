---
id: "java-en-function-rmiclassloader-loadclass"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoader.loadClass"
signature: "public static Class<?> loadClass(String name) throws MalformedURLException, ClassNotFoundException"
title: "RMIClassLoader.loadClass"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoader.loadClass

```java
public static Class<?> loadClass(String name) throws MalformedURLException, ClassNotFoundException
```

Loads the class with the specified name.

 

This method delegates to `loadClass`,
 passing null as the first argument and
 name as the second argument.

**参数**

- **name** — the name of the class to load

**返回**

- the Class object representing the loaded class

**异常**

- **MalformedURLException** — if a provider-specific URL used to load classes is invalid
- **ClassNotFoundException** — if a definition for the class could not be found at the codebase location

**参见**

- #loadClass(String,String)

> **⚠ Deprecated** — replaced by loadClass(String,String) method
