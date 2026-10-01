---
id: "java-en-function-methodparameterinfo-ofparameter"
language: "java"
lang: "en"
category: "function"
name: "MethodParameterInfo.ofParameter"
signature: "static MethodParameterInfo ofParameter(Optional<String> name, int flags)"
title: "MethodParameterInfo.ofParameter"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/MethodParameterInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodParameterInfo.ofParameter

```java
static MethodParameterInfo ofParameter(Optional<String> name, int flags)
```

{@return a method parameter description}

**参数**

- **name** — the method parameter name, may be empty
- **flags** — the method parameter access flags

**异常**

- **IllegalArgumentException** — if `flags` is not `#u2 u2`
