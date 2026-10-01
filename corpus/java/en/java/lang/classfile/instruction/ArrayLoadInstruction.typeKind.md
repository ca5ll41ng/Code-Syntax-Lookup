---
id: "java-en-function-arrayloadinstruction-typekind"
language: "java"
lang: "en"
category: "function"
name: "ArrayLoadInstruction.typeKind"
signature: "TypeKind typeKind()"
title: "ArrayLoadInstruction.typeKind"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ArrayLoadInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayLoadInstruction.typeKind

```java
TypeKind typeKind()
```

{@return the component type of the array}  The `BYTE byte`
 type load instruction `BALOAD baload` also operates on
 `BOOLEAN boolean` arrays, so this never returns
 `boolean`.
