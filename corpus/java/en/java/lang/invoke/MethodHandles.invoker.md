---
id: "java-en-function-methodhandles-invoker"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.invoker"
signature: "public static MethodHandle invoker(MethodType type)"
title: "MethodHandles.invoker"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.invoker

```java
public static MethodHandle invoker(MethodType type)
```

Produces a special invoker method handle which can be used to
 invoke any method handle compatible with the given type, as if by `invoke invoke`.
 The resulting invoker will have a type which is
 exactly equal to the desired type, except that it will accept
 an additional leading argument of type `MethodHandle`.
 

 Before invoking its target, if the target differs from the expected type,
 the invoker will apply reference casts as
 necessary and box, unbox, or widen primitive values, as if by `asType asType`.
 Similarly, the return value will be converted as necessary.
 If the target is a `asVarargsCollector variable arity method handle`,
 the required arity conversion will be made, again as if by `asType asType`.
 

 This method is equivalent to the following code (though it may be more efficient):
 `publicLookup().findVirtual(MethodHandle.class, "invoke", type)`
 
 Discussion:
 A `genericMethodType general method type` is one which
 mentions only `Object` arguments and return values.
 An invoker for such a type is capable of calling any method handle
 of the same arity as the general type.
 
 (Note:  The invoker method is not available via the Core Reflection API.
 An attempt to call `invoke java.lang.reflect.Method.invoke`
 on the declared `invokeExact` or `invoke` method will raise an
 `java.lang.UnsupportedOperationException UnsupportedOperationException`.)
 

 This method throws no reflective exceptions.

**参数**

- **type** — the desired target type

**返回**

- a method handle suitable for invoking any method handle convertible to the given type

**异常**

- **IllegalArgumentException** — if the resulting method handle's type would have too many parameters
