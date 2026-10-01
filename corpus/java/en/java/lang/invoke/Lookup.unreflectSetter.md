---
id: "java-en-function-lookup-unreflectsetter"
language: "java"
lang: "en"
category: "function"
name: "Lookup.unreflectSetter"
signature: "public MethodHandle unreflectSetter(Field f) throws IllegalAccessException"
title: "Lookup.unreflectSetter"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.unreflectSetter

```java
public MethodHandle unreflectSetter(Field f) throws IllegalAccessException
```

Produces a method handle giving write access to a reflected field.
 The type of the method handle will have a void return type.
 If the field is `static`, the method handle will take a single
 argument, of the field's value type, the value to be stored.
 Otherwise, the two arguments will be the instance containing
 the field, and the value to be stored.
 If the `Field` object's `accessible` flag is not set,
 access checking is performed immediately on behalf of the lookup class.
 

 If the field is `final`, write access will not be
 allowed and access checking will fail, except under certain
 narrow circumstances documented for `set Field.set`.
 A method handle is returned only if a corresponding call to
 the `Field` object's `set` method could return
 normally.  In particular, fields which are both `static`
 and `final` may never be set.
 

 If the field is `static`, and
 if the returned method handle is invoked, the field's class will
 be initialized, if it has not already been initialized.

**参数**

- **f** — the reflected field

**返回**

- a method handle which can store values into the reflected field

**异常**

- **IllegalAccessException** — if access checking fails, or if the field is `final` and write access is not enabled on the `Field` object
- **NullPointerException** — if the argument is null

**参见**

- Mutation methods
