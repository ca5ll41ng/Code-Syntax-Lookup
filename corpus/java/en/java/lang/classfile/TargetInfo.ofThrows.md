---
id: "java-en-function-targetinfo-ofthrows"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofThrows"
signature: "static ThrowsTarget ofThrows(int throwsTargetIndex)"
title: "TargetInfo.ofThrows"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofThrows

```java
static ThrowsTarget ofThrows(int throwsTargetIndex)
```

{@return a target for annotations on the i'th type in the throws clause of a method or
 constructor declaration}

**参数**

- **throwsTargetIndex** — the index into the exception table of the Exceptions attribute of the method

**异常**

- **IllegalArgumentException** — if `throwsTargetIndex` is not `#u2 u2`
