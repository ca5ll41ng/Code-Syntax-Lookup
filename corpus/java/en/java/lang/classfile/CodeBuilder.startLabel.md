---
id: "java-en-function-codebuilder-startlabel"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.startLabel"
signature: "Label startLabel()"
title: "CodeBuilder.startLabel"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.startLabel

```java
Label startLabel()
```

{@return the label associated with the beginning of the current block}
 If this builder is not a "block" builder, such as those provided by
 `block` or `ifThenElse`,
 the current block will be the entire method body.
