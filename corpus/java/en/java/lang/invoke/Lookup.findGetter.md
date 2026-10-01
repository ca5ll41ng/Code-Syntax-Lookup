---
id: "java-en-function-lookup-findgetter"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findGetter"
signature: "public MethodHandle findGetter(Class<?> refc, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException"
title: "Lookup.findGetter"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findGetter

```java
public MethodHandle findGetter(Class<?> refc, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException
```

Produces a method handle giving read access to a non-static field.
 The type of the method handle will have a return type of the field's
 value type.
 The method handle's single argument will be the instance containing
 the field.
 Access checking is performed immediately on behalf of the lookup class.

**参数**

- **refc** — the class or interface from which the method is accessed
- **name** — the field's name
- **type** — the field's type

**返回**

- a method handle which can load values from the field

**异常**

- **NoSuchFieldException** — if the field does not exist
- **IllegalAccessException** — if access checking fails, or if the field is `static`
- **NullPointerException** — if any argument is null

**参见**

- #findVarHandle(Class, String, Class)
