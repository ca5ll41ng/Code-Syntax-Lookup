---
id: "java-en-function-typevariable-getannotatedbounds"
language: "java"
lang: "en"
category: "function"
name: "TypeVariable.getAnnotatedBounds"
signature: "AnnotatedType[] getAnnotatedBounds()"
title: "TypeVariable.getAnnotatedBounds"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/TypeVariable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeVariable.getAnnotatedBounds

```java
AnnotatedType[] getAnnotatedBounds()
```

Returns an array of AnnotatedType objects that represent the use of
 types to denote the upper bounds of the type parameter represented by
 this TypeVariable. The order of the objects in the array corresponds to
 the order of the bounds in the declaration of the type parameter. Note that
 if no upper bound is explicitly declared, the upper bound is unannotated
 `Object`.

**返回**

- an array of objects representing the upper bound(s) of the type variable

> *Since 1.8*
