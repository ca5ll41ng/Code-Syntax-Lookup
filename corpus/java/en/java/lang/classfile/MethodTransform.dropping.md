---
id: "java-en-function-methodtransform-dropping"
language: "java"
lang: "en"
category: "function"
name: "MethodTransform.dropping"
signature: "static MethodTransform dropping(Predicate<MethodElement> filter)"
title: "MethodTransform.dropping"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTransform.dropping

```java
static MethodTransform dropping(Predicate<MethodElement> filter)
```

Creates a method transform that passes each element through to the builder,
 except for those that the supplied `Predicate` is true for.

**参数**

- **filter** — the predicate that determines which elements to drop

**返回**

- the method transform
