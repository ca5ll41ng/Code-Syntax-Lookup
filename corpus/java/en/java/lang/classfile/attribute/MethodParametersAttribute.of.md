---
id: "java-en-function-methodparametersattribute-of"
language: "java"
lang: "en"
category: "function"
name: "MethodParametersAttribute.of"
signature: "static MethodParametersAttribute of(List<MethodParameterInfo> parameters)"
title: "MethodParametersAttribute.of"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/MethodParametersAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodParametersAttribute.of

```java
static MethodParametersAttribute of(List<MethodParameterInfo> parameters)
```

{@return a `MethodParameters` attribute}

**参数**

- **parameters** — the method parameter descriptions

**异常**

- **IllegalArgumentException** — if the number of parameters exceeds the limit of `#u1 u1`
