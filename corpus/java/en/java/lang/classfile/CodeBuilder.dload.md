---
id: "java-en-function-codebuilder-dload"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.dload"
signature: "default CodeBuilder dload(int slot)"
title: "CodeBuilder.dload"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.dload

```java
default CodeBuilder dload(int slot)
```

Generates an instruction to load a `DOUBLE double` from a
 local variable.
 

 This may also generate `DLOAD_0 dload_&lt;N&gt;` and `DLOAD_W wide dload` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#DLOAD
- #loadLocal(TypeKind, int)
- LoadInstruction
