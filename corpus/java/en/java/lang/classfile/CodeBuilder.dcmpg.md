---
id: "java-en-function-codebuilder-dcmpg"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.dcmpg"
signature: "default CodeBuilder dcmpg()"
title: "CodeBuilder.dcmpg"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.dcmpg

```java
default CodeBuilder dcmpg()
```

Generates an instruction to compare two `DOUBLE doubles`,
 producing `1` if any operand is `isNaN(double) NaN`.

**返回**

- this builder

**参见**

- Opcode#DCMPG
- OperatorInstruction
