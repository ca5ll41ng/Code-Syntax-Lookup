---
id: "java-en-function-codebuilder-localvariable"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.localVariable"
signature: "default CodeBuilder localVariable(int slot, Utf8Entry nameEntry, Utf8Entry descriptorEntry, Label startScope, Label endScope)"
title: "CodeBuilder.localVariable"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.localVariable

```java
default CodeBuilder localVariable(int slot, Utf8Entry nameEntry, Utf8Entry descriptorEntry, Label startScope, Label endScope)
```

Declares a local variable entry.
 

 This call may be ignored if `DROP_DEBUG`
 is set, or if any of the argument labels is not `labelBinding
 bound` and `DROP_DEAD_LABELS` is set.

**参数**

- **slot** — the local variable slot
- **nameEntry** — the variable name
- **descriptorEntry** — the variable descriptor
- **startScope** — the start scope of the variable
- **endScope** — the end scope of the variable

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if `slot` is not `#u2 u2`

**参见**

- LocalVariable
