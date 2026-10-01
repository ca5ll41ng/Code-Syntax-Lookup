---
id: "java-en-function-codebuilder-ifnonnull"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.ifnonnull"
signature: "default CodeBuilder ifnonnull(Label target)"
title: "CodeBuilder.ifnonnull"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.ifnonnull

```java
default CodeBuilder ifnonnull(Label target)
```

Generates an instruction to branch if `REFERENCE reference`
 is not `null`.
 

 This may generate multiple instructions to accomplish the same effect if
 `FIX_SHORT_JUMPS` is set and `target` cannot be encoded as a BCI offset in `[-32768, 32767]`.

**参数**

- **target** — the branch target

**返回**

- this builder

**参见**

- Opcode#IFNONNULL
- #branch(Opcode, Label)
- BranchInstruction
