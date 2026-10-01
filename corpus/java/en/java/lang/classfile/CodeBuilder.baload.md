---
id: "java-en-function-codebuilder-baload"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.baload"
signature: "default CodeBuilder baload()"
title: "CodeBuilder.baload"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.baload

```java
default CodeBuilder baload()
```

Generates an instruction to load from a `BYTE byte` or
 `BOOLEAN boolean` array.

**返回**

- this builder

**参见**

- Opcode#BALOAD
- #arrayLoad(TypeKind)
- ArrayLoadInstruction
