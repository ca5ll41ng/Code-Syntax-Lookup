---
id: "java-en-function-codebuilder-labelbinding"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.labelBinding"
signature: "default CodeBuilder labelBinding(Label label)"
title: "CodeBuilder.labelBinding"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.labelBinding

```java
default CodeBuilder labelBinding(Label label)
```

Binds a label to the current position.

 The label to bind does not have to be `newLabel() from this
 builder`; it can be from another parsed `CodeModel`.

**参数**

- **label** — the label

**返回**

- this builder

**参见**

- LabelTarget
