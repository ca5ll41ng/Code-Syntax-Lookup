---
id: "java-en-function-codebuilder-goto_w"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.goto_w"
signature: "default CodeBuilder goto_w(Label target)"
title: "CodeBuilder.goto_w"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.goto_w

```java
default CodeBuilder goto_w(Label target)
```

Generates an instruction to branch always with wide index.

**参数**

- **target** — the branch target

**返回**

- this builder

**参见**

- Opcode#GOTO_W
- #branch(Opcode, Label)
- BranchInstruction
