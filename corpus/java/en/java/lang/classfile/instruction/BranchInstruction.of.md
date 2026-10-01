---
id: "java-en-function-branchinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "BranchInstruction.of"
signature: "static BranchInstruction of(Opcode op, Label target)"
title: "BranchInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/BranchInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BranchInstruction.of

```java
static BranchInstruction of(Opcode op, Label target)
```

{@return a branch instruction}

**参数**

- **op** — the opcode for the specific type of branch instruction, which must be of kind `BRANCH`
- **target** — the target of the branch

**异常**

- **IllegalArgumentException** — if the opcode kind is not `BRANCH`
