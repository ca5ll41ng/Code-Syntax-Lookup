---
id: "java-en-function-targetinfo-ofmethodinvocationtypeargument"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofMethodInvocationTypeArgument"
signature: "static TypeArgumentTarget ofMethodInvocationTypeArgument(Label target, int typeArgumentIndex)"
title: "TargetInfo.ofMethodInvocationTypeArgument"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofMethodInvocationTypeArgument

```java
static TypeArgumentTarget ofMethodInvocationTypeArgument(Label target, int typeArgumentIndex)
```

{@return a target for annotations on the i'th type argument in the explicit type argument list for
 a method invocation expression}

**参数**

- **target** — the label right before the instruction
- **typeArgumentIndex** — specifies which type in the argument is annotated

**异常**

- **IllegalArgumentException** — if `typeArgumentIndex` is not `#u1 u1`
