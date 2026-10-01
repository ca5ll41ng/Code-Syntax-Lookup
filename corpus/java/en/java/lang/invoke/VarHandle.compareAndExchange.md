---
id: "java-en-function-varhandle-compareandexchange"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.compareAndExchange"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object compareAndExchange(Object... args)"
title: "VarHandle.compareAndExchange"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.compareAndExchange

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object compareAndExchange(Object... args)
```

Atomically sets the value of a variable to the `newValue` with the
 memory semantics of `setVolatile` if the variable's current value,
 referred to as the witness value, `==` the
 `expectedValue`, as accessed with the memory semantics of
 `getVolatile`.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)T`.

 

The symbolic type descriptor at the call site of `compareAndExchange`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.COMPARE_AND_EXCHANGE)`
 on this VarHandle.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)` , statically represented using varargs.

**返回**

- the signature-polymorphic result that is the witness value, which will be the same as the `expectedValue` if successful , statically represented using `Object`.

**异常**

- **UnsupportedOperationException** — if the access mode is unsupported for this VarHandle.
- **WrongMethodTypeException** — if the access mode type is not compatible with the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type is compatible with the caller's symbolic type descriptor, but a reference cast fails.

**参见**

- #setVolatile(Object...)
- #getVolatile(Object...)
