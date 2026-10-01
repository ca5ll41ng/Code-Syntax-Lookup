---
id: "java-en-function-methodtype-insertparametertypes"
language: "java"
lang: "en"
category: "function"
name: "MethodType.insertParameterTypes"
signature: "public MethodType insertParameterTypes(int num, Class<?>... ptypesToInsert)"
title: "MethodType.insertParameterTypes"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.insertParameterTypes

```java
public MethodType insertParameterTypes(int num, Class<?>... ptypesToInsert)
```

Finds or creates a method type with additional parameter types.
 Convenience method for `methodType(java.lang.Class, java.lang.Class[]) methodType`.

**参数**

- **num** — the position (zero-based) of the inserted parameter type(s)
- **ptypesToInsert** — zero or more new parameter types to insert into the parameter list

**返回**

- the same type, except with the selected parameter(s) inserted

**异常**

- **IndexOutOfBoundsException** — if `num` is negative or greater than `parameterCount()`
- **IllegalArgumentException** — if any element of `ptypesToInsert` is `void.class` or if the resulting method type would have more than 255 parameter slots
- **NullPointerException** — if `ptypesToInsert` or any of its elements is null
