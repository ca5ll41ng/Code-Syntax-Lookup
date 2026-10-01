---
id: "java-en-function-classloaderrepository-loadclassbefore"
language: "java"
lang: "en"
category: "function"
name: "ClassLoaderRepository.loadClassBefore"
signature: "public Class<?> loadClassBefore(ClassLoader stop, String className) throws ClassNotFoundException"
title: "ClassLoaderRepository.loadClassBefore"
directive: "method"
module: "java.management/javax.management.loading"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/loading/ClassLoaderRepository.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoaderRepository.loadClassBefore

```java
public Class<?> loadClassBefore(ClassLoader stop, String className) throws ClassNotFoundException
```

Load the given class name through the list of class loaders,
 stopping at the given one.  Each ClassLoader in turn from the
 ClassLoaderRepository is asked to load the class via its `loadClass` method.  If it successfully
 returns a `Class` object, that is the result of this
 method.  If it throws a `ClassNotFoundException`, the
 search continues with the next ClassLoader.  If it throws
 another exception, the exception is propagated from this
 method.  If the search reaches stop or the end of
 the list, a `ClassNotFoundException` is thrown.

 

Typically this method is called from the `loadClass(String) loadClass` method of
 stop, to consult loaders that appear before it
 in the ClassLoaderRepository.  By stopping the
 search as soon as stop is reached, a potential
 deadlock with concurrent class loading is avoided.

**参数**

- **stop** — The class loader at which to stop.  May be null, in which case this method is equivalent to `loadClass(String) loadClass`.
- **className** — The name of the class to be loaded.

**返回**

- the loaded class.

**异常**

- **ClassNotFoundException** — The specified class could not be found.
