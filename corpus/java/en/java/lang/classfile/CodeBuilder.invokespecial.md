---
id: "java-en-function-codebuilder-invokespecial"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.invokespecial"
signature: "default CodeBuilder invokespecial(InterfaceMethodRefEntry ref)"
title: "CodeBuilder.invokespecial"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.invokespecial

```java
default CodeBuilder invokespecial(InterfaceMethodRefEntry ref)
```

Generates an instruction to invoke an instance method in an interface;
 direct invocation of methods of the current class and its supertypes.

**参数**

- **ref** — the interface method reference

**返回**

- this builder

**参见**

- Opcode#INVOKESPECIAL
- #invoke(Opcode, MemberRefEntry)
- InvokeInstruction
