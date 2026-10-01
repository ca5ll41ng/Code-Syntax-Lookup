---
id: "java-en-function-rmiclassloader-getclassannotation"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoader.getClassAnnotation"
signature: "public static String getClassAnnotation(Class<?> cl)"
title: "RMIClassLoader.getClassAnnotation"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoader.getClassAnnotation

```java
public static String getClassAnnotation(Class<?> cl)
```

Returns the annotation string (representing a location for
 the class definition) that RMI will use to annotate the class
 descriptor when marshalling objects of the given class.

 

This method delegates to the
 `getClassAnnotation` method
 of the provider instance, passing cl as the argument.

**参数**

- **cl** — the class to obtain the annotation for

**返回**

- a string to be used to annotate the given class when it gets marshalled, or null

**异常**

- **NullPointerException** — if cl is null

> *Since 1.2*
