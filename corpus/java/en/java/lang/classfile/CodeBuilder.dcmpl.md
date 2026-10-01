---
id: "java-en-function-codebuilder-dcmpl"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.dcmpl"
signature: "default CodeBuilder dcmpl()"
title: "CodeBuilder.dcmpl"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.dcmpl

```java
default CodeBuilder dcmpl()
```

Generates an instruction to compare two `DOUBLE doubles`,
 producing `-1` if any operand is `isNaN(double) NaN`.

**返回**

- this builder

**参见**

- Opcode#DCMPL
- OperatorInstruction
