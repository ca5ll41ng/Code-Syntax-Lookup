---
id: "java-en-function-codebuilder-astore"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.astore"
signature: "default CodeBuilder astore(int slot)"
title: "CodeBuilder.astore"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.astore

```java
default CodeBuilder astore(int slot)
```

Generates an instruction to store a `REFERENCE reference`
 into a local variable.  Such an instruction can also store a `#returnAddress returnAddress`.
 

 This may also generate `ASTORE_0 astore_&lt;N&gt;` and
 `ASTORE_W wide astore` instructions.

**参数**

- **slot** — the local variable slot

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- Opcode#ASTORE
- #storeLocal
- StoreInstruction
