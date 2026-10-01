---
id: "java-en-function-codebuilder-putfield"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.putfield"
signature: "default CodeBuilder putfield(FieldRefEntry ref)"
title: "CodeBuilder.putfield"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.putfield

```java
default CodeBuilder putfield(FieldRefEntry ref)
```

Generates an instruction to set field in an object.

**参数**

- **ref** — the field reference

**返回**

- this builder

**参见**

- Opcode#PUTFIELD
- #fieldAccess(Opcode, FieldRefEntry)
- FieldInstruction
