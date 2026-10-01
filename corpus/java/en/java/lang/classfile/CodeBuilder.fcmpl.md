---
id: "java-en-function-codebuilder-fcmpl"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.fcmpl"
signature: "default CodeBuilder fcmpl()"
title: "CodeBuilder.fcmpl"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.fcmpl

```java
default CodeBuilder fcmpl()
```

Generates an instruction to compare `FLOAT floats`,
 producing `-1` if any operand is `isNaN(float) NaN`.

**返回**

- this builder

**参见**

- Opcode#FCMPL
- OperatorInstruction
