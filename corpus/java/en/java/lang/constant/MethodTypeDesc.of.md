---
id: "java-en-function-methodtypedesc-of"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeDesc.of"
signature: "static MethodTypeDesc of(ClassDesc returnDesc)"
title: "MethodTypeDesc.of"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/MethodTypeDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeDesc.of

```java
static MethodTypeDesc of(ClassDesc returnDesc)
```

{@return a `MethodTypeDesc` with the given return type and no
 parameter types}

**参数**

- **returnDesc** — a `ClassDesc` describing the return type

**异常**

- **NullPointerException** — if `returnDesc` is `null`

> *Since 21*
