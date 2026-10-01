---
id: "java-en-function-loadableconstantentry-typekind"
language: "java"
lang: "en"
category: "function"
name: "LoadableConstantEntry.typeKind"
signature: "default TypeKind typeKind()"
title: "LoadableConstantEntry.typeKind"
directive: "method"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/LoadableConstantEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoadableConstantEntry.typeKind

```java
default TypeKind typeKind()
```

{@return the data type of this constant}
 

 If the data type is of `slotSize() category` 2, this
 constant must be loaded with `LDC2_W ldc2_w`; otherwise, the
 data type is of category 1, and this constant must be loaded with `LDC ldc` or `LDC_W ldc_w`.
