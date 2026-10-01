---
id: "java-en-function-ofmethod-parametertype"
language: "java"
lang: "en"
category: "function"
name: "OfMethod.parameterType"
signature: "F parameterType(int i)"
title: "OfMethod.parameterType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/TypeDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfMethod.parameterType

```java
F parameterType(int i)
```

Return a field descriptor describing the requested parameter of the method type
 described by this descriptor

**参数**

- **i** — the index of the parameter

**返回**

- a field descriptor for the requested parameter type

**异常**

- **IndexOutOfBoundsException** — if the index is outside the half-open range {[0, parameterCount)}
