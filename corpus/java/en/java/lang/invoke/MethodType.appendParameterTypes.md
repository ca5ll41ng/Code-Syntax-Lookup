---
id: "java-en-function-methodtype-appendparametertypes"
language: "java"
lang: "en"
category: "function"
name: "MethodType.appendParameterTypes"
signature: "public MethodType appendParameterTypes(Class<?>... ptypesToInsert)"
title: "MethodType.appendParameterTypes"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.appendParameterTypes

```java
public MethodType appendParameterTypes(Class<?>... ptypesToInsert)
```

Finds or creates a method type with additional parameter types.
 Convenience method for `methodType(java.lang.Class, java.lang.Class[]) methodType`.

**参数**

- **ptypesToInsert** — zero or more new parameter types to insert after the end of the parameter list

**返回**

- the same type, except with the selected parameter(s) appended

**异常**

- **IllegalArgumentException** — if any element of `ptypesToInsert` is `void.class` or if the resulting method type would have more than 255 parameter slots
- **NullPointerException** — if `ptypesToInsert` or any of its elements is null
