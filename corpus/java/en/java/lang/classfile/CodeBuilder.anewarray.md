---
id: "java-en-function-codebuilder-anewarray"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.anewarray"
signature: "default CodeBuilder anewarray(ClassEntry classEntry)"
title: "CodeBuilder.anewarray"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.anewarray

```java
default CodeBuilder anewarray(ClassEntry classEntry)
```

Generates an instruction to create a new array of `REFERENCE
 reference`.

**参数**

- **classEntry** — the component type

**返回**

- this builder

**参见**

- Opcode#ANEWARRAY
- NewReferenceArrayInstruction
