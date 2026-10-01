---
id: "java-en-function-lookup-findstaticsetter"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findStaticSetter"
signature: "public MethodHandle findStaticSetter(Class<?> refc, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException"
title: "Lookup.findStaticSetter"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findStaticSetter

```java
public MethodHandle findStaticSetter(Class<?> refc, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException
```

Produces a method handle giving write access to a static field.
 The type of the method handle will have a void return type.
 The method handle will take a single
 argument, of the field's value type, the value to be stored.
 Access checking is performed immediately on behalf of the lookup class.
 

 If the returned method handle is invoked, the field's class will
 be initialized, if it has not already been initialized.

**参数**

- **refc** — the class or interface from which the method is accessed
- **name** — the field's name
- **type** — the field's type

**返回**

- a method handle which can store values into the field

**异常**

- **NoSuchFieldException** — if the field does not exist
- **IllegalAccessException** — if access checking fails, or if the field is not `static` or is `final`
- **NullPointerException** — if any argument is null
