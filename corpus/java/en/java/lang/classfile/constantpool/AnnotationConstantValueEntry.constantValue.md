---
id: "java-en-function-annotationconstantvalueentry-constantvalue"
language: "java"
lang: "en"
category: "function"
name: "AnnotationConstantValueEntry.constantValue"
signature: "ConstantDesc constantValue()"
title: "AnnotationConstantValueEntry.constantValue"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/AnnotationConstantValueEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotationConstantValueEntry.constantValue

```java
ConstantDesc constantValue()
```

{@return the constant value}  The constant value will be an `Integer`, `Long`, `Float`, `Double` for the primitive
 constants, or `String` for UTF8 constants.
