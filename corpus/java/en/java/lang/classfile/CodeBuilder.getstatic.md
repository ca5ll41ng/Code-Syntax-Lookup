---
id: "java-en-function-codebuilder-getstatic"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.getstatic"
signature: "default CodeBuilder getstatic(FieldRefEntry ref)"
title: "CodeBuilder.getstatic"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.getstatic

```java
default CodeBuilder getstatic(FieldRefEntry ref)
```

Generates an instruction to get static field from a class or interface.

**参数**

- **ref** — the field reference

**返回**

- this builder

**参见**

- Opcode#GETSTATIC
- #fieldAccess(Opcode, FieldRefEntry)
- FieldInstruction
