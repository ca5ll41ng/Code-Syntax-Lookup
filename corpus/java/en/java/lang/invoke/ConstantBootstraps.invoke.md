---
id: "java-en-function-constantbootstraps-invoke"
language: "java"
lang: "en"
category: "function"
name: "ConstantBootstraps.invoke"
signature: "public static Object invoke(MethodHandles.Lookup lookup, String name, Class<?> type, MethodHandle handle, Object... args) throws Throwable"
title: "ConstantBootstraps.invoke"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantBootstraps.invoke

```java
public static Object invoke(MethodHandles.Lookup lookup, String name, Class<?> type, MethodHandle handle, Object... args) throws Throwable
```

Returns the result of invoking a method handle with the provided
 arguments.
 

 This method behaves as if the method handle to be invoked is the result
 of adapting the given method handle, via `asType`, to
 adjust the return type to the desired type.

**参数**

- **lookup** — unused
- **name** — unused
- **type** — the desired type of the value to be returned, which must be compatible with the return type of the method handle
- **handle** — the method handle to be invoked
- **args** — the arguments to pass to the method handle, as if with `invokeWithArguments`.  Each argument may be `null`.

**返回**

- the result of invoking the method handle

**异常**

- **WrongMethodTypeException** — if the handle's method type cannot be adjusted to take the given number of arguments, or if the handle's return type cannot be adjusted to the desired type
- **ClassCastException** — if an argument or the result produced by invoking the handle cannot be converted by reference casting
- **Throwable** — anything thrown by the method handle invocation
