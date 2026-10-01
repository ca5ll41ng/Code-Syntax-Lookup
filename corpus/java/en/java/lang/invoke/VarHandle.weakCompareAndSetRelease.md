---
id: "java-en-function-varhandle-weakcompareandsetrelease"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.weakCompareAndSetRelease"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate boolean weakCompareAndSetRelease(Object... args)"
title: "VarHandle.weakCompareAndSetRelease"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.weakCompareAndSetRelease

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate boolean weakCompareAndSetRelease(Object... args)
```

Possibly atomically sets the value of a variable to the `newValue`
 with the semantics of `setRelease` if the variable's current
 value, referred to as the witness value, `==` the
 `expectedValue`, as accessed with the memory semantics of
 `get`.

 

This operation may fail spuriously (typically, due to memory
 contention) even if the witness value does match the expected value.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)boolean`.

 

The symbolic type descriptor at the call site of `weakCompareAndSetRelease`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.WEAK_COMPARE_AND_SET_RELEASE)`
 on this VarHandle.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn ctn, T expectedValue, T newValue)` , statically represented using varargs.

**返回**

- `true` if successful, otherwise `false` if the witness value was not the same as the `expectedValue` or if this operation spuriously failed.

**异常**

- **UnsupportedOperationException** — if the access mode is unsupported for this VarHandle.
- **WrongMethodTypeException** — if the access mode type does not match the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type matches the caller's symbolic type descriptor, but a reference cast fails.

**参见**

- #setRelease(Object...)
- #get(Object...)
