---
id: "java-en-function-methodhandles-spreadinvoker"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.spreadInvoker"
signature: "public static MethodHandle spreadInvoker(MethodType type, int leadingArgCount)"
title: "MethodHandles.spreadInvoker"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.spreadInvoker

```java
public static MethodHandle spreadInvoker(MethodType type, int leadingArgCount)
```

Produces a method handle which will invoke any method handle of the
 given `type`, with a given number of trailing arguments replaced by
 a single trailing `Object[]` array.
 The resulting invoker will be a method handle with the following
 arguments:
 
 
- a single `MethodHandle` target
 
- zero or more leading values (counted by `leadingArgCount`)
 
- an `Object[]` array containing trailing arguments
 

 

 The invoker will invoke its target like a call to `invoke invoke` with
 the indicated `type`.
 That is, if the target is exactly of the given `type`, it will behave
 like `invokeExact`; otherwise it behave as if `asType asType`
 is used to convert the target to the required `type`.
 

 The type of the returned invoker will not be the given `type`, but rather
 will have all parameters except the first `leadingArgCount`
 replaced by a single array of type `Object[]`, which will be
 the final parameter.
 

 Before invoking its target, the invoker will spread the final array, apply
 reference casts as necessary, and unbox and widen primitive arguments.
 If, when the invoker is called, the supplied array argument does
 not have the correct number of elements, the invoker will throw
 an `IllegalArgumentException` instead of invoking the target.
 

 This method is equivalent to the following code (though it may be more efficient):
 {@snippet lang="java" :
MethodHandle invoker = MethodHandles.invoker(type);
int spreadArgCount = type.parameterCount() - leadingArgCount;
invoker = invoker.asSpreader(Object[].class, spreadArgCount);
return invoker;
 }
 This method throws no reflective exceptions.

**参数**

- **type** — the desired target type
- **leadingArgCount** — number of fixed arguments, to be passed unchanged to the target

**返回**

- a method handle suitable for invoking any method handle of the given type

**异常**

- **NullPointerException** — if `type` is null
- **IllegalArgumentException** — if `leadingArgCount` is not in the range from 0 to `type.parameterCount()` inclusive, or if the resulting method handle's type would have too many parameters
