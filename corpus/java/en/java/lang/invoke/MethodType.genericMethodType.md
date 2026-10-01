---
id: "java-en-function-methodtype-genericmethodtype"
language: "java"
lang: "en"
category: "function"
name: "MethodType.genericMethodType"
signature: "public static MethodType genericMethodType(int objectArgCount, boolean finalArray)"
title: "MethodType.genericMethodType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.genericMethodType

```java
public static MethodType genericMethodType(int objectArgCount, boolean finalArray)
```

Finds or creates a method type whose components are `Object` with an optional trailing `Object[]` array.
 Convenience method for `methodType(java.lang.Class, java.lang.Class[]) methodType`.
 All parameters and the return type will be `Object`,
 except the final array parameter if any, which will be `Object[]`.

**参数**

- **objectArgCount** — number of parameters (excluding the final array parameter if any)
- **finalArray** — whether there will be a trailing array parameter, of type `Object[]`

**返回**

- a generally applicable method type, for all calls of the given fixed argument count and a collected array of further arguments

**异常**

- **IllegalArgumentException** — if `objectArgCount` is negative or greater than 255 (or 254, if `finalArray` is true)

**参见**

- #genericMethodType(int)
