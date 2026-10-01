---
id: "java-en-function-codebuilder-loadconstant"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.loadConstant"
signature: "default CodeBuilder loadConstant(ConstantDesc value)"
title: "CodeBuilder.loadConstant"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.loadConstant

```java
default CodeBuilder loadConstant(ConstantDesc value)
```

Generates an instruction pushing a constant onto the operand stack.

**参数**

- **value** — the constant value, may be `null`

**返回**

- this builder

**参见**

- ConstantInstruction
