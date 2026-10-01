---
id: "java-en-function-localvartargetinfo-of"
language: "java"
lang: "en"
category: "function"
name: "LocalVarTargetInfo.of"
signature: "static LocalVarTargetInfo of(Label startLabel, Label endLabel, int index)"
title: "LocalVarTargetInfo.of"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVarTargetInfo.of

```java
static LocalVarTargetInfo of(Label startLabel, Label endLabel, int index)
```

{@return local variable target info}

**参数**

- **startLabel** — the code label indicating start of an interval where variable has value
- **endLabel** — the code label indicating start of an interval where variable has value
- **index** — index into the local variables

**异常**

- **IllegalArgumentException** — if `index` is not `#u2 u2`
