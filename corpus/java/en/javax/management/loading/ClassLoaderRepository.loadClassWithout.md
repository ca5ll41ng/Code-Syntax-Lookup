---
id: "java-en-function-classloaderrepository-loadclasswithout"
language: "java"
lang: "en"
category: "function"
name: "ClassLoaderRepository.loadClassWithout"
signature: "public Class<?> loadClassWithout(ClassLoader exclude, String className) throws ClassNotFoundException"
title: "ClassLoaderRepository.loadClassWithout"
directive: "method"
module: "java.management/javax.management.loading"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/loading/ClassLoaderRepository.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoaderRepository.loadClassWithout

```java
public Class<?> loadClassWithout(ClassLoader exclude, String className) throws ClassNotFoundException
```

Load the given class name through the list of class loaders,
 excluding the given one.  Each ClassLoader in turn from the
 ClassLoaderRepository, except exclude, is asked to
 load the class via its `loadClass`
 method.  If it successfully returns a `Class` object,
 that is the result of this method.  If it throws a `ClassNotFoundException`, the search continues with the next
 ClassLoader.  If it throws another exception, the exception is
 propagated from this method.  If the end of the list is
 reached, a `ClassNotFoundException` is thrown.

 

Be aware that if a ClassLoader in the ClassLoaderRepository
 calls this method from its `loadClass(String)
 loadClass` method, it exposes itself to a deadlock if another
 ClassLoader in the ClassLoaderRepository does the same thing at
 the same time.  The `loadClassBefore` method is
 recommended to avoid the risk of deadlock.

**参数**

- **exclude** — The class loader to be excluded.  May be null, in which case this method is equivalent to `loadClass loadClass`.
- **className** — The name of the class to be loaded.

**返回**

- the loaded class.

**异常**

- **ClassNotFoundException** — The specified class could not be found.
