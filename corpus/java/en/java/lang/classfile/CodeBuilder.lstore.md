---
id: "java-en-function-codebuilder-lstore"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.lstore"
signature: "default CodeBuilder lstore(int slot)"
title: "CodeBuilder.lstore"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.lstore

```java
default CodeBuilder lstore(int slot)
```

Generates an instruction to store a `LONG long` into a
 local variable.
 

 This may also generate `LSTORE_0 lstore_&lt;N&gt;` and
 `LSTORE_W wide lstore` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#LSTORE
- #storeLocal(TypeKind, int)
- StoreInstruction
