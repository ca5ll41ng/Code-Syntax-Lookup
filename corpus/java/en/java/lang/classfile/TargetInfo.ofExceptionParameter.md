---
id: "java-en-function-targetinfo-ofexceptionparameter"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofExceptionParameter"
signature: "static CatchTarget ofExceptionParameter(int exceptionTableIndex)"
title: "TargetInfo.ofExceptionParameter"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofExceptionParameter

```java
static CatchTarget ofExceptionParameter(int exceptionTableIndex)
```

{@return a target for annotations on the i'th type in an exception parameter declaration}

**参数**

- **exceptionTableIndex** — the index into the exception table of the Code attribute

**异常**

- **IllegalArgumentException** — if `exceptionTableIndex` is not `#u2 u2`
