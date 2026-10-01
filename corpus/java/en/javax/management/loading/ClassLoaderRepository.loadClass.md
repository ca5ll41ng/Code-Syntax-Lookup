---
id: "java-en-function-classloaderrepository-loadclass"
language: "java"
lang: "en"
category: "function"
name: "ClassLoaderRepository.loadClass"
signature: "public Class<?> loadClass(String className) throws ClassNotFoundException"
title: "ClassLoaderRepository.loadClass"
directive: "method"
module: "java.management/javax.management.loading"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/loading/ClassLoaderRepository.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoaderRepository.loadClass

```java
public Class<?> loadClass(String className) throws ClassNotFoundException
```

Load the given class name through the list of class loaders.
 Each ClassLoader in turn from the ClassLoaderRepository is
 asked to load the class via its `loadClass` method.  If it successfully
 returns a `Class` object, that is the result of this
 method.  If it throws a `ClassNotFoundException`, the
 search continues with the next ClassLoader.  If it throws
 another exception, the exception is propagated from this
 method.  If the end of the list is reached, a `ClassNotFoundException` is thrown.

**参数**

- **className** — The name of the class to be loaded.

**返回**

- the loaded class.

**异常**

- **ClassNotFoundException** — The specified class could not be found.
