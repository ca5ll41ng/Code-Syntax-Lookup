---
id: "java-en-function-methodhandles-filterreturnvalue"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.filterReturnValue"
signature: "public static MethodHandle filterReturnValue(MethodHandle target, MethodHandle filter)"
title: "MethodHandles.filterReturnValue"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.filterReturnValue

```java
public static MethodHandle filterReturnValue(MethodHandle target, MethodHandle filter)
```

Adapts a target method handle by post-processing
 its return value (if any) with a filter (another method handle).
 The result of the filter is returned from the adapter.
 

 If the target returns a value, the filter must accept that value as
 its only argument.
 If the target returns void, the filter must accept no arguments.
 

 The return type of the filter
 replaces the return type of the target
 in the resulting adapted method handle.
 The argument type of the filter (if any) must be identical to the
 return type of the target.
 

**Example:**
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
MethodHandle length = lookup().findVirtual(String.class,
  "length", methodType(int.class));
System.out.println((String) cat.invokeExact("x", "y")); // xy
MethodHandle f0 = filterReturnValue(cat, length);
System.out.println((int) f0.invokeExact("x", "y")); // 2
 }
 

Here is pseudocode for the resulting adapter. In the code,
 `T`/`t` represent the result type and value of the
 `target`; `V`, the result type of the `filter`; and
 `A`/`a`, the types and values of the parameters and arguments
 of the `target` as well as the resulting adapter.
 {@snippet lang="java" :
 T target(A...);
 V filter(T);
 V adapter(A... a) {
   T t = target(a...);
   return filter(t);
 }
 // and if the target has a void return:
 void target2(A...);
 V filter2();
 V adapter2(A... a) {
   target2(a...);
   return filter2();
 }
 // and if the filter has a void return:
 T target3(A...);
 void filter3(V);
 void adapter3(A... a) {
   T t = target3(a...);
   filter3(t);
 }
 }
 

 Note: The resulting adapter is never a `asVarargsCollector
 variable-arity method handle`, even if the original target method handle was.

**参数**

- **target** — the method handle to invoke before filtering the return value
- **filter** — method handle to call on the return value

**返回**

- method handle which incorporates the specified return value filtering logic

**异常**

- **NullPointerException** — if either argument is null
- **IllegalArgumentException** — if the argument list of `filter` does not match the return type of target as described above
