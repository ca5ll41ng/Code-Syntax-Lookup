---
id: "java-en-function-codebuilder-putstatic"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.putstatic"
signature: "default CodeBuilder putstatic(FieldRefEntry ref)"
title: "CodeBuilder.putstatic"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.putstatic

```java
default CodeBuilder putstatic(FieldRefEntry ref)
```

Generates an instruction to set static field in a class.

**参数**

- **ref** — the field reference

**返回**

- this builder

**参见**

- Opcode#PUTSTATIC
- #fieldAccess(Opcode, FieldRefEntry)
- FieldInstruction
