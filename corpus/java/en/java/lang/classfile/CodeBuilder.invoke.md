---
id: "java-en-function-codebuilder-invoke"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.invoke"
signature: "default CodeBuilder invoke(Opcode opcode, MemberRefEntry ref)"
title: "CodeBuilder.invoke"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.invoke

```java
default CodeBuilder invoke(Opcode opcode, MemberRefEntry ref)
```

Generates an instruction to invoke a method.

**参数**

- **opcode** — the invoke opcode
- **ref** — the interface method or method reference

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `opcode` is not of `INVOKE`

**参见**

- InvokeInstruction
