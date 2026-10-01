---
id: "java-en-function-codebuilder-endlabel"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.endLabel"
signature: "Label endLabel()"
title: "CodeBuilder.endLabel"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.endLabel

```java
Label endLabel()
```

{@return the label associated with the end of the current block}
 If this builder is not a "block" builder, such as those provided by
 `block` or `ifThenElse`,
 the current block will be the entire method body.
