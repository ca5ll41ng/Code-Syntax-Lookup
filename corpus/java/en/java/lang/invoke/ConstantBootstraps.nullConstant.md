---
id: "java-en-function-constantbootstraps-nullconstant"
language: "java"
lang: "en"
category: "function"
name: "ConstantBootstraps.nullConstant"
signature: "public static Object nullConstant(MethodHandles.Lookup lookup, String name, Class<?> type)"
title: "ConstantBootstraps.nullConstant"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantBootstraps.nullConstant

```java
public static Object nullConstant(MethodHandles.Lookup lookup, String name, Class<?> type)
```

Returns a `null` object reference for the reference type specified
 by `type`.

**参数**

- **lookup** — unused
- **name** — unused
- **type** — a reference type

**返回**

- a `null` value

**异常**

- **IllegalArgumentException** — if `type` is not a reference type
