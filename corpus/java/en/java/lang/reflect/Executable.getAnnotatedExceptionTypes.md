---
id: "java-en-function-executable-getannotatedexceptiontypes"
language: "java"
lang: "en"
category: "function"
name: "Executable.getAnnotatedExceptionTypes"
signature: "public AnnotatedType[] getAnnotatedExceptionTypes()"
title: "Executable.getAnnotatedExceptionTypes"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Executable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executable.getAnnotatedExceptionTypes

```java
public AnnotatedType[] getAnnotatedExceptionTypes()
```

Returns an array of `AnnotatedType` objects that represent the use
 of types to specify the declared exceptions of the method/constructor
 represented by this Executable. The order of the objects in the array
 corresponds to the order of the exception types in the declaration of
 the method/constructor.

 Returns an array of length 0 if the method/constructor declares no
 exceptions.

**返回**

- an array of objects representing the declared exceptions of the method or constructor represented by this `Executable`
