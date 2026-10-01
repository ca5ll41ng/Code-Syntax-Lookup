---
id: "java-en-function-ofmethod-insertparametertypes"
language: "java"
lang: "en"
category: "function"
name: "OfMethod.insertParameterTypes"
signature: "M insertParameterTypes(int pos, F... paramTypes)"
title: "OfMethod.insertParameterTypes"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/TypeDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfMethod.insertParameterTypes

```java
M insertParameterTypes(int pos, F... paramTypes)
```

Return a method descriptor that is identical to this one,
 except that a range of additional parameter types have been inserted.

**参数**

- **pos** — the index at which to insert the first inserted parameter
- **paramTypes** — field descriptors describing the new parameter types to insert

**返回**

- the new method descriptor

**异常**

- **NullPointerException** — if any argument is `null`
- **IndexOutOfBoundsException** — if `pos` is outside the closed range {[0, parameterCount]}
