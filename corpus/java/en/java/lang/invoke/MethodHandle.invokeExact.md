---
id: "java-en-function-methodhandle-invokeexact"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.invokeExact"
signature: "public final native @PolymorphicSignature Object invokeExact(Object... args) throws Throwable"
title: "MethodHandle.invokeExact"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.invokeExact

```java
public final native @PolymorphicSignature Object invokeExact(Object... args) throws Throwable
```

Invokes the method handle, allowing any caller type descriptor, but requiring an exact type match.
 The symbolic type descriptor at the call site of `invokeExact` must
 exactly match this method handle's `type() type`.
 No conversions are allowed on arguments or return values.
 

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

- **WrongMethodTypeException** — if the target's type is not identical with the caller's symbolic type descriptor
- **Throwable** — anything thrown by the underlying method propagates unchanged through the method handle call
