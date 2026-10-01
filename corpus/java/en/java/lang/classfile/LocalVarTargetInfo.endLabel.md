---
id: "java-en-function-localvartargetinfo-endlabel"
language: "java"
lang: "en"
category: "function"
name: "LocalVarTargetInfo.endLabel"
signature: "Label endLabel()"
title: "LocalVarTargetInfo.endLabel"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVarTargetInfo.endLabel

```java
Label endLabel()
```

The given local variable has a value at indices into the code array in the interval
 [start_pc, start_pc + length), that is, between start_pc inclusive and start_pc + length exclusive.

**返回**

- the end of the bytecode section
