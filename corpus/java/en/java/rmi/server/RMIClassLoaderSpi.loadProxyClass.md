---
id: "java-en-function-rmiclassloaderspi-loadproxyclass"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoaderSpi.loadProxyClass"
signature: "public abstract Class<?> loadProxyClass(String codebase, String[] interfaces, ClassLoader defaultLoader) throws MalformedURLException, ClassNotFoundException"
title: "RMIClassLoaderSpi.loadProxyClass"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoaderSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoaderSpi.loadProxyClass

```java
public abstract Class<?> loadProxyClass(String codebase, String[] interfaces, ClassLoader defaultLoader) throws MalformedURLException, ClassNotFoundException
```

Provides the implementation for
 `loadProxyClass`.

 Loads a dynamic proxy class (see `java.lang.reflect.Proxy`
 that implements a set of interfaces with the given names
 from a codebase URL path, optionally using the supplied loader.

 

An implementation of this method must either return a proxy
 class that implements the named interfaces or throw an exception.

**参数**

- **codebase** — the list of URLs (space-separated) to load classes from, or null
- **interfaces** — the names of the interfaces for the proxy class to implement
- **defaultLoader** — additional contextual class loader to use, or null

**返回**

- a dynamic proxy class that implements the named interfaces

**异常**

- **MalformedURLException** — if codebase is non-null and contains an invalid URL, or if codebase is null and a provider-specific URL used to load classes is invalid
- **ClassNotFoundException** — if a definition for one of the named interfaces could not be found at the specified location, or if creation of the dynamic proxy class failed (such as if `getProxyClass` would throw an IllegalArgumentException for the given interface list)
