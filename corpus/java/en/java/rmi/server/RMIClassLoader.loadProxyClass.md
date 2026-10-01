---
id: "java-en-function-rmiclassloader-loadproxyclass"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoader.loadProxyClass"
signature: "public static Class<?> loadProxyClass(String codebase, String[] interfaces, ClassLoader defaultLoader) throws ClassNotFoundException, MalformedURLException"
title: "RMIClassLoader.loadProxyClass"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoader.loadProxyClass

```java
public static Class<?> loadProxyClass(String codebase, String[] interfaces, ClassLoader defaultLoader) throws ClassNotFoundException, MalformedURLException
```

Loads a dynamic proxy class (see `java.lang.reflect.Proxy`)
 that implements a set of interfaces with the given names
 from a codebase URL path.

 

The interfaces will be resolved similar to classes loaded via
 the `loadClass` method using the given
 codebase.

 

This method delegates to the
 `loadProxyClass`
 method of the provider instance, passing codebase
 as the first argument, interfaces as the second argument,
 and defaultLoader as the third argument.

**参数**

- **codebase** — the list of URLs (space-separated) to load classes from, or null
- **interfaces** — the names of the interfaces for the proxy class to implement
- **defaultLoader** — additional contextual class loader to use, or null

**返回**

- a dynamic proxy class that implements the named interfaces

**异常**

- **MalformedURLException** — if codebase is non-null and contains an invalid URL, or if codebase is null and a provider-specific URL used to load classes is invalid
- **ClassNotFoundException** — if a definition for one of the named interfaces could not be found at the specified location, or if creation of the dynamic proxy class failed (such as if `getProxyClass` would throw an IllegalArgumentException for the given interface list)

> *Since 1.4*
