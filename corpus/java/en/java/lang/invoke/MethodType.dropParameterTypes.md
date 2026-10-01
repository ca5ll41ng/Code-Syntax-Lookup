---
id: "java-en-function-methodtype-dropparametertypes"
language: "java"
lang: "en"
category: "function"
name: "MethodType.dropParameterTypes"
signature: "public MethodType dropParameterTypes(int start, int end)"
title: "MethodType.dropParameterTypes"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.dropParameterTypes

```java
public MethodType dropParameterTypes(int start, int end)
```

Finds or creates a method type with some parameter types omitted.
 Convenience method for `methodType(java.lang.Class, java.lang.Class[]) methodType`.

**参数**

- **start** — the index (zero-based) of the first parameter type to remove
- **end** — the index (greater than `start`) of the first parameter type after not to remove

**返回**

- the same type, except with the selected parameter(s) removed

**异常**

- **IndexOutOfBoundsException** — if `start` is negative or greater than `parameterCount()` or if `end` is negative or greater than `parameterCount()` or if `start` is greater than `end`
