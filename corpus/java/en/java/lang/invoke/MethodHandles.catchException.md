---
id: "java-en-function-methodhandles-catchexception"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.catchException"
signature: "public static MethodHandle catchException(MethodHandle target, Class<? extends Throwable> exType, MethodHandle handler)"
title: "MethodHandles.catchException"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.catchException

```java
public static MethodHandle catchException(MethodHandle target, Class<? extends Throwable> exType, MethodHandle handler)
```

Makes a method handle which adapts a target method handle,
 by running it inside an exception handler.
 If the target returns normally, the adapter returns that value.
 If an exception matching the specified type is thrown, the fallback
 handle is called instead on the exception, plus the original arguments.
 

 The target and handler must have the same corresponding
 argument and return types, except that handler may omit trailing arguments
 (similarly to the predicate in `guardWithTest guardWithTest`).
 Also, the handler must have an extra leading parameter of `exType` or a supertype.
 

 Here is pseudocode for the resulting adapter. In the code, `T`
 represents the return type of the `target` and `handler`,
 and correspondingly that of the resulting adapter; `A`/`a`,
 the types and values of arguments to the resulting handle consumed by
 `handler`; and `B`/`b`, those of arguments to the
 resulting handle discarded by `handler`.
 {@snippet lang="java" :
 T target(A..., B...);
 T handler(ExType, A...);
 T adapter(A... a, B... b) {
   try {
     return target(a..., b...);
   } catch (ExType ex) {
     return handler(ex, a...);
   }
 }
 }
 Note that the saved arguments (`a...` in the pseudocode) cannot
 be modified by execution of the target, and so are passed unchanged
 from the caller to the handler, if the handler is invoked.
 

 The target and handler must return the same type, even if the handler
 always throws.  (This might happen, for instance, because the handler
 is simulating a `finally` clause).
 To create such a throwing handler, compose the handler creation logic
 with `throwException throwException`,
 in order to create a method handle of the correct return type.

**参数**

- **target** — method handle to call
- **exType** — the type of exception which the handler will catch
- **handler** — method handle to call if a matching exception is thrown

**返回**

- method handle which incorporates the specified try/catch logic

**异常**

- **NullPointerException** — if any argument is null
- **IllegalArgumentException** — if `handler` does not accept the given exception type, or if the method handle types do not match in their return types and their corresponding parameters

**参见**

- MethodHandles#tryFinally(MethodHandle, MethodHandle)
