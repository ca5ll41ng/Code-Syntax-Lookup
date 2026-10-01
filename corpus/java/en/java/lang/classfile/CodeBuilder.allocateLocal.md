---
id: "java-en-function-codebuilder-allocatelocal"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.allocateLocal"
signature: "int allocateLocal(TypeKind typeKind)"
title: "CodeBuilder.allocateLocal"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.allocateLocal

```java
int allocateLocal(TypeKind typeKind)
```

{@return the local variable slot of a fresh local variable}  This method
 makes reasonable efforts to determine which slots are in use and which
 are not.  When transforming a method, fresh locals begin at the `maxLocals` of the original method.  For a method being built directly,
 fresh locals begin after the last parameter slot.
 

 If the current code builder is a `BlockCodeBuilder`, at the end of
 the block, locals are reset to their value at the beginning of the block.

**参数**

- **typeKind** — the type of the local variable
