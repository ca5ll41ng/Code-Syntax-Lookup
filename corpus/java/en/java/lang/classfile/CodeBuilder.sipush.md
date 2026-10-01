---
id: "java-en-function-codebuilder-sipush"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.sipush"
signature: "default CodeBuilder sipush(int s)"
title: "CodeBuilder.sipush"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.sipush

```java
default CodeBuilder sipush(int s)
```

Generates an instruction pushing an `INT int` in the range
 of `SHORT short`, `[-32768, 32767]`, onto the
 operand stack.

**参数**

- **s** — the int in the range of short

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `s` is out of range of short

**参见**

- Opcode#SIPUSH
- #loadConstant(int)
- ConstantInstruction.ArgumentConstantInstruction
