---
id: "java-en-function-methodhandle-bindto"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.bindTo"
signature: "public MethodHandle bindTo(Object x)"
title: "MethodHandle.bindTo"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.bindTo

```java
public MethodHandle bindTo(Object x)
```

Binds a value `x` to the first argument of a method handle, without invoking it.
 The new method handle adapts, as its target,
 the current method handle by binding it to the given argument.
 The type of the bound handle will be
 the same as the type of the target, except that a single leading
 reference parameter will be omitted.
 

 When called, the bound handle inserts the given value `x`
 as a new leading argument to the target.  The other arguments are
 also passed unchanged.
 What the target eventually returns is returned unchanged by the bound handle.
 

 The reference `x` must be convertible to the first parameter
 type of the target.
 

 Note:  Because method handles are immutable, the target method handle
 retains its original type and behavior.
 

 Note: The resulting adapter is never a `asVarargsCollector
 variable-arity method handle`, even if the original target method handle was.

**参数**

- **x** — the value to bind to the first argument of the target

**返回**

- a new method handle which prepends the given value to the incoming argument list, before calling the original method handle

**异常**

- **IllegalArgumentException** — if the target does not have a leading parameter type that is a reference type
- **ClassCastException** — if `x` cannot be converted to the leading parameter type of the target

**参见**

- MethodHandles#insertArguments
