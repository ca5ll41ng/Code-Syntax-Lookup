---
id: "java-en-function-constantbootstraps-getstaticfinal"
language: "java"
lang: "en"
category: "function"
name: "ConstantBootstraps.getStaticFinal"
signature: "public static Object getStaticFinal(MethodHandles.Lookup lookup, String name, Class<?> type, Class<?> declaringClass)"
title: "ConstantBootstraps.getStaticFinal"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantBootstraps.getStaticFinal

```java
public static Object getStaticFinal(MethodHandles.Lookup lookup, String name, Class<?> type, Class<?> declaringClass)
```

Returns the value of a static final field.

**参数**

- **lookup** — the lookup context describing the class performing the operation (normally stacked by the JVM)
- **name** — the name of the field
- **type** — the type of the field
- **declaringClass** — the class in which the field is declared

**返回**

- the value of the field

**异常**

- **IllegalAccessError** — if the declaring class or the field is not accessible to the class performing the operation
- **NoSuchFieldError** — if the specified field does not exist
- **IncompatibleClassChangeError** — if the specified field is not `final`
