---
id: "java-en-function-constantbootstraps-primitiveclass"
language: "java"
lang: "en"
category: "function"
name: "ConstantBootstraps.primitiveClass"
signature: "public static Class<?> primitiveClass(MethodHandles.Lookup lookup, String name, Class<?> type)"
title: "ConstantBootstraps.primitiveClass"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantBootstraps.primitiveClass

```java
public static Class<?> primitiveClass(MethodHandles.Lookup lookup, String name, Class<?> type)
```

Returns a `Class` mirror for the primitive type whose type
 descriptor is specified by `name`.

**参数**

- **lookup** — unused
- **name** — the descriptor (JVMS {@jvms 4.3}) of the desired primitive type
- **type** — the required result type (must be `Class.class`)

**返回**

- the `Class` mirror

**异常**

- **IllegalArgumentException** — if the name is not a descriptor for a primitive type or the type is not `Class.class`
