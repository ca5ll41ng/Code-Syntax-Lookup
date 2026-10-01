---
id: "java-en-function-classtransform-transformingmethodbodies"
language: "java"
lang: "en"
category: "function"
name: "ClassTransform.transformingMethodBodies"
signature: "static ClassTransform transformingMethodBodies(Predicate<MethodModel> filter, CodeTransform xform)"
title: "ClassTransform.transformingMethodBodies"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTransform.transformingMethodBodies

```java
static ClassTransform transformingMethodBodies(Predicate<MethodModel> filter, CodeTransform xform)
```

Creates a class transform that transforms the `CodeAttribute` (method body)
 of `MethodModel` elements with the supplied code transform for
 methods that the supplied `Predicate` returns true for, passing
 other elements through to the builder.

**参数**

- **filter** — a predicate that determines which methods to transform
- **xform** — the code transform

**返回**

- the class transform
