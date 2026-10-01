---
id: "java-en-function-lookup-unreflectgetter"
language: "java"
lang: "en"
category: "function"
name: "Lookup.unreflectGetter"
signature: "public MethodHandle unreflectGetter(Field f) throws IllegalAccessException"
title: "Lookup.unreflectGetter"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.unreflectGetter

```java
public MethodHandle unreflectGetter(Field f) throws IllegalAccessException
```

Produces a method handle giving read access to a reflected field.
 The type of the method handle will have a return type of the field's
 value type.
 If the field is `static`, the method handle will take no arguments.
 Otherwise, its single argument will be the instance containing
 the field.
 If the `Field` object's `accessible` flag is not set,
 access checking is performed immediately on behalf of the lookup class.
 

 If the field is static, and if the returned method handle is invoked, the
 field's class will be initialized, if it has not already been initialized.
 `ExceptionInInitializerError` is thrown if invoking the method handle
 provokes the class to be initialized and the initializer fails.
 `IllegalStateException` is thrown if the field is a `isStrictInit() strictly-initialized` static field and the method handle
 is invoked by the thread initializing the field's class before the field has
 been initialized.

**参数**

- **f** — the reflected field

**返回**

- a method handle which can load values from the reflected field

**异常**

- **IllegalAccessException** — if access checking fails
- **NullPointerException** — if the argument is null
