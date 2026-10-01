---
id: "java-en-function-proxy-getproxyclass"
language: "java"
lang: "en"
category: "function"
name: "Proxy.getProxyClass"
signature: "public static Class<?> getProxyClass(ClassLoader loader, Class<?>... interfaces) throws IllegalArgumentException"
title: "Proxy.getProxyClass"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Proxy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Proxy.getProxyClass

```java
public static Class<?> getProxyClass(ClassLoader loader, Class<?>... interfaces) throws IllegalArgumentException
```

Returns the `java.lang.Class` object for a proxy class
 given a class loader and an array of interfaces.  The proxy class
 will be defined by the specified class loader and will implement
 all of the supplied interfaces.  If any of the given interfaces
 is non-public, the proxy class will be non-public. If a proxy class
 for the same permutation of interfaces has already been defined by the
 class loader, then the existing proxy class will be returned; otherwise,
 a proxy class for those interfaces will be generated dynamically
 and defined by the class loader.

**参数**

- **loader** — the class loader to define the proxy class
- **interfaces** — the list of interfaces for the proxy class to implement

**返回**

- a proxy class that is defined in the specified class loader and that implements the specified interfaces

**异常**

- **IllegalArgumentException** — if any of the  restrictions on the parameters are violated
- **NullPointerException** — if the `interfaces` array argument or any of its elements are `null`

**参见**

- Package and Module Membership of Proxy Class

> **⚠ Deprecated** — Proxy classes generated in a named module are encapsulated and not accessible to code outside its module. `newInstance(Object...) Constructor.newInstance` will throw `IllegalAccessException` when it is called on an inaccessible proxy class. Use `newProxyInstance` to create a proxy instance instead.
