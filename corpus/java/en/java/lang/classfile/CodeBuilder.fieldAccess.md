---
id: "java-en-function-codebuilder-fieldaccess"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.fieldAccess"
signature: "default CodeBuilder fieldAccess(Opcode opcode, FieldRefEntry ref)"
title: "CodeBuilder.fieldAccess"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.fieldAccess

```java
default CodeBuilder fieldAccess(Opcode opcode, FieldRefEntry ref)
```

Generates an instruction to access a field.

**参数**

- **opcode** — the field access opcode
- **ref** — the field reference

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `opcode` is not of `FIELD_ACCESS`

**参见**

- FieldInstruction
