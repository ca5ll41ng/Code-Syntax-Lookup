---
id: "java-en-function-codebuilder-goto_"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.goto_"
signature: "default CodeBuilder goto_(Label target)"
title: "CodeBuilder.goto_"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.goto_

```java
default CodeBuilder goto_(Label target)
```

Generates an instruction to branch always.
 

 This may also generate `GOTO_W goto_w` instructions if
 `FIX_SHORT_JUMPS` is set.

 The instruction's name is `goto`, which coincides with a reserved
 keyword of the Java programming language, thus this method is named with
 an extra `_` suffix instead.

**参数**

- **target** — the branch target

**返回**

- this builder

**参见**

- Opcode#GOTO
- #branch(Opcode, Label)
- BranchInstruction
