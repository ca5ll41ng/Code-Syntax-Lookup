---
id: "java-en-function-classtransform-transformingfields"
language: "java"
lang: "en"
category: "function"
name: "ClassTransform.transformingFields"
signature: "static ClassTransform transformingFields(FieldTransform xform)"
title: "ClassTransform.transformingFields"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassTransform.transformingFields

```java
static ClassTransform transformingFields(FieldTransform xform)
```

Creates a class transform that transforms `FieldModel` elements
 with the supplied field transform, passing other elements through to the
 builder.

**参数**

- **xform** — the field transform

**返回**

- the class transform
