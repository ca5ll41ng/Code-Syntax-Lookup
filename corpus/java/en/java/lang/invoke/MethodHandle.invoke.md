---
id: "java-en-function-methodhandle-invoke"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.invoke"
signature: "public final native @PolymorphicSignature Object invoke(Object... args) throws Throwable"
title: "MethodHandle.invoke"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.invoke

```java
public final native @PolymorphicSignature Object invoke(Object... args) throws Throwable
```

Invokes the method handle, allowing any caller type descriptor,
 and optionally performing conversions on arguments and return values.
 

 If the call site's symbolic type descriptor exactly matches this method handle's `type() type`,
 the call proceeds as if by `invokeExact invokeExact`.
 

 Otherwise, the call proceeds as if this method handle were first
 adjusted by calling `asType asType` to adjust this method handle
 to the required type, and then the call proceeds as if by
 `invokeExact invokeExact` on the adjusted method handle.
 

 There is no guarantee that the `asType` call is actually made.
 If the JVM can predict the results of making the call, it may perform
 adaptations directly on the caller's arguments,
 and call the target method handle according to its own exact type.
 

 The resolved type descriptor at the call site of `invoke` must
 be a valid argument to the receivers `asType` method.
 In particular, the caller must specify the same argument arity
 as the callee's type,
 if the callee is not a `asVarargsCollector variable arity collector`.
 

 When this method is observed via the Core Reflection API,
 it will appear as a single native method, taking an object array and returning an object.
 If this native method is invoked directly via
 `invoke java.lang.reflect.Method.invoke`, via JNI,
 or indirectly via `unreflect Lookup.unreflect`,
 it will throw an `UnsupportedOperationException`.

**参数**

- **args** — the signature-polymorphic parameter list, statically represented using varargs

**返回**

- the signature-polymorphic result, statically represented using `Object`

**异常**

- **WrongMethodTypeException** — if the target's type cannot be adjusted to the caller's symbolic type descriptor
- **ClassCastException** — if the target's type can be adjusted to the caller, but a reference cast fails
- **Throwable** — anything thrown by the underlying method propagates unchanged through the method handle call
