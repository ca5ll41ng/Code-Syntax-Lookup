---
id: "java-en-function-codebuilder-localvariabletype"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.localVariableType"
signature: "default CodeBuilder localVariableType(int slot, Utf8Entry nameEntry, Utf8Entry signatureEntry, Label startScope, Label endScope)"
title: "CodeBuilder.localVariableType"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.localVariableType

```java
default CodeBuilder localVariableType(int slot, Utf8Entry nameEntry, Utf8Entry signatureEntry, Label startScope, Label endScope)
```

Declares a local variable type entry.
 

 This call may be ignored if `DROP_DEBUG`
 is set, or if any of the argument labels is not `labelBinding
 bound` and `DROP_DEAD_LABELS` is set.

 When a local variable type entry is declared, a local variable entry with
 the descriptor derived from erasure (JLS {@jls 4.6}) of the signature
 should be declared as well.

**参数**

- **slot** — the local variable slot
- **nameEntry** — the variable name
- **signatureEntry** — the variable signature
- **startScope** — the start scope of the variable
- **endScope** — the end scope of the variable

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- LocalVariableType
