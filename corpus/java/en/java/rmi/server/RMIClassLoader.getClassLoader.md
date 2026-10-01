---
id: "java-en-function-rmiclassloader-getclassloader"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoader.getClassLoader"
signature: "public static ClassLoader getClassLoader(String codebase) throws MalformedURLException"
title: "RMIClassLoader.getClassLoader"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoader.getClassLoader

```java
public static ClassLoader getClassLoader(String codebase) throws MalformedURLException
```

Returns a class loader that loads classes from the given codebase
 URL path.

 

The class loader returned is the class loader that the
 `loadClass` method would use to load classes
 for the same codebase argument.

 

This method delegates to the
 `getClassLoader` method
 of the provider instance, passing codebase as the argument.

**参数**

- **codebase** — the list of URLs (space-separated) from which the returned class loader will load classes from, or null

**返回**

- a class loader that loads classes from the given codebase URL path

**异常**

- **MalformedURLException** — if codebase is non-null and contains an invalid URL, or if codebase is null and a provider-specific URL used to identify the class loader is invalid

> *Since 1.3*
