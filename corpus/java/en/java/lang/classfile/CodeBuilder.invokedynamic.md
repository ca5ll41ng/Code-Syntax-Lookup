---
id: "java-en-function-codebuilder-invokedynamic"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.invokedynamic"
signature: "default CodeBuilder invokedynamic(InvokeDynamicEntry ref)"
title: "CodeBuilder.invokedynamic"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.invokedynamic

```java
default CodeBuilder invokedynamic(InvokeDynamicEntry ref)
```

Generates an instruction to invoke a dynamically-computed call site.

**参数**

- **ref** — the dynamic call site

**返回**

- this builder

**参见**

- Opcode#INVOKEDYNAMIC
- InvokeDynamicInstruction
