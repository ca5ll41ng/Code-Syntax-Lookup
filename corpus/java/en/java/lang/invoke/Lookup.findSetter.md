---
id: "java-en-function-lookup-findsetter"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findSetter"
signature: "public MethodHandle findSetter(Class<?> refc, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException"
title: "Lookup.findSetter"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findSetter

```java
public MethodHandle findSetter(Class<?> refc, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException
```

Produces a method handle giving write access to a non-static field.
 The type of the method handle will have a void return type.
 The method handle will take two arguments, the instance containing
 the field, and the value to be stored.
 The second argument will be of the field's value type.
 Access checking is performed immediately on behalf of the lookup class.

**参数**

- **refc** — the class or interface from which the method is accessed
- **name** — the field's name
- **type** — the field's type

**返回**

- a method handle which can store values into the field

**异常**

- **NoSuchFieldException** — if the field does not exist
- **IllegalAccessException** — if access checking fails, or if the field is `static` or `final`
- **NullPointerException** — if any argument is null

**参见**

- #findVarHandle(Class, String, Class)
