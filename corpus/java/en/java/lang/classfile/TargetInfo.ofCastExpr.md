---
id: "java-en-function-targetinfo-ofcastexpr"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofCastExpr"
signature: "static TypeArgumentTarget ofCastExpr(Label target, int typeArgumentIndex)"
title: "TargetInfo.ofCastExpr"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofCastExpr

```java
static TypeArgumentTarget ofCastExpr(Label target, int typeArgumentIndex)
```

{@return a target for annotations on the i'th type in a cast expression}

**参数**

- **target** — the label right before the instruction
- **typeArgumentIndex** — specifies which type in the cast operator is annotated

**异常**

- **IllegalArgumentException** — if `typeArgumentIndex` is not `#u1 u1`
