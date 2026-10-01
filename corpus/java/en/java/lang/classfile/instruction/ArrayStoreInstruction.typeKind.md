---
id: "java-en-function-arraystoreinstruction-typekind"
language: "java"
lang: "en"
category: "function"
name: "ArrayStoreInstruction.typeKind"
signature: "TypeKind typeKind()"
title: "ArrayStoreInstruction.typeKind"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ArrayStoreInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayStoreInstruction.typeKind

```java
TypeKind typeKind()
```

{@return the component type of the array}  The `BYTE byte`
 type store instruction `BASTORE bastore` also operates on
 `BOOLEAN boolean` arrays, so this never returns
 `boolean`.
