---
id: "java-en-function-fieldtransform-dropping"
language: "java"
lang: "en"
category: "function"
name: "FieldTransform.dropping"
signature: "static FieldTransform dropping(Predicate<FieldElement> filter)"
title: "FieldTransform.dropping"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/FieldTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldTransform.dropping

```java
static FieldTransform dropping(Predicate<FieldElement> filter)
```

Creates a field transform that passes each element through to the builder,
 except for those that the supplied `Predicate` is true for.

**参数**

- **filter** — the predicate that determines which elements to drop

**返回**

- the field transform
