---
id: "java-en-function-codebuilder-dstore"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.dstore"
signature: "default CodeBuilder dstore(int slot)"
title: "CodeBuilder.dstore"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.dstore

```java
default CodeBuilder dstore(int slot)
```

Generates an instruction to store a `DOUBLE double` into a
 local variable.
 

 This may also generate `DSTORE_0 dstore_&lt;N&gt;` and
 `DSTORE_W wide dstore` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#DSTORE
- #storeLocal(TypeKind, int)
- StoreInstruction
