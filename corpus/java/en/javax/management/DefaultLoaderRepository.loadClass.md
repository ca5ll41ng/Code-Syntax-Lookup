---
id: "java-en-function-defaultloaderrepository-loadclass"
language: "java"
lang: "en"
category: "function"
name: "DefaultLoaderRepository.loadClass"
signature: "public static Class<?> loadClass(String className) throws ClassNotFoundException"
title: "DefaultLoaderRepository.loadClass"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/DefaultLoaderRepository.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DefaultLoaderRepository.loadClass

```java
public static Class<?> loadClass(String className) throws ClassNotFoundException
```

Go through the list of class loaders and try to load the requested class.
 The method will stop as soon as the class is found. If the class
 is not found the method will throw a ClassNotFoundException
 exception.

**参数**

- **className** — The name of the class to be loaded.

**返回**

- the loaded class.

**异常**

- **ClassNotFoundException** — The specified class could not be found.
