---
id: "java-en-function-codebuilder-ifnull"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.ifnull"
signature: "default CodeBuilder ifnull(Label target)"
title: "CodeBuilder.ifnull"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.ifnull

```java
default CodeBuilder ifnull(Label target)
```

Generates an instruction to branch if `REFERENCE reference`
 is `null`.
 

 This may generate multiple instructions to accomplish the same effect if
 `FIX_SHORT_JUMPS` is set and `target` cannot be encoded as a BCI offset in `[-32768, 32767]`.

**参数**

- **target** — the branch target

**返回**

- this builder

**参见**

- Opcode#IFNULL
- #branch(Opcode, Label)
- BranchInstruction
