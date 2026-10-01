---
id: "java-en-function-methodhandles-insertarguments"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.insertArguments"
signature: "public static MethodHandle insertArguments(MethodHandle target, int pos, Object... values)"
title: "MethodHandles.insertArguments"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.insertArguments

```java
public static MethodHandle insertArguments(MethodHandle target, int pos, Object... values)
```

Provides a target method handle with one or more bound arguments
 in advance of the method handle's invocation.
 The formal parameters to the target corresponding to the bound
 arguments are called bound parameters.
 Returns a new method handle which saves away the bound arguments.
 When it is invoked, it receives arguments for any non-bound parameters,
 binds the saved arguments to their corresponding parameters,
 and calls the original target.
 

 The type of the new method handle will drop the types for the bound
 parameters from the original target type, since the new method handle
 will no longer require those arguments to be supplied by its callers.
 

 Each given argument object must match the corresponding bound parameter type.
 If a bound parameter type is a primitive, the argument object
 must be a wrapper, and will be unboxed to produce the primitive value.
 

 The `pos` argument selects which parameters are to be bound.
 It may range between zero and N-L (inclusively),
 where N is the arity of the target method handle
 and L is the length of the values array.
 

 Note: The resulting adapter is never a `asVarargsCollector
 variable-arity method handle`, even if the original target method handle was.

**参数**

- **target** — the method handle to invoke after the argument is inserted
- **pos** — where to insert the argument (zero for the first)
- **values** — the series of arguments to insert

**返回**

- a method handle which inserts an additional argument, before calling the original method handle

**异常**

- **NullPointerException** — if the target or the `values` array is null
- **IllegalArgumentException** — if `pos` is less than `0` or greater than `N - L` where `N` is the arity of the target method handle and `L` is the length of the values array.
- **ClassCastException** — if an argument does not match the corresponding bound parameter type.

**参见**

- MethodHandle#bindTo
