---
id: "java-en-function-methodparameterinfo-flags"
language: "java"
lang: "en"
category: "function"
name: "MethodParameterInfo.flags"
signature: "default Set<AccessFlag> flags()"
title: "MethodParameterInfo.flags"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/MethodParameterInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodParameterInfo.flags

```java
default Set<AccessFlag> flags()
```

{@return the access flags, as a set of flag enums}

**异常**

- **IllegalArgumentException** — if the flags mask has any undefined bit set

**参见**

- Parameter#accessFlags()
- AccessFlag.Location#METHOD_PARAMETER
