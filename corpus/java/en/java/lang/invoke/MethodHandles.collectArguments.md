---
id: "java-en-function-methodhandles-collectarguments"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.collectArguments"
signature: "public static MethodHandle collectArguments(MethodHandle target, int pos, MethodHandle filter)"
title: "MethodHandles.collectArguments"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.collectArguments

```java
public static MethodHandle collectArguments(MethodHandle target, int pos, MethodHandle filter)
```

Adapts a target method handle by pre-processing
 a sub-sequence of its arguments with a filter (another method handle).
 The pre-processed arguments are replaced by the result (if any) of the
 filter function.
 The target is then called on the modified (usually shortened) argument list.
 

 If the filter returns a value, the target must accept that value as
 its argument in position `pos`, preceded and/or followed by
 any arguments not passed to the filter.
 If the filter returns void, the target must accept all arguments
 not passed to the filter.
 No arguments are reordered, and a result returned from the filter
 replaces (in order) the whole subsequence of arguments originally
 passed to the adapter.
 

 The argument types (if any) of the filter
 replace zero or one argument types of the target, at position `pos`,
 in the resulting adapted method handle.
 The return type of the filter (if any) must be identical to the
 argument type of the target at position `pos`, and that target argument
 is supplied by the return value of the filter.
 

 In all cases, `pos` must be greater than or equal to zero, and
 `pos` must also be less than or equal to the target's arity.
 

**Example:**
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle deepToString = publicLookup()
  .findStatic(Arrays.class, "deepToString", methodType(String.class, Object[].class));
MethodHandle ts1 = deepToString.asCollector(String[].class, 1);
assertEquals("[strange]", (String) ts1.invokeExact("strange"));
MethodHandle ts2 = deepToString.asCollector(String[].class, 2);
assertEquals("[up, down]", (String) ts2.invokeExact("up", "down"));
MethodHandle ts3 = deepToString.asCollector(String[].class, 3);
MethodHandle ts3_ts2 = collectArguments(ts3, 1, ts2);
assertEquals("[top, [up, down], strange]",
             (String) ts3_ts2.invokeExact("top", "up", "down", "strange"));
MethodHandle ts3_ts2_ts1 = collectArguments(ts3_ts2, 3, ts1);
assertEquals("[top, [up, down], [strange]]",
             (String) ts3_ts2_ts1.invokeExact("top", "up", "down", "strange"));
MethodHandle ts3_ts2_ts3 = collectArguments(ts3_ts2, 1, ts3);
assertEquals("[top, [[up, down, strange], charm], bottom]",
             (String) ts3_ts2_ts3.invokeExact("top", "up", "down", "strange", "charm", "bottom"));
 }
 

Here is pseudocode for the resulting adapter. In the code, `T`
 represents the return type of the `target` and resulting adapter.
 `V`/`v` stand for the return type and value of the
 `filter`, which are also found in the signature and arguments of
 the `target`, respectively, unless `V` is `void`.
 `A`/`a` and `C`/`c` represent the parameter types
 and values preceding and following the collection position, `pos`,
 in the `target`'s signature. They also turn up in the resulting
 adapter's signature and arguments, where they surround
 `B`/`b`, which represent the parameter types and arguments
 to the `filter` (if any).
 {@snippet lang="java" :
 T target(A...,V,C...);
 V filter(B...);
 T adapter(A... a,B... b,C... c) {
   V v = filter(b...);
   return target(a...,v,c...);
 }
 // and if the filter has no arguments:
 T target2(A...,V,C...);
 V filter2();
 T adapter2(A... a,C... c) {
   V v = filter2();
   return target2(a...,v,c...);
 }
 // and if the filter has a void return:
 T target3(A...,C...);
 void filter3(B...);
 T adapter3(A... a,B... b,C... c) {
   filter3(b...);
   return target3(a...,c...);
 }
 }
 

 A collection adapter `collectArguments(mh, 0, coll)` is equivalent to
 one which first "folds" the affected arguments, and then drops them, in separate
 steps as follows:
 {@snippet lang="java" :
 mh = MethodHandles.dropArguments(mh, 1, coll.type().parameterList()); //step 2
 mh = MethodHandles.foldArguments(mh, coll); //step 1
 }
 If the target method handle consumes no arguments besides than the result
 (if any) of the filter `coll`, then `collectArguments(mh, 0, coll)`
 is equivalent to `filterReturnValue(coll, mh)`.
 If the filter method handle `coll` consumes one argument and produces
 a non-void result, then `collectArguments(mh, N, coll)`
 is equivalent to `filterArguments(mh, N, coll)`.
 Other equivalences are possible but would require argument permutation.
 

 Note: The resulting adapter is never a `asVarargsCollector
 variable-arity method handle`, even if the original target method handle was.

**参数**

- **target** — the method handle to invoke after filtering the subsequence of arguments
- **pos** — the position of the first adapter argument to pass to the filter, and/or the target argument which receives the result of the filter
- **filter** — method handle to call on the subsequence of arguments

**返回**

- method handle which incorporates the specified argument subsequence filtering logic

**异常**

- **NullPointerException** — if either argument is null
- **IllegalArgumentException** — if the return type of `filter` is non-void and is not the same as the `pos` argument of the target, or if `pos` is not between 0 and the target's arity, inclusive, or if the resulting method handle's type would have too many parameters

**参见**

- MethodHandles#foldArguments
- MethodHandles#filterArguments
- MethodHandles#filterReturnValue
