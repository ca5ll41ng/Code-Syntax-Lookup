---
id: "java-en-function-targetinfo-ofmethodformalparameter"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofMethodFormalParameter"
signature: "static FormalParameterTarget ofMethodFormalParameter(int formalParameterIndex)"
title: "TargetInfo.ofMethodFormalParameter"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofMethodFormalParameter

```java
static FormalParameterTarget ofMethodFormalParameter(int formalParameterIndex)
```

{@return a target for annotations on the type in a formal parameter
 declaration of a method, constructor, or lambda expression}  The
 index may differ from the index in the method descriptor because some
 synthetic or implicit parameters are omitted.

**参数**

- **formalParameterIndex** — specifies which formal parameter declaration has an annotated type

**异常**

- **IllegalArgumentException** — if `formalParameterIndex` is not `#u1 u1`
