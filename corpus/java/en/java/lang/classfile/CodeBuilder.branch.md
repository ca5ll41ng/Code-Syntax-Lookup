---
id: "java-en-function-codebuilder-branch"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.branch"
signature: "default CodeBuilder branch(Opcode op, Label target)"
title: "CodeBuilder.branch"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.branch

```java
default CodeBuilder branch(Opcode op, Label target)
```

Generates a branch instruction.
 

 This may generate multiple instructions to accomplish the same effect if
 `FIX_SHORT_JUMPS` is set, the
 opcode has `sizeIfFixed() size` 3, and `target`
 cannot be encoded as a BCI offset in `[-32768, 32767]`.

**参数**

- **op** — the branch opcode
- **target** — the branch target

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `op` is not of `BRANCH`

**参见**

- BranchInstruction
