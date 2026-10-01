---
id: "java-en-function-codebuilder-invokeinterface"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.invokeinterface"
signature: "default CodeBuilder invokeinterface(InterfaceMethodRefEntry ref)"
title: "CodeBuilder.invokeinterface"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.invokeinterface

```java
default CodeBuilder invokeinterface(InterfaceMethodRefEntry ref)
```

Generates an instruction to invoke an interface method.

**参数**

- **ref** — the interface method reference

**返回**

- this builder

**参见**

- Opcode#INVOKEINTERFACE
- #invoke(Opcode, MemberRefEntry)
- InvokeInstruction
