---
id: "java-en-function-ofmethod-changeparametertype"
language: "java"
lang: "en"
category: "function"
name: "OfMethod.changeParameterType"
signature: "M changeParameterType(int index, F paramType)"
title: "OfMethod.changeParameterType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/TypeDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OfMethod.changeParameterType

```java
M changeParameterType(int index, F paramType)
```

Return a method descriptor that is identical to this one,
 except that a single parameter type has been changed to the specified type.

**参数**

- **index** — the index of the parameter to change
- **paramType** — a field descriptor describing the new parameter type

**返回**

- the new method descriptor

**异常**

- **NullPointerException** — if any argument is `null`
- **IndexOutOfBoundsException** — if the index is outside the half-open range {[0, parameterCount)}
