---
id: "java-en-function-codebuilder-bastore"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.bastore"
signature: "default CodeBuilder bastore()"
title: "CodeBuilder.bastore"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.bastore

```java
default CodeBuilder bastore()
```

Generates an instruction to store into a `BYTE byte` or
 `BOOLEAN boolean` array.

**返回**

- this builder

**参见**

- Opcode#BASTORE
- #arrayStore(TypeKind)
- ArrayStoreInstruction
