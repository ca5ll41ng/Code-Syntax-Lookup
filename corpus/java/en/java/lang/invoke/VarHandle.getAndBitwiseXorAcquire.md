---
id: "java-en-function-varhandle-getandbitwisexoracquire"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.getAndBitwiseXorAcquire"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object getAndBitwiseXorAcquire(Object... args)"
title: "VarHandle.getAndBitwiseXorAcquire"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.getAndBitwiseXorAcquire

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object getAndBitwiseXorAcquire(Object... args)
```

Atomically sets the value of a variable to the result of
 bitwise XOR between the variable's current value and the `mask`
 with the memory semantics of `set` and returns the
 variable's previous value, as accessed with the memory semantics of
 `getAcquire`.

 

If the variable type is the non-integral `boolean` type then a
 logical XOR is performed instead of a bitwise XOR.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn, T mask)T`.

 

The symbolic type descriptor at the call site of `getAndBitwiseXorAcquire`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.GET_AND_BITWISE_XOR_ACQUIRE)` on this
 VarHandle.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn ctn, T mask)` , statically represented using varargs.

**返回**

- the signature-polymorphic result that is the previous value of the variable , statically represented using `Object`.

**异常**

- **UnsupportedOperationException** — if the access mode is unsupported for this VarHandle.
- **WrongMethodTypeException** — if the access mode type does not match the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type matches the caller's symbolic type descriptor, but a reference cast fails.

**参见**

- #set(Object...)
- #getAcquire(Object...)
