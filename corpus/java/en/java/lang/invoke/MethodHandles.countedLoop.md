---
id: "java-en-function-methodhandles-countedloop"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.countedLoop"
signature: "public static MethodHandle countedLoop(MethodHandle iterations, MethodHandle init, MethodHandle body)"
title: "MethodHandles.countedLoop"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.countedLoop

```java
public static MethodHandle countedLoop(MethodHandle iterations, MethodHandle init, MethodHandle body)
```

Constructs a loop that runs a given number of iterations.
 This is a convenience wrapper for the `loop(MethodHandle[][]) generic loop combinator`.
 

 The number of iterations is determined by the `iterations` handle evaluation result.
 The loop counter `i` is an extra loop iteration variable of type `int`.
 It will be initialized to 0 and incremented by 1 in each iteration.
 

 If the `body` handle returns a non-`void` type `V`, a leading loop iteration variable
 of that type is also present.  This variable is initialized using the optional `init` handle,
 or to the `empty default value` of type `V` if that handle is `null`.
 

 In each iteration, the iteration variables are passed to an invocation of the `body` handle.
 A non-`void` value returned from the body (of type `V`) updates the leading
 iteration variable.
 The result of the loop handle execution will be the final `V` value of that variable
 (or `void` if there is no `V` variable).
 

 The following rules hold for the argument handles:
 
- The `iterations` handle must not be `null`, and must return
 the type `int`, referred to here as `I` in parameter type lists.
 
- The `body` handle must not be `null`; its type must be of the form
 `(V I A...)V`, where `V` is non-`void`, or else `(I A...)void`.
 (In the `void` case, we assign the type `void` to the name `V`,
 and we will write `(V I A...)V` with the understanding that a `void` type `V`
 is quietly dropped from the parameter list, leaving `(I A...)V`.)
 
- The parameter list `(V I A...)` of the body contributes to a list
 of types called the internal parameter list.
 It will constrain the parameter lists of the other loop parts.
 
- As a special case, if the body contributes only `V` and `I` types,
 with no additional `A` types, then the internal parameter list is extended by
 the argument types `A...` of the `iterations` handle.
 
- If the iteration variable types `(V I)` are dropped from the internal parameter list, the resulting shorter
 list `(A...)` is called the external parameter list.
 
- The body return type `V`, if non-`void`, determines the type of an
 additional state variable of the loop.
 The body must both accept a leading parameter and return a value of this type `V`.
 
- If `init` is non-`null`, it must have return type `V`.
 Its parameter list (of some form `(A*)`) must be
 effectively identical
 to the external parameter list `(A...)`.
 
- If `init` is `null`, the loop variable will be initialized to its
 `empty default value`.
 
- The parameter list of `iterations` (of some form `(A*)`) must be
 effectively identical to the external parameter list `(A...)`.
 

 

 The resulting loop handle's result type and parameter signature are determined as follows:
 
- The loop handle's result type is the result type `V` of the body.
 
- The loop handle's parameter types are the types `(A...)`,
 from the external parameter list.
 

 

 Here is pseudocode for the resulting loop handle. In the code, `V`/`v` represent the type / value of
 the second loop variable as well as the result type of the loop; and `A...`/`a...` represent
 arguments passed to the loop.
 {@snippet lang="java" :
 int iterations(A...);
 V init(A...);
 V body(V, int, A...);
 V countedLoop(A... a...) {
   int end = iterations(a...);
   V v = init(a...);
   for (int i = 0; i < end; ++i) {
     v = body(v, i, a...);
   }
   return v;
 }
 }

 {@snippet lang="java" :
 // String s = "Lambdaman!"; for (int i = 0; i < 13; ++i) { s = "na " + s; } return s;
 // => a variation on a well known theme
 static String step(String v, int counter, String init) { return "na " + v; }
 // assume MH_step is a handle to the method above
 MethodHandle fit13 = MethodHandles.constant(int.class, 13);
 MethodHandle start = MethodHandles.identity(String.class);
 MethodHandle loop = MethodHandles.countedLoop(fit13, start, MH_step);
 assertEquals("na na na na na na na na na na na na na Lambdaman!", loop.invoke("Lambdaman!"));
 }

 and passing the number of iterations to the loop invocation:
 {@snippet lang="java" :
 // String s = "Lambdaman!"; for (int i = 0; i < 13; ++i) { s = "na " + s; } return s;
 // => a variation on a well known theme
 static String step(String v, int counter ) { return "na " + v; }
 // assume MH_step is a handle to the method above
 MethodHandle count = MethodHandles.dropArguments(MethodHandles.identity(int.class), 1, String.class);
 MethodHandle start = MethodHandles.dropArguments(MethodHandles.identity(String.class), 0, int.class);
 MethodHandle loop = MethodHandles.countedLoop(count, start, MH_step);  // (v, i) -> "na " + v
 assertEquals("na na na na na na na na na na na na na Lambdaman!", loop.invoke(13, "Lambdaman!"));
 }

 as loop parameters:
 {@snippet lang="java" :
 // String s = "Lambdaman!", t = "na"; for (int i = 0; i < 13; ++i) { s = t + " " + s; } return s;
 // => a variation on a well known theme
 static String step(String v, int counter, int iterations_, String pre, String start_) { return pre + " " + v; }
 // assume MH_step is a handle to the method above
 MethodHandle count = MethodHandles.identity(int.class);
 MethodHandle start = MethodHandles.dropArguments(MethodHandles.identity(String.class), 0, int.class, String.class);
 MethodHandle loop = MethodHandles.countedLoop(count, start, MH_step);  // (v, i, _, pre, _) -> pre + " " + v
 assertEquals("na na na na na na na na na na na na na Lambdaman!", loop.invoke(13, "na", "Lambdaman!"));
 }

 to enforce a loop type:
 {@snippet lang="java" :
 // String s = "Lambdaman!", t = "na"; for (int i = 0; i < 13; ++i) { s = t + " " + s; } return s;
 // => a variation on a well known theme
 static String step(String v, int counter, String pre) { return pre + " " + v; }
 // assume MH_step is a handle to the method above
 MethodType loopType = methodType(String.class, String.class, int.class, String.class);
 MethodHandle count = MethodHandles.dropArgumentsToMatch(MethodHandles.identity(int.class),    0, loopType.parameterList(), 1);
 MethodHandle start = MethodHandles.dropArgumentsToMatch(MethodHandles.identity(String.class), 0, loopType.parameterList(), 2);
 MethodHandle body  = MethodHandles.dropArgumentsToMatch(MH_step,                              2, loopType.parameterList(), 0);
 MethodHandle loop = MethodHandles.countedLoop(count, start, body);  // (v, i, pre, _, _) -> pre + " " + v
 assertEquals("na na na na na na na na na na na na na Lambdaman!", loop.invoke("na", 13, "Lambdaman!"));
 }

 {@snippet lang="java" :
 MethodHandle countedLoop(MethodHandle iterations, MethodHandle init, MethodHandle body) {
     return countedLoop(empty(iterations.type()), iterations, init, body);
 }
 }

**参数**

- **iterations** — a non-`null` handle to return the number of iterations this loop should run. The handle's result type must be `int`. See above for other constraints.
- **init** — optional initializer, providing the initial value of the loop variable. May be `null`, implying a default initial value.  See above for other constraints.
- **body** — body of the loop, which may not be `null`. It controls the loop parameters and result type in the standard case (see above for details). It must accept its own return type (if non-void) plus an `int` parameter (for the counter), and may accept any number of additional types. See above for other constraints.

**返回**

- a method handle representing the loop.

**异常**

- **NullPointerException** — if either of the `iterations` or `body` handles is `null`.
- **IllegalArgumentException** — if any argument violates the rules formulated above.

**参见**

- #countedLoop(MethodHandle, MethodHandle, MethodHandle, MethodHandle)

> *Since 9*
