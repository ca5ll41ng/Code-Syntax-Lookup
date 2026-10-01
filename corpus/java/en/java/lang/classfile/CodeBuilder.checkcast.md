---
id: "java-en-function-codebuilder-checkcast"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.checkcast"
signature: "default CodeBuilder checkcast(ClassEntry type)"
title: "CodeBuilder.checkcast"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.checkcast

```java
default CodeBuilder checkcast(ClassEntry type)
```

Generates an instruction to check whether an object is of the given type,
 throwing a `ClassCastException` if the check fails.

**参数**

- **type** — the object type

**返回**

- this builder

**参见**

- Opcode#CHECKCAST
- TypeCheckInstruction
