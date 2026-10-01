---
id: "java-en-function-codebuilder-aload"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.aload"
signature: "default CodeBuilder aload(int slot)"
title: "CodeBuilder.aload"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.aload

```java
default CodeBuilder aload(int slot)
```

Generates an instruction to load a `REFERENCE reference`
 from a local variable.
 

 This may also generate `ALOAD_0 aload_&lt;N&gt;` and `ALOAD_W wide aload` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#ALOAD
- #loadLocal
- LoadInstruction
