---
id: "java-en-function-varhandle-get"
language: "java"
lang: "en"
category: "function"
name: "VarHandle.get"
signature: "public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object get(Object... args)"
title: "VarHandle.get"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VarHandle.get

```java
public final native @MethodHandle.PolymorphicSignature @IntrinsicCandidate Object get(Object... args)
```

Returns the value of a variable, with memory semantics of reading as
 if the variable was declared non-`volatile`.  Commonly referred to
 as plain read access.

 

The method signature is of the form `(CT1 ct1, ..., CTn ctn)T`.

 

The symbolic type descriptor at the call site of `get`
 must match the access mode type that is the result of calling
 `accessModeType(VarHandle.AccessMode.GET)` on this VarHandle.

 

This access mode is supported by all VarHandle instances and never
 throws `UnsupportedOperationException`.

**参数**

- **args** — the signature-polymorphic parameter list of the form `(CT1 ct1, ..., CTn)` , statically represented using varargs.

**返回**

- the signature-polymorphic result that is the value of the variable , statically represented using `Object`.

**异常**

- **WrongMethodTypeException** — if the access mode type does not match the caller's symbolic type descriptor.
- **ClassCastException** — if the access mode type matches the caller's symbolic type descriptor, but a reference cast fails.
