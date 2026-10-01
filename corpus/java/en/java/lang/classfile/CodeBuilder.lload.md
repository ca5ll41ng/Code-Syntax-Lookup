---
id: "java-en-function-codebuilder-lload"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.lload"
signature: "default CodeBuilder lload(int slot)"
title: "CodeBuilder.lload"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.lload

```java
default CodeBuilder lload(int slot)
```

Generates an instruction to load a `LONG long` from a
 local variable.
 

 This may also generate `LLOAD_0 lload_&lt;N&gt;` and `LLOAD_W wide lload` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#LLOAD
- #loadLocal(TypeKind, int)
- LoadInstruction
