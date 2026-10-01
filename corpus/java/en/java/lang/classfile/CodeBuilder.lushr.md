---
id: "java-en-function-codebuilder-lushr"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.lushr"
signature: "default CodeBuilder lushr()"
title: "CodeBuilder.lushr"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.lushr

```java
default CodeBuilder lushr()
```

Generates an instruction to logical shift a `LONG long`
 right.  This fills vacated most significant bits with `0`, as
 opposed to `lshr` that carries the sign bit to the vacated most
 significant bits.

**返回**

- this builder

**参见**

- Opcode#LUSHR
- OperatorInstruction
