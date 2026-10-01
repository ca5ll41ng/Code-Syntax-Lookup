---
id: "java-en-function-codebuilder-ifle"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.ifle"
signature: "default CodeBuilder ifle(Label target)"
title: "CodeBuilder.ifle"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.ifle

```java
default CodeBuilder ifle(Label target)
```

Generates an instruction to branch if `INT int` comparison
 with zero `<= 0` succeeds.
 

 This may generate multiple instructions to accomplish the same effect if
 `FIX_SHORT_JUMPS` is set and `target` cannot be encoded as a BCI offset in `[-32768, 32767]`.

**参数**

- **target** — the branch target

**返回**

- this builder

**参见**

- Opcode#IFLE
- #branch(Opcode, Label)
- BranchInstruction
