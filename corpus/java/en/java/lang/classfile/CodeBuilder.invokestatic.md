---
id: "java-en-function-codebuilder-invokestatic"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.invokestatic"
signature: "default CodeBuilder invokestatic(InterfaceMethodRefEntry ref)"
title: "CodeBuilder.invokestatic"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.invokestatic

```java
default CodeBuilder invokestatic(InterfaceMethodRefEntry ref)
```

Generates an instruction to invoke a class (static) method of an interface.

**参数**

- **ref** — the interface method reference

**返回**

- this builder

**参见**

- Opcode#INVOKESTATIC
- #invoke(Opcode, MemberRefEntry)
- InvokeInstruction
