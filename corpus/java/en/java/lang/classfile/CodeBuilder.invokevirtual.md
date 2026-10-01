---
id: "java-en-function-codebuilder-invokevirtual"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.invokevirtual"
signature: "default CodeBuilder invokevirtual(MethodRefEntry ref)"
title: "CodeBuilder.invokevirtual"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.invokevirtual

```java
default CodeBuilder invokevirtual(MethodRefEntry ref)
```

Generates an instruction to invoke an instance method; dispatch based on class.

**参数**

- **ref** — the method reference

**返回**

- this builder

**参见**

- Opcode#INVOKEVIRTUAL
- #invoke(Opcode, MemberRefEntry)
- InvokeInstruction
