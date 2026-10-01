---
id: "java-en-function-codebuilder-loadlocal"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.loadLocal"
signature: "default CodeBuilder loadLocal(TypeKind tk, int slot)"
title: "CodeBuilder.loadLocal"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.loadLocal

```java
default CodeBuilder loadLocal(TypeKind tk, int slot)
```

Generates an instruction to load a value from a local variable.

**参数**

- **tk** — the load type
- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `tk` is `VOID void` or `slot` is not `#u2 u2`

**参见**

- LoadInstruction
