---
id: "java-en-function-codebuilder-arraystore"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.arrayStore"
signature: "default CodeBuilder arrayStore(TypeKind tk)"
title: "CodeBuilder.arrayStore"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.arrayStore

```java
default CodeBuilder arrayStore(TypeKind tk)
```

Generates an instruction to store into an array.

**参数**

- **tk** — the array element type

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `tk` is `VOID void`

**参见**

- ArrayStoreInstruction
