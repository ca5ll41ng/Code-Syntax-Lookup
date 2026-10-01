---
id: "java-en-function-codebuilder-fcmpg"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.fcmpg"
signature: "default CodeBuilder fcmpg()"
title: "CodeBuilder.fcmpg"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.fcmpg

```java
default CodeBuilder fcmpg()
```

Generates an instruction to compare `FLOAT floats`,
 producing `1` if any operand is `isNaN(float) NaN`.

**返回**

- this builder

**参见**

- Opcode#FCMPG
- OperatorInstruction
