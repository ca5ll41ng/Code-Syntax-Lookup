---
id: "java-en-function-codebuilder-conversion"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.conversion"
signature: "default CodeBuilder conversion(TypeKind fromType, TypeKind toType)"
title: "CodeBuilder.conversion"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.conversion

```java
default CodeBuilder conversion(TypeKind fromType, TypeKind toType)
```

Generates instruction(s) to convert `fromType` to `toType`.

**参数**

- **fromType** — the source type
- **toType** — the target type

**返回**

- this builder

**异常**

- **IllegalArgumentException** — for conversions of `VOID void` or `REFERENCE reference`

**参见**

- ConvertInstruction
