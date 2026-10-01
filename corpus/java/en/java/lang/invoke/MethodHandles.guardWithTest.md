---
id: "java-en-function-methodhandles-guardwithtest"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.guardWithTest"
signature: "public static MethodHandle guardWithTest(MethodHandle test, MethodHandle target, MethodHandle fallback)"
title: "MethodHandles.guardWithTest"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.guardWithTest

```java
public static MethodHandle guardWithTest(MethodHandle test, MethodHandle target, MethodHandle fallback)
```

Makes a method handle which adapts a target method handle,
 by guarding it with a test, a boolean-valued method handle.
 If the guard fails, a fallback handle is called instead.
 All three method handles must have the same corresponding
 argument and return types, except that the return type
 of the test must be boolean, and the test is allowed
 to have fewer arguments than the other two method handles.
 

 Here is pseudocode for the resulting adapter. In the code, `T`
 represents the uniform result type of the three involved handles;
 `A`/`a`, the types and values of the `target`
 parameters and arguments that are consumed by the `test`; and
 `B`/`b`, those types and values of the `target`
 parameters and arguments that are not consumed by the `test`.
 {@snippet lang="java" :
 boolean test(A...);
 T target(A...,B...);
 T fallback(A...,B...);
 T adapter(A... a,B... b) {
   if (test(a...))
     return target(a..., b...);
   else
     return fallback(a..., b...);
 }
 }
 Note that the test arguments (`a...` in the pseudocode) cannot
 be modified by execution of the test, and so are passed unchanged
 from the caller to the target or fallback as appropriate.

**参数**

- **test** — method handle used for test, must return boolean
- **target** — method handle to call if test passes
- **fallback** — method handle to call if test fails

**返回**

- method handle which incorporates the specified if/then/else logic

**异常**

- **NullPointerException** — if any argument is null
- **IllegalArgumentException** — if `test` does not return boolean, or if all three method types do not match (with the return type of `test` changed to match that of the target).
