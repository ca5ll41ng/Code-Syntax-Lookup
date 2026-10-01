---
id: "java-en-function-ofmethod-dropparametertypes"
language: "java"
lang: "en"
category: "function"
name: "OfMethod.dropParameterTypes"
signature: "M dropParameterTypes(int start, int end)"
title: "OfMethod.dropParameterTypes"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/TypeDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfMethod.dropParameterTypes

```java
M dropParameterTypes(int start, int end)
```

Return a method descriptor that is identical to this one,
 except that a range of parameter types have been removed.

**参数**

- **start** — the index of the first parameter to remove
- **end** — the index after the last parameter to remove

**返回**

- the new method descriptor

**异常**

- **IndexOutOfBoundsException** — if `start` is outside the half-open range `[0, parameterCount)`, or `end` is outside the closed range `[0, parameterCount]`, or if `start > end`
