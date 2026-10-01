---
id: "java-en-function-rmiclassloaderspi-getclassloader"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoaderSpi.getClassLoader"
signature: "public abstract ClassLoader getClassLoader(String codebase) throws MalformedURLException"
title: "RMIClassLoaderSpi.getClassLoader"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoaderSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoaderSpi.getClassLoader

```java
public abstract ClassLoader getClassLoader(String codebase) throws MalformedURLException
```

Provides the implementation for
 `getClassLoader`.

 Returns a class loader that loads classes from the given codebase
 URL path.

**参数**

- **codebase** — the list of URLs (space-separated) from which the returned class loader will load classes from, or null

**返回**

- a class loader that loads classes from the given codebase URL path

**异常**

- **MalformedURLException** — if codebase is non-null and contains an invalid URL, or if codebase is null and a provider-specific URL used to identify the class loader is invalid
