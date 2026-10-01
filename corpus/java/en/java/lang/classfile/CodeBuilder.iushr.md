---
id: "java-en-function-codebuilder-iushr"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.iushr"
signature: "default CodeBuilder iushr()"
title: "CodeBuilder.iushr"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.iushr

```java
default CodeBuilder iushr()
```

Generates an instruction to logical shift an `INT int`
 right.  This fills vacated most significant bits with `0`, as
 opposed to `ishr` that carries the sign bit to the vacated most
 significant bits.

**返回**

- this builder

**参见**

- Opcode#IUSHR
- OperatorInstruction
