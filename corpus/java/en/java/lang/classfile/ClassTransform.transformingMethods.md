---
id: "java-en-function-classtransform-transformingmethods"
language: "java"
lang: "en"
category: "function"
name: "ClassTransform.transformingMethods"
signature: "static ClassTransform transformingMethods(Predicate<MethodModel> filter, MethodTransform xform)"
title: "ClassTransform.transformingMethods"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTransform.transformingMethods

```java
static ClassTransform transformingMethods(Predicate<MethodModel> filter, MethodTransform xform)
```

Creates a class transform that transforms `MethodModel` elements
 with the supplied method transform for methods that the supplied `Predicate` returns true for, passing other elements through to the
 builder.

**参数**

- **filter** — a predicate that determines which methods to transform
- **xform** — the method transform

**返回**

- the class transform
