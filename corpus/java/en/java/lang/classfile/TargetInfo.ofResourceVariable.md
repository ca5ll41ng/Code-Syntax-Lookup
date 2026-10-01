---
id: "java-en-function-targetinfo-ofresourcevariable"
language: "java"
lang: "en"
category: "function"
name: "TargetInfo.ofResourceVariable"
signature: "static LocalVarTarget ofResourceVariable(List<LocalVarTargetInfo> table)"
title: "TargetInfo.ofResourceVariable"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetInfo.ofResourceVariable

```java
static LocalVarTarget ofResourceVariable(List<LocalVarTargetInfo> table)
```

{@return a target for annotations on the type in a local variable declared
 as a resource in a try-with-resources statement}

**参数**

- **table** — the list of local variable targets

**异常**

- **IllegalArgumentException** — if the size of the list of targets exceeds the limit of `#u2 u2`
