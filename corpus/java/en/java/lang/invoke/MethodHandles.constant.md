---
id: "java-en-function-methodhandles-constant"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.constant"
signature: "public static MethodHandle constant(Class<?> type, Object value)"
title: "MethodHandles.constant"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.constant

```java
public static MethodHandle constant(Class<?> type, Object value)
```

Produces a method handle of the requested return type which returns the given
 constant value every time it is invoked.
 

 Before the method handle is returned, the passed-in value is converted to the requested type.
 If the requested type is primitive, widening primitive conversions are attempted,
 else reference conversions are attempted.
 

The returned method handle is equivalent to `identity(type).bindTo(value)`,
 for reference types.  For all types it is equivalent to
 `insertArguments(identity(type), 0, value)`.

**参数**

- **type** — the return type of the desired method handle
- **value** — the value to return

**返回**

- a method handle of the given return type and no arguments, which always returns the given value

**异常**

- **NullPointerException** — if the `type` argument is null
- **ClassCastException** — if the value cannot be converted to the required return type
- **IllegalArgumentException** — if the given type is `void.class`
