---
id: "java-en-function-methodhandles-foldarguments"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.foldArguments"
signature: "public static MethodHandle foldArguments(MethodHandle target, MethodHandle combiner)"
title: "MethodHandles.foldArguments"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.foldArguments

```java
public static MethodHandle foldArguments(MethodHandle target, MethodHandle combiner)
```

Adapts a target method handle by pre-processing
 some of its arguments, and then calling the target with
 the result of the pre-processing, inserted into the original
 sequence of arguments.
 

 The pre-processing is performed by `combiner`, a second method handle.
 Of the arguments passed to the adapter, the first `N` arguments
 are copied to the combiner, which is then called.
 (Here, `N` is defined as the parameter count of the combiner.)
 After this, control passes to the target, with any result
 from the combiner inserted before the original `N` incoming
 arguments.
 

 If the combiner returns a value, the first parameter type of the target
 must be identical with the return type of the combiner, and the next
 `N` parameter types of the target must exactly match the parameters
 of the combiner.
 

 If the combiner has a void return, no result will be inserted,
 and the first `N` parameter types of the target
 must exactly match the parameters of the combiner.
 

 The resulting adapter is the same type as the target, except that the
 first parameter type is dropped,
 if it corresponds to the result of the combiner.
 

 (Note that `dropArguments(MethodHandle,int,List) dropArguments` can be used to remove any arguments
 that either the combiner or the target does not wish to receive.
 If some of the incoming arguments are destined only for the combiner,
 consider using `asCollector asCollector` instead, since those
 arguments will not need to be live on the stack on entry to the
 target.)
 

**Example:**
 {@snippet lang="java" :
import static java.lang.invoke.MethodHandles.*;
import static java.lang.invoke.MethodType.*;
...
MethodHandle trace = publicLookup().findVirtual(java.io.PrintStream.class,
  "println", methodType(void.class, String.class))
    .bindTo(System.out);
MethodHandle cat = lookup().findVirtual(String.class,
  "concat", methodType(String.class, String.class));
assertEquals("boojum", (String) cat.invokeExact("boo", "jum"));
MethodHandle catTrace = foldArguments(cat, trace);
// also prints "boo":
assertEquals("boojum", (String) catTrace.invokeExact("boo", "jum"));
 }
 

Here is pseudocode for the resulting adapter. In the code, `T`
 represents the result type of the `target` and resulting adapter.
 `V`/`v` represent the type and value of the parameter and argument
 of `target` that precedes the folding position; `V` also is
 the result type of the `combiner`. `A`/`a` denote the
 types and values of the `N` parameters and arguments at the folding
 position. `B`/`b` represent the types and values of the
 `target` parameters and arguments that follow the folded parameters
 and arguments.
 {@snippet lang="java" :
 // there are N arguments in A...
 T target(V, A[N]..., B...);
 V combiner(A...);
 T adapter(A... a, B... b) {
   V v = combiner(a...);
   return target(v, a..., b...);
 }
 // and if the combiner has a void return:
 T target2(A[N]..., B...);
 void combiner2(A...);
 T adapter2(A... a, B... b) {
   combiner2(a...);
   return target2(a..., b...);
 }
 }
 

 Note: The resulting adapter is never a `asVarargsCollector
 variable-arity method handle`, even if the original target method handle was.

**参数**

- **target** — the method handle to invoke after arguments are combined
- **combiner** — method handle to call initially on the incoming arguments

**返回**

- method handle which incorporates the specified argument folding logic

**异常**

- **NullPointerException** — if either argument is null
- **IllegalArgumentException** — if `combiner`'s return type is non-void and not the same as the first argument type of the target, or if the initial `N` argument types of the target (skipping one matching the `combiner`'s return type) are not identical with the argument types of `combiner`
