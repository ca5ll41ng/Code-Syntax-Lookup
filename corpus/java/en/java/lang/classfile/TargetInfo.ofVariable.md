---
id: "java-en-function-targetinfo-ofvariable"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofVariable"
signature: "static LocalVarTarget ofVariable(TargetType targetType, List<LocalVarTargetInfo> table)"
title: "TargetInfo.ofVariable"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofVariable

```java
static LocalVarTarget ofVariable(TargetType targetType, List<LocalVarTargetInfo> table)
```

{@return a target for annotations on the type in a local variable declaration,
 including a variable declared as a resource in a try-with-resources statement}

**参数**

- **targetType** — `LOCAL_VARIABLE` or `RESOURCE_VARIABLE`
- **table** — the list of local variable targets

**异常**

- **IllegalArgumentException** — if the size of the list of targets exceeds the limit of `#u2 u2`
