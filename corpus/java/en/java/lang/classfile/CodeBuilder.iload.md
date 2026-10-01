---
id: "java-en-function-codebuilder-iload"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.iload"
signature: "default CodeBuilder iload(int slot)"
title: "CodeBuilder.iload"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.iload

```java
default CodeBuilder iload(int slot)
```

Generates an instruction to load an `INT int` from a local
 variable.
 

 This may also generate `ILOAD_0 iload_&lt;N&gt;` and `ILOAD_W wide iload` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#ILOAD
- #loadLocal(TypeKind, int)
- LoadInstruction
