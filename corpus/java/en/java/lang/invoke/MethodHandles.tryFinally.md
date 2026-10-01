---
id: "java-en-function-methodhandles-tryfinally"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.tryFinally"
signature: "public static MethodHandle tryFinally(MethodHandle target, MethodHandle cleanup)"
title: "MethodHandles.tryFinally"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.tryFinally

```java
public static MethodHandle tryFinally(MethodHandle target, MethodHandle cleanup)
```

Makes a method handle that adapts a `target` method handle by wrapping it in a `try-finally` block.
 Another method handle, `cleanup`, represents the functionality of the `finally` block. Any exception
 thrown during the execution of the `target` handle will be passed to the `cleanup` handle. The
 exception will be rethrown, unless `cleanup` handle throws an exception first.  The
 value returned from the `cleanup` handle's execution will be the result of the execution of the
 `try-finally` handle.
 

 The `cleanup` handle will be passed one or two additional leading arguments.
 The first is the exception thrown during the
 execution of the `target` handle, or `null` if no exception was thrown.
 The second is the result of the execution of the `target` handle, or, if it throws an exception,
 a `null`, zero, or `false` value of the required type is supplied as a placeholder.
 The second argument is not present if the `target` handle has a `void` return type.
 (Note that, except for argument type conversions, combinators represent `void` values in parameter lists
 by omitting the corresponding paradoxical arguments, not by inserting `null` or zero values.)
 

 The `target` and `cleanup` handles must have the same corresponding argument and return types, except
 that the `cleanup` handle may omit trailing arguments. Also, the `cleanup` handle must have one or
 two extra leading parameters:
 
- a `Throwable`, which will carry the exception thrown by the `target` handle (if any); and
 
- a parameter of the same type as the return type of both `target` and `cleanup`, which will carry
 the result from the execution of the `target` handle.
 This parameter is not present if the `target` returns `void`.
 

 

 The pseudocode for the resulting adapter looks as follows. In the code, `V` represents the result type of
 the `try/finally` construct; `A`/`a`, the types and values of arguments to the resulting
 handle consumed by the cleanup; and `B`/`b`, those of arguments to the resulting handle discarded by
 the cleanup.
 {@snippet lang="java" :
 V target(A..., B...);
 V cleanup(Throwable, V, A...);
 V adapter(A... a, B... b) {
   V result = (zero value for V);
   Throwable throwable = null;
   try {
     result = target(a..., b...);
   } catch (Throwable t) {
     throwable = t;
     throw t;
   } finally {
     result = cleanup(throwable, result, a...);
   }
   return result;
 }
 }
 

 Note that the saved arguments (`a...` in the pseudocode) cannot
 be modified by execution of the target, and so are passed unchanged
 from the caller to the cleanup, if it is invoked.
 

 The target and cleanup must return the same type, even if the cleanup
 always throws.
 To create such a throwing cleanup, compose the cleanup logic
 with `throwException throwException`,
 in order to create a method handle of the correct return type.
 

 Note that `tryFinally` never converts exceptions into normal returns.
 In rare cases where exceptions must be converted in that way, first wrap
 the target with `catchException`
 to capture an outgoing exception, and then wrap with `tryFinally`.
 

 It is recommended that the first parameter type of `cleanup` be
 declared `Throwable` rather than a narrower subtype.  This ensures
 `cleanup` will always be invoked with whatever exception that
 `target` throws.  Declaring a narrower type may result in a
 `ClassCastException` being thrown by the `try-finally`
 handle if the type of the exception thrown by `target` is not
 assignable to the first parameter type of `cleanup`.  Note that
 various exception types of `VirtualMachineError`,
 `LinkageError`, and `RuntimeException` can in principle be
 thrown by almost any kind of Java code, and a finally clause that
 catches (say) only `IOException` would mask any of the others
 behind a `ClassCastException`.

**参数**

- **target** — the handle whose execution is to be wrapped in a `try` block.
- **cleanup** — the handle that is invoked in the finally block.

**返回**

- a method handle embodying the `try-finally` block composed of the two arguments.

**异常**

- **NullPointerException** — if any argument is null
- **IllegalArgumentException** — if `cleanup` does not accept the required leading arguments, or if the method handle types do not match in their return types and their corresponding trailing parameters

**参见**

- MethodHandles#catchException(MethodHandle, Class, MethodHandle)

> *Since 9*
