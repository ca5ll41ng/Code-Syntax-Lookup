---
id: "java-en-function-storeinstruction-typekind"
language: "java"
lang: "en"
category: "function"
name: "StoreInstruction.typeKind"
signature: "TypeKind typeKind()"
title: "StoreInstruction.typeKind"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/StoreInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StoreInstruction.typeKind

```java
TypeKind typeKind()
```

{@return the `#computational-type computational type`
 of the value to be stored}  The `REFERENCE reference`
 type store instructions also operate on the `returnAddress` type,
 which does not apply to `reference` type load instructions.
