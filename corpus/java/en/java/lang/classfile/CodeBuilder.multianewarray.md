---
id: "java-en-function-codebuilder-multianewarray"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.multianewarray"
signature: "default CodeBuilder multianewarray(ClassEntry array, int dims)"
title: "CodeBuilder.multianewarray"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.multianewarray

```java
default CodeBuilder multianewarray(ClassEntry array, int dims)
```

Generates an instruction to create a new multidimensional array.

**参数**

- **array** — the array type
- **dims** — the number of dimensions

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `dims` is out of range

**参见**

- Opcode#MULTIANEWARRAY
- NewMultiArrayInstruction
