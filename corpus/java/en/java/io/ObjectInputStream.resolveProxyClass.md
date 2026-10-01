---
id: "java-en-function-objectinputstream-resolveproxyclass"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.resolveProxyClass"
signature: "protected Class<?> resolveProxyClass(String[] interfaces) throws IOException, ClassNotFoundException"
title: "ObjectInputStream.resolveProxyClass"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.resolveProxyClass

```java
protected Class<?> resolveProxyClass(String[] interfaces) throws IOException, ClassNotFoundException
```

Returns a proxy class that implements the interfaces named in a proxy
 class descriptor; subclasses may implement this method to read custom
 data from the stream along with the descriptors for dynamic proxy
 classes, allowing them to use an alternate loading mechanism for the
 interfaces and the proxy class.

 

This method is called exactly once for each unique proxy class
 descriptor in the stream.

 

The corresponding method in `ObjectOutputStream` is
 `annotateProxyClass`.  For a given subclass of
 `ObjectInputStream` that overrides this method, the
 `annotateProxyClass` method in the corresponding subclass of
 `ObjectOutputStream` must write any data or objects read by
 this method.

 

The default implementation of this method in
 `ObjectInputStream` returns the result of calling
 `Proxy.getProxyClass` with the list of `Class`
 objects for the interfaces that are named in the `interfaces`
 parameter.  The `Class` object for each interface name
 `i` is the value returned by calling
 {@snippet lang="java":
     Class.forName(i, false, loader)
 }
 where `loader` is the first class loader on the current
 thread's stack (starting from the currently executing method) that is
 neither the `getPlatformClassLoader() platform
 class loader` nor its ancestor; otherwise, `loader` is the
 platform class loader.
 Unless any of the resolved interfaces are non-public, this same value
 of `loader` is also the class loader passed to
 `Proxy.getProxyClass`; if non-public interfaces are present,
 their class loader is passed instead (if more than one non-public
 interface class loader is encountered, an
 `IllegalAccessError` is thrown).
 If `Proxy.getProxyClass` throws an
 `IllegalArgumentException`, `resolveProxyClass`
 will throw a `ClassNotFoundException` containing the
 `IllegalArgumentException`.

**参数**

- **interfaces** — the list of interface names that were deserialized in the proxy class descriptor

**返回**

- a proxy class for the specified interfaces

**异常**

- **IOException** — any exception thrown by the underlying `InputStream`
- **ClassNotFoundException** — if the proxy class or any of the named interfaces could not be found

**参见**

- ObjectOutputStream#annotateProxyClass(Class)

> *Since 1.3*
