---
id: "java-en-function-classtransform-dropping"
language: "java"
lang: "en"
category: "function"
name: "ClassTransform.dropping"
signature: "static ClassTransform dropping(Predicate<ClassElement> filter)"
title: "ClassTransform.dropping"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTransform.dropping

```java
static ClassTransform dropping(Predicate<ClassElement> filter)
```

Creates a class transform that passes each element through to the builder,
 except for those that the supplied `Predicate` returns true for.

**参数**

- **filter** — the predicate that determines which elements to drop

**返回**

- the class transform
