---
id: "java-en-function-codebuilder-getfield"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.getfield"
signature: "default CodeBuilder getfield(FieldRefEntry ref)"
title: "CodeBuilder.getfield"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.getfield

```java
default CodeBuilder getfield(FieldRefEntry ref)
```

Generates an instruction to fetch field from an object.

**参数**

- **ref** — the field reference

**返回**

- this builder

**参见**

- Opcode#GETFIELD
- #fieldAccess(Opcode, FieldRefEntry)
- FieldInstruction
