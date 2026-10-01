---
id: "java-en-function-methodhandles-filterarguments"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.filterArguments"
signature: "public static MethodHandle filterArguments(MethodHandle target, int pos, MethodHandle... filters)"
title: "MethodHandles.filterArguments"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.filterArguments

```java
public static MethodHandle filterArguments(MethodHandle target, int pos, MethodHandle... filters)
```

Adapts a target method handle by pre-processing
 one or more of its arguments, each with its own unary filter function,
 and then calling the target with each pre-processed argument
 replaced by the result of its corresponding filter function.
 

 The pre-processing is performed by one or more method handles,
 specified in the elements of the `filters` array.
 The first element of the filter array corresponds to the `pos`
 argument of the target, and so on in sequence.
 The filter functions are invoked in left to right order.
 

 Null arguments in the array are treated as identity functions,
 and the corresponding arguments left unchanged.
 (If there are no non-null elements in the array, the original target is returned.)
 Each filter is applied to the corresponding argument of the adapter.
 

 If a filter `F` applies to the `N`th argument of
 the target, then `F` must be a method handle which
 takes exactly one argument.  The type of `F`'s sole argument
 replaces the corresponding argument type of the target
 in the resulting adapted method handle.
 The return type of `F` must be identical to the corresponding
 parameter type of the target.
 

 It is an error if there are elements of `filters`
 (null or not)
 which do not correspond to argument positions in the target.
 

**Example:**
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
MethodHandle upcase = lookup().findVirtual(String.class,
  "toUpperCase", methodType(String.class));
assertEquals("xy", (String) cat.invokeExact("x", "y"));
MethodHandle f0 = filterArguments(cat, 0, upcase);
assertEquals("Xy", (String) f0.invokeExact("x", "y")); // Xy
MethodHandle f1 = filterArguments(cat, 1, upcase);
assertEquals("xY", (String) f1.invokeExact("x", "y")); // xY
MethodHandle f2 = filterArguments(cat, 0, upcase, upcase);
assertEquals("XY", (String) f2.invokeExact("x", "y")); // XY
 }
 

Here is pseudocode for the resulting adapter. In the code, `T`
 denotes the return type of both the `target` and resulting adapter.
 `P`/`p` and `B`/`b` represent the types and values
 of the parameters and arguments that precede and follow the filter position
 `pos`, respectively. `A[i]`/`a[i]` stand for the types and
 values of the filtered parameters and arguments; they also represent the
 return types of the `filter[i]` handles. The latter accept arguments
 `v[i]` of type `V[i]`, which also appear in the signature of
 the resulting adapter.
 {@snippet lang="java" :
 T target(P... p, A[i]... a[i], B... b);
 A[i] filter[i](V[i]);
 T adapter(P... p, V[i]... v[i], B... b) {
   return target(p..., filter[i](v[i])..., b...);
 }
 }
 

 Note: The resulting adapter is never a `asVarargsCollector
 variable-arity method handle`, even if the original target method handle was.

**参数**

- **target** — the method handle to invoke after arguments are filtered
- **pos** — the position of the first argument to filter
- **filters** — method handles to call initially on filtered arguments

**返回**

- method handle which incorporates the specified argument filtering logic

**异常**

- **NullPointerException** — if the target is null or if the `filters` array is null
- **IllegalArgumentException** — if a non-null element of `filters` does not match a corresponding argument type of target as described above, or if the `pos+filters.length` is greater than `target.type().parameterCount()`, or if the resulting method handle's type would have too many parameters
