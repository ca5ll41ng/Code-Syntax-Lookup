---
id: "java-en-function-methodtransform-transformingcode"
language: "java"
lang: "en"
category: "function"
name: "MethodTransform.transformingCode"
signature: "static MethodTransform transformingCode(CodeTransform xform)"
title: "MethodTransform.transformingCode"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTransform.transformingCode

```java
static MethodTransform transformingCode(CodeTransform xform)
```

Creates a method transform that transforms `CodeModel` elements
 with the supplied code transform, passing every other element through to
 the builder.

**参数**

- **xform** — the method transform

**返回**

- the class transform
