---
id: "java-en-function-executable-getannotatedreturntype"
language: "java"
lang: "en"
category: "function"
name: "Executable.getAnnotatedReturnType"
signature: "public abstract AnnotatedType getAnnotatedReturnType()"
title: "Executable.getAnnotatedReturnType"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Executable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executable.getAnnotatedReturnType

```java
public abstract AnnotatedType getAnnotatedReturnType()
```

Returns an `AnnotatedType` object that represents the use of a type to
 specify the return type of the method/constructor represented by this
 Executable.

 If this `Executable` object represents a constructor, the `AnnotatedType` object represents the type of the constructed object.

 If this `Executable` object represents a method, the `AnnotatedType` object represents the use of a type to specify the return
 type of the method.

**返回**

- an object representing the return type of the method or constructor represented by this `Executable`
