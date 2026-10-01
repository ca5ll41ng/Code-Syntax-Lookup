---
id: "java-en-function-lookup-findstaticgetter"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findStaticGetter"
signature: "public MethodHandle findStaticGetter(Class<?> refc, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException"
title: "Lookup.findStaticGetter"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findStaticGetter

```java
public MethodHandle findStaticGetter(Class<?> refc, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException
```

Produces a method handle giving read access to a static field.
 The type of the method handle will have a return type of the field's
 value type.
 The method handle will take no arguments.
 Access checking is performed immediately on behalf of the lookup class.
 

 If the returned method handle is invoked, the field's class will
 be initialized, if it has not already been initialized.
 `ExceptionInInitializerError` is thrown if invoking the method handle
 provokes the class to be initialized and the initializer fails.
 `IllegalStateException` is thrown if the field is a `isStrictInit() strictly-initialized` static field and the method handle
 is invoked by the thread initializing the field's class before the field has
 been initialized.

**参数**

- **refc** — the class or interface from which the method is accessed
- **name** — the field's name
- **type** — the field's type

**返回**

- a method handle which can load values from the field

**异常**

- **NoSuchFieldException** — if the field does not exist
- **IllegalAccessException** — if access checking fails, or if the field is not `static`
- **NullPointerException** — if any argument is null
