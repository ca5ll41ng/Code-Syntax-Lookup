---
id: "java-en-function-rmiclassloaderspi-loadclass"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoaderSpi.loadClass"
signature: "public abstract Class<?> loadClass(String codebase, String name, ClassLoader defaultLoader) throws MalformedURLException, ClassNotFoundException"
title: "RMIClassLoaderSpi.loadClass"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoaderSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoaderSpi.loadClass

```java
public abstract Class<?> loadClass(String codebase, String name, ClassLoader defaultLoader) throws MalformedURLException, ClassNotFoundException
```

Provides the implementation for
 `loadClass`,
 `loadClass`, and
 `loadClass`.

 Loads a class from a codebase URL path, optionally using the
 supplied loader.

 Typically, a provider implementation will attempt to
 resolve the named class using the given defaultLoader,
 if specified, before attempting to resolve the class from the
 codebase URL path.

 

An implementation of this method must either return a class
 with the given name or throw an exception.

**参数**

- **codebase** — the list of URLs (separated by spaces) to load the class from, or null
- **name** — the name of the class to load
- **defaultLoader** — additional contextual class loader to use, or null

**返回**

- the Class object representing the loaded class

**异常**

- **MalformedURLException** — if codebase is non-null and contains an invalid URL, or if codebase is null and a provider-specific URL used to load classes is invalid
- **ClassNotFoundException** — if a definition for the class could not be found at the specified location
