---
id: "java-en-function-rmiclassloaderspi-getclassannotation"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoaderSpi.getClassAnnotation"
signature: "public abstract String getClassAnnotation(Class<?> cl)"
title: "RMIClassLoaderSpi.getClassAnnotation"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoaderSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoaderSpi.getClassAnnotation

```java
public abstract String getClassAnnotation(Class<?> cl)
```

Provides the implementation for
 `getClassAnnotation`.

 Returns the annotation string (representing a location for
 the class definition) that RMI will use to annotate the class
 descriptor when marshalling objects of the given class.

**参数**

- **cl** — the class to obtain the annotation for

**返回**

- a string to be used to annotate the given class when it gets marshalled, or null

**异常**

- **NullPointerException** — if cl is null
