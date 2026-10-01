---
id: "java-en-function-targetinfo-oftypeargument"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofTypeArgument"
signature: "static TypeArgumentTarget ofTypeArgument(TargetType targetType, Label target, int typeArgumentIndex)"
title: "TargetInfo.ofTypeArgument"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofTypeArgument

```java
static TypeArgumentTarget ofTypeArgument(TargetType targetType, Label target, int typeArgumentIndex)
```

{@return a target for annotations on the i'th type in a cast expression,
 or on the i'th type argument in the explicit type argument list for any of the following:
 a new expression, an explicit constructor invocation statement, a method invocation expression,
 or a method reference expression}

**参数**

- **targetType** — `CAST`, `CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT`, `METHOD_INVOCATION_TYPE_ARGUMENT`, `CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT`, or `METHOD_REFERENCE_TYPE_ARGUMENT`
- **target** — the label right before the instruction
- **typeArgumentIndex** — specifies which type in the cast operator or argument is annotated

**异常**

- **IllegalArgumentException** — if `typeArgumentIndex` is not `#u1 u1`
