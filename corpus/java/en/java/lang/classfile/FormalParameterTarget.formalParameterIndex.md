---
id: "java-en-function-formalparametertarget-formalparameterindex"
language: "java"
lang: "en"
category: "function"
name: "FormalParameterTarget.formalParameterIndex"
signature: "int formalParameterIndex()"
title: "FormalParameterTarget.formalParameterIndex"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FormalParameterTarget.formalParameterIndex

```java
int formalParameterIndex()
```

{@return the index into the formal parameter declarations, in the
 order declared in the source code}  The index may differ from the
 index in the method descriptor because some synthetic or implicit
 parameters are omitted.
