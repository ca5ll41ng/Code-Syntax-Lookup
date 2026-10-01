---
id: "java-en-function-codebuilder-istore"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.istore"
signature: "default CodeBuilder istore(int slot)"
title: "CodeBuilder.istore"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.istore

```java
default CodeBuilder istore(int slot)
```

Generates an instruction to store an `INT int` into a
 local variable.
 

 This may also generate `ISTORE_0 istore_&lt;N&gt;` and
 `ISTORE_W wide istore` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#ISTORE
- #storeLocal(TypeKind, int)
- StoreInstruction
