---
id: "java-en-function-constantbootstraps-enumconstant"
language: "java"
lang: "en"
category: "function"
name: "ConstantBootstraps.enumConstant"
signature: "public static <E extends Enum<E>> E enumConstant(MethodHandles.Lookup lookup, String name, Class<E> type)"
title: "ConstantBootstraps.enumConstant"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantBootstraps.enumConstant

```java
public static <E extends Enum<E>> E enumConstant(MethodHandles.Lookup lookup, String name, Class<E> type)
```

Returns an `enum` constant of the type specified by `type`
 with the name specified by `name`.

**参数**

- **lookup** — the lookup context describing the class performing the operation (normally stacked by the JVM)
- **name** — the name of the constant to return, which must exactly match an enum constant in the specified type.
- **type** — the `Class` object describing the enum type for which a constant is to be returned
- **The** — enum type for which a constant value is to be returned

**返回**

- the enum constant of the specified enum type with the specified name

**异常**

- **IllegalAccessError** — if the declaring class or the field is not accessible to the class performing the operation
- **IllegalArgumentException** — if the specified enum type has no constant with the specified name, or the specified class object does not represent an enum type

**参见**

- Enum#valueOf(Class, String)
