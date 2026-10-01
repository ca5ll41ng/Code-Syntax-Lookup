---
id: "java-en-function-targetinfo-oflocalvariable"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofLocalVariable"
signature: "static LocalVarTarget ofLocalVariable(List<LocalVarTargetInfo> table)"
title: "TargetInfo.ofLocalVariable"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofLocalVariable

```java
static LocalVarTarget ofLocalVariable(List<LocalVarTargetInfo> table)
```

{@return a target for annotations on the type in a local variable declaration}

**参数**

- **table** — the list of local variable targets

**异常**

- **IllegalArgumentException** — if the size of the list of targets exceeds the limit of `#u2 u2`
