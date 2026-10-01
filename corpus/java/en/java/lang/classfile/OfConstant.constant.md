---
id: "java-en-function-ofconstant-constant"
language: "java"
lang: "en"
category: "function"
name: "OfConstant.constant"
signature: "AnnotationConstantValueEntry constant()"
title: "OfConstant.constant"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AnnotationValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfConstant.constant

```java
AnnotationConstantValueEntry constant()
```

{@return the constant pool entry backing this constant element}

 Different types of constant values may share the same type of entry
 because they have the same `#computational-type
 computational type`.
 For example, `OfInt` and `OfChar` are both
 backed by `IntegerEntry`. Use `resolvedValue
 resolvedValue` for a value of accurate type.
