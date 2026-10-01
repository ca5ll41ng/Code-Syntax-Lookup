---
id: "java-en-function-constantbootstraps-staticfieldvarhandle"
language: "java"
lang: "en"
category: "function"
name: "ConstantBootstraps.staticFieldVarHandle"
signature: "public static VarHandle staticFieldVarHandle(MethodHandles.Lookup lookup, String name, Class<VarHandle> type, Class<?> declaringClass, Class<?> fieldType)"
title: "ConstantBootstraps.staticFieldVarHandle"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantBootstraps.staticFieldVarHandle

```java
public static VarHandle staticFieldVarHandle(MethodHandles.Lookup lookup, String name, Class<VarHandle> type, Class<?> declaringClass, Class<?> fieldType)
```

Finds a `VarHandle` for a static field.

**参数**

- **lookup** — the lookup context describing the class performing the operation (normally stacked by the JVM)
- **name** — the name of the field
- **type** — the required result type (must be `Class`)
- **declaringClass** — the class in which the field is declared
- **fieldType** — the type of the field

**返回**

- the `VarHandle`

**异常**

- **IllegalAccessError** — if the declaring class or the field is not accessible to the class performing the operation
- **NoSuchFieldError** — if the specified field does not exist
- **IllegalArgumentException** — if the type is not `VarHandle`
