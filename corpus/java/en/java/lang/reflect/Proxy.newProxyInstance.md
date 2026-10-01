---
id: "java-en-function-proxy-newproxyinstance"
language: "java"
lang: "en"
category: "function"
name: "Proxy.newProxyInstance"
signature: "public static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h)"
title: "Proxy.newProxyInstance"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Proxy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Proxy.newProxyInstance

```java
public static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h)
```

Returns a proxy instance for the specified interfaces
 that dispatches method invocations to the specified invocation
 handler.
 

 `IllegalArgumentException` will be thrown
 if any of the following restrictions is violated:
 
 
- All of `Class` objects in the given `interfaces` array
 must represent `isHidden() non-hidden` and
 `isSealed() non-sealed` interfaces,
 not classes or primitive types.

 
- No two elements in the `interfaces` array may
 refer to identical `Class` objects.

 
- All of the interface types must be visible by name through the
 specified class loader. In other words, for class loader
 `cl` and every interface `i`, the following
 expression must be true:

 `Class.forName(i.getName(), false, cl) == i`

 
- All of the types referenced by all
 public method signatures of the specified interfaces
 and those inherited by their superinterfaces
 must be visible by name through the specified class loader.

 
- All non-public interfaces must be in the same package
 and module, defined by the specified class loader and
 the module of the non-public interfaces can access all of
 the interface types; otherwise, it would not be possible for
 the proxy class to implement all of the interfaces,
 regardless of what package it is defined in.

 
- For any set of member methods of the specified interfaces
 that have the same signature:
 
 
- If the return type of any of the methods is a primitive
 type or void, then all of the methods must have that same
 return type.
 
- Otherwise, one of the methods must have a return type that
 is assignable to all of the return types of the rest of the
 methods.
 

 
- The resulting proxy class must not exceed any limits imposed
 on classes by the virtual machine.  For example, the VM may limit
 the number of interfaces that a class may implement to 65535; in
 that case, the size of the `interfaces` array must not
 exceed 65535.
 

 

Note that the order of the specified proxy interfaces is
 significant: two requests for a proxy class with the same combination
 of interfaces but in a different order will result in two distinct
 proxy classes.

**参数**

- **loader** — the class loader to define the proxy class, may be `null` to represent the bootstrap class loader
- **interfaces** — the list of interfaces for the proxy class to implement
- **h** — the invocation handler to dispatch method invocations to

**返回**

- a proxy instance with the specified invocation handler of a proxy class that is defined by the specified class loader and that implements the specified interfaces

**异常**

- **IllegalArgumentException** — if any of the  restrictions on the parameters are violated
- **NullPointerException** — if the `interfaces` array argument or any of its elements are `null`, or if the invocation handler, `h`, is `null`

**参见**

- Package and Module Membership of Proxy Class
