---
id: "java-en-function-methodhandles-permutearguments"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.permuteArguments"
signature: "public static MethodHandle permuteArguments(MethodHandle target, MethodType newType, int... reorder)"
title: "MethodHandles.permuteArguments"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.permuteArguments

```java
public static MethodHandle permuteArguments(MethodHandle target, MethodType newType, int... reorder)
```

Produces a method handle which adapts the calling sequence of the
 given method handle to a new type, by reordering the arguments.
 The resulting method handle is guaranteed to report a type
 which is equal to the desired new type.
 

 The given array controls the reordering.
 Call `#I` the number of incoming parameters (the value
 `newType.parameterCount()`, and call `#O` the number
 of outgoing parameters (the value `target.type().parameterCount()`).
 Then the length of the reordering array must be `#O`,
 and each element must be a non-negative number less than `#I`.
 For every `N` less than `#O`, the `N`-th
 outgoing argument will be taken from the `I`-th incoming
 argument, where `I` is `reorder[N]`.
 

 No argument or return value conversions are applied.
 The type of each incoming argument, as determined by `newType`,
 must be identical to the type of the corresponding outgoing parameter
 or parameters in the target method handle.
 The return type of `newType` must be identical to the return
 type of the original target.
 

 The reordering array need not specify an actual permutation.
 An incoming argument will be duplicated if its index appears
 more than once in the array, and an incoming argument will be dropped
 if its index does not appear in the array.
 As in the case of `dropArguments(MethodHandle,int,List) dropArguments`,
 incoming arguments which are not mentioned in the reordering array
 may be of any type, as determined only by `newType`.
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodType intfn1 = methodType(int.class, int.class);
MethodType intfn2 = methodType(int.class, int.class, int.class);
MethodHandle sub = ... (int x, int y) -> (x-y) ...;
assert(sub.type().equals(intfn2));
MethodHandle sub1 = permuteArguments(sub, intfn2, 0, 1);
MethodHandle rsub = permuteArguments(sub, intfn2, 1, 0);
assert((int)rsub.invokeExact(1, 100) == 99);
MethodHandle add = ... (int x, int y) -> (x+y) ...;
assert(add.type().equals(intfn2));
MethodHandle twice = permuteArguments(add, intfn1, 0, 0);
assert(twice.type().equals(intfn1));
assert((int)twice.invokeExact(21) == 42);
 }
 

 Note: The resulting adapter is never a `asVarargsCollector
 variable-arity method handle`, even if the original target method handle was.

**参数**

- **target** — the method handle to invoke after arguments are reordered
- **newType** — the expected type of the new method handle
- **reorder** — an index array which controls the reordering

**返回**

- a method handle which delegates to the target after it drops unused arguments and moves and/or duplicates the other arguments

**异常**

- **NullPointerException** — if any argument is null
- **IllegalArgumentException** — if the index array length is not equal to the arity of the target, or if any index array element not a valid index for a parameter of `newType`, or if two corresponding parameter types in `target.type()` and `newType` are not identical,
