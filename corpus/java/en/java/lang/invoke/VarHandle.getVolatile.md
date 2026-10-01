---
id: "java-en-function-varhandle-getvolatile"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.getVolatile"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object getVolatile(Object... args)"
title: "VarHandle.getVolatile"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.getVolatile

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object getVolatile(Object... args)
```

Returns the value of a variable, with memory semantics of reading as if
 the variable was declared `volatile`.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn)T`.

 

The symbolic type descriptor at the call site of `getVolatile`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.GET_VOLATILE)` on this
 VarHandle.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn ctn)` , statically represented using varargs.

**返回**

- the signature-polymorphic result that is the value of the variable , statically represented using `Object`.

**异常**

- **UnsupportedOperationException** — if the access mode is unsupported for this VarHandle.
- **WrongMethodTypeException** — if the access mode type does not match the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type matches the caller's symbolic type descriptor, but a reference cast fails.
