---
id: "java-en-function-methodhandles-dropargumentstomatch"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.dropArgumentsToMatch"
signature: "public static MethodHandle dropArgumentsToMatch(MethodHandle target, int skip, List<Class<?>> newTypes, int pos)"
title: "MethodHandles.dropArgumentsToMatch"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.dropArgumentsToMatch

```java
public static MethodHandle dropArgumentsToMatch(MethodHandle target, int skip, List<Class<?>> newTypes, int pos)
```

Adapts a target method handle to match the given parameter type list. If necessary, adds dummy arguments. Some
 leading parameters can be skipped before matching begins. The remaining types in the `target`'s parameter
 type list must be a sub-list of the `newTypes` type list at the starting position `pos`. The
 resulting handle will have the target handle's parameter type list, with any non-matching parameter types (before
 or after the matching sub-list) inserted in corresponding positions of the target's original parameters, as if by
 `dropArguments`.
 

 The resulting handle will have the same return type as the target handle.
 

 In more formal terms, assume these two type lists:
 
- The target handle has the parameter type list `S..., M...`, with as many types in `S` as
 indicated by `skip`. The `M` types are those that are supposed to match part of the given type list,
 `newTypes`.
 
- The `newTypes` list contains types `P..., M..., A...`, with as many types in `P` as
 indicated by `pos`. The `M` types are precisely those that the `M` types in the target handle's
 parameter type list are supposed to match. The types in `A` are additional types found after the matching
 sub-list.
 

 Given these assumptions, the result of an invocation of `dropArgumentsToMatch` will have the parameter type
 list `S..., P..., M..., A...`, with the `P` and `A` types inserted as if by
 `dropArguments`.

 Two method handles whose argument lists are "effectively identical" (i.e., identical in a common prefix) may be
 mutually converted to a common type by two calls to `dropArgumentsToMatch`, as follows:
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
...
MethodHandle h0 = constant(boolean.class, true);
MethodHandle h1 = lookup().findVirtual(String.class, "concat", methodType(String.class, String.class));
MethodType bigType = h1.type().insertParameterTypes(1, String.class, int.class);
MethodHandle h2 = dropArguments(h1, 0, bigType.parameterList());
if (h1.type().parameterCount() < h2.type().parameterCount())
    h1 = dropArgumentsToMatch(h1, 0, h2.type().parameterList(), 0);  // lengthen h1
else
    h2 = dropArgumentsToMatch(h2, 0, h1.type().parameterList(), 0);    // lengthen h2
MethodHandle h3 = guardWithTest(h0, h1, h2);
assertEquals("xy", h3.invoke("x", "y", 1, "a", "b", "c"));
 }

**参数**

- **target** — the method handle to adapt
- **skip** — number of targets parameters to disregard (they will be unchanged)
- **newTypes** — the list of types to match `target`'s parameter type list to
- **pos** — place in `newTypes` where the non-skipped target parameters must occur

**返回**

- a possibly adapted method handle

**异常**

- **NullPointerException** — if either argument is null
- **IllegalArgumentException** — if any element of `newTypes` is `void.class`, or if `skip` is negative or greater than the arity of the target, or if `pos` is negative or greater than the newTypes list size, or if `newTypes` does not contain the `target`'s non-skipped parameter types at position `pos`.

> *Since 9*
