---
id: "java-en-function-codebuilder-fload"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.fload"
signature: "default CodeBuilder fload(int slot)"
title: "CodeBuilder.fload"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.fload

```java
default CodeBuilder fload(int slot)
```

Generates an instruction to load a `FLOAT float` from a
 local variable.
 

 This may also generate `FLOAD_0 fload_&lt;N&gt;` and `FLOAD_W wide fload` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#FLOAD
- #loadLocal(TypeKind, int)
- LoadInstruction
