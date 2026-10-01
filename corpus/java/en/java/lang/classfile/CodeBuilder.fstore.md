---
id: "java-en-function-codebuilder-fstore"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.fstore"
signature: "default CodeBuilder fstore(int slot)"
title: "CodeBuilder.fstore"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.fstore

```java
default CodeBuilder fstore(int slot)
```

Generates an instruction to store a `FLOAT float` into a
 local variable.
 

 This may also generate `FSTORE_0 fstore_&lt;N&gt;` and
 `FSTORE_W wide fstore` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#FSTORE
- #storeLocal(TypeKind, int)
- StoreInstruction
