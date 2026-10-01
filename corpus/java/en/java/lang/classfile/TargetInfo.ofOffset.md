---
id: "java-en-function-targetinfo-ofoffset"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofOffset"
signature: "static OffsetTarget ofOffset(TargetType targetType, Label target)"
title: "TargetInfo.ofOffset"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofOffset

```java
static OffsetTarget ofOffset(TargetType targetType, Label target)
```

{@return a target for annotations on the type in an instanceof expression or a new expression,
 or the type before the :: in a method reference expression}

**参数**

- **targetType** — `INSTANCEOF`, `NEW`, `CONSTRUCTOR_REFERENCE`, or `METHOD_REFERENCE`
- **target** — the label right before the instruction
