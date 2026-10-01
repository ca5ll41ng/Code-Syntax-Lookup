---
id: "java-en-function-methodhandles-dowhileloop"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.doWhileLoop"
signature: "public static MethodHandle doWhileLoop(MethodHandle init, MethodHandle body, MethodHandle pred)"
title: "MethodHandles.doWhileLoop"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.doWhileLoop

```java
public static MethodHandle doWhileLoop(MethodHandle init, MethodHandle body, MethodHandle pred)
```

Constructs a `do-while` loop from an initializer, a body, and a predicate.
 This is a convenience wrapper for the `loop(MethodHandle[][]) generic loop combinator`.
 

 The `pred` handle describes the loop condition; and `body`, its body. The loop resulting from this
 method will, in each iteration, first execute its body and then evaluate the predicate.
 The loop will terminate once the predicate evaluates to `false` after an execution of the body.
 

 The `init` handle describes the initial value of an additional optional loop-local variable.
 In each iteration, this loop-local variable, if present, will be passed to the `body`
 and updated with the value returned from its invocation. The result of loop execution will be
 the final value of the additional loop-local variable (if present).
 

 The following rules hold for these argument handles:
 
- The `body` handle must not be `null`; its type must be of the form
 `(V A...)V`, where `V` is non-`void`, or else `(A...)void`.
 (In the `void` case, we assign the type `void` to the name `V`,
 and we will write `(V A...)V` with the understanding that a `void` type `V`
 is quietly dropped from the parameter list, leaving `(A...)V`.)
 
- The parameter list `(V A...)` of the body is called the internal parameter list.
 It will constrain the parameter lists of the other loop parts.
 
- If the iteration variable type `V` is dropped from the internal parameter list, the resulting shorter
 list `(A...)` is called the external parameter list.
 
- The body return type `V`, if non-`void`, determines the type of an
 additional state variable of the loop.
 The body must both accept and return a value of this type `V`.
 
- If `init` is non-`null`, it must have return type `V`.
 Its parameter list (of some form `(A*)`) must be
 effectively identical
 to the external parameter list `(A...)`.
 
- If `init` is `null`, the loop variable will be initialized to its
 `empty default value`.
 
- The `pred` handle must not be `null`.  It must have `boolean` as its return type.
 Its parameter list (either empty or of the form `(V A*)`) must be
 effectively identical to the internal parameter list.
 

 

 The resulting loop handle's result type and parameter signature are determined as follows:
 
- The loop handle's result type is the result type `V` of the body.
 
- The loop handle's parameter types are the types `(A...)`,
 from the external parameter list.
 

 

 Here is pseudocode for the resulting loop handle. In the code, `V`/`v` represent the type / value of
 the sole loop variable as well as the result type of the loop; and `A`/`a`, that of the argument
 passed to the loop.
 {@snippet lang="java" :
 V init(A...);
 boolean pred(V, A...);
 V body(V, A...);
 V doWhileLoop(A... a...) {
   V v = init(a...);
   do {
     v = body(v, a...);
   } while (pred(v, a...));
   return v;
 }
 }

 {@snippet lang="java" :
 // int i = 0; while (i < limit) { ++i; } return i; => limit
 static int zero(int limit) { return 0; }
 static int step(int i, int limit) { return i + 1; }
 static boolean pred(int i, int limit) { return i < limit; }
 // assume MH_zero, MH_step, and MH_pred are handles to the above methods
 MethodHandle loop = MethodHandles.doWhileLoop(MH_zero, MH_step, MH_pred);
 assertEquals(23, loop.invoke(23));
 }

 {@snippet lang="java" :
 MethodHandle doWhileLoop(MethodHandle init, MethodHandle body, MethodHandle pred) {
     MethodHandle fini = (body.type().returnType() == void.class
                         ? null : identity(body.type().returnType()));
     MethodHandle[] clause = { init, body, pred, fini };
     return loop(clause);
 }
 }

**参数**

- **init** — optional initializer, providing the initial value of the loop variable. May be `null`, implying a default initial value.  See above for other constraints.
- **body** — body of the loop, which may not be `null`. It controls the loop parameters and result type. See above for other constraints.
- **pred** — condition for the loop, which may not be `null`. Its result type must be `boolean`. See above for other constraints.

**返回**

- a method handle implementing the `while` loop as described by the arguments.

**异常**

- **IllegalArgumentException** — if the rules for the arguments are violated.
- **NullPointerException** — if `pred` or `body` are `null`.

**参见**

- #loop(MethodHandle[][])
- #whileLoop(MethodHandle, MethodHandle, MethodHandle)

> *Since 9*
