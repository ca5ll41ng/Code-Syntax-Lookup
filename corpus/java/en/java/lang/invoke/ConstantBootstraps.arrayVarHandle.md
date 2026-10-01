---
id: "java-en-function-constantbootstraps-arrayvarhandle"
language: "java"
lang: "en"
category: "function"
name: "ConstantBootstraps.arrayVarHandle"
signature: "public static VarHandle arrayVarHandle(MethodHandles.Lookup lookup, String name, Class<VarHandle> type, Class<?> arrayClass)"
title: "ConstantBootstraps.arrayVarHandle"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantBootstraps.arrayVarHandle

```java
public static VarHandle arrayVarHandle(MethodHandles.Lookup lookup, String name, Class<VarHandle> type, Class<?> arrayClass)
```

Finds a `VarHandle` for an array type.

**参数**

- **lookup** — the lookup context describing the class performing the operation (normally stacked by the JVM)
- **name** — unused
- **type** — the required result type (must be `Class`)
- **arrayClass** — the type of the array

**返回**

- the `VarHandle`

**异常**

- **IllegalAccessError** — if the component type of the array is not accessible to the class performing the operation
- **IllegalArgumentException** — if the type is not `VarHandle`
