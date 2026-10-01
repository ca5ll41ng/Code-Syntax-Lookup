---
id: "java-en-function-codebuilder-newarray"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.newarray"
signature: "default CodeBuilder newarray(TypeKind typeKind)"
title: "CodeBuilder.newarray"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.newarray

```java
default CodeBuilder newarray(TypeKind typeKind)
```

Generates an instruction to create a new array of a primitive type.

**参数**

- **typeKind** — the primitive array type

**返回**

- this builder

**异常**

- **IllegalArgumentException** — when the `typeKind` is not a legal primitive array component type

**参见**

- Opcode#NEWARRAY
- NewPrimitiveArrayInstruction
