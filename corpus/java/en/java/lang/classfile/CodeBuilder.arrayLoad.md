---
id: "java-en-function-codebuilder-arrayload"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.arrayLoad"
signature: "default CodeBuilder arrayLoad(TypeKind tk)"
title: "CodeBuilder.arrayLoad"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.arrayLoad

```java
default CodeBuilder arrayLoad(TypeKind tk)
```

Generates an instruction to load from an array.

**参数**

- **tk** — the array element type

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `tk` is `VOID void`

**参见**

- ArrayLoadInstruction
