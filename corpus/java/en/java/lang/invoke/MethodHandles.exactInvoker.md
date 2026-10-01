---
id: "java-en-function-methodhandles-exactinvoker"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.exactInvoker"
signature: "public static MethodHandle exactInvoker(MethodType type)"
title: "MethodHandles.exactInvoker"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.exactInvoker

```java
public static MethodHandle exactInvoker(MethodType type)
```

Produces a special invoker method handle which can be used to
 invoke any method handle of the given type, as if by `invokeExact invokeExact`.
 The resulting invoker will have a type which is
 exactly equal to the desired type, except that it will accept
 an additional leading argument of type `MethodHandle`.
 

 This method is equivalent to the following code (though it may be more efficient):
 `publicLookup().findVirtual(MethodHandle.class, "invokeExact", type)`

 
 Discussion:
 Invoker method handles can be useful when working with variable method handles
 of unknown types.
 For example, to emulate an `invokeExact` call to a variable method
 handle `M`, extract its type `T`,
 look up the invoker method `X` for `T`,
 and call the invoker method, as `X.invoke(T, A...)`.
 (It would not work to call `X.invokeExact`, since the type `T`
 is unknown.)
 If spreading, collecting, or other argument transformations are required,
 they can be applied once to the invoker `X` and reused on many `M`
 method handle values, as long as they are compatible with the type of `X`.
 
 (Note:  The invoker method is not available via the Core Reflection API.
 An attempt to call `invoke java.lang.reflect.Method.invoke`
 on the declared `invokeExact` or `invoke` method will raise an
 `java.lang.UnsupportedOperationException UnsupportedOperationException`.)
 

 This method throws no reflective exceptions.

**参数**

- **type** — the desired target type

**返回**

- a method handle suitable for invoking any method handle of the given type

**异常**

- **IllegalArgumentException** — if the resulting method handle's type would have too many parameters
