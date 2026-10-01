---
id: "java-en-function-methodhandles-iteratedloop"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.iteratedLoop"
signature: "public static MethodHandle iteratedLoop(MethodHandle iterator, MethodHandle init, MethodHandle body)"
title: "MethodHandles.iteratedLoop"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.iteratedLoop

```java
public static MethodHandle iteratedLoop(MethodHandle iterator, MethodHandle init, MethodHandle body)
```

Constructs a loop that ranges over the values produced by an `Iterator`.
 This is a convenience wrapper for the `loop(MethodHandle[][]) generic loop combinator`.
 

 The iterator itself will be determined by the evaluation of the `iterator` handle.
 Each value it produces will be stored in a loop iteration variable of type `T`.
 

 If the `body` handle returns a non-`void` type `V`, a leading loop iteration variable
 of that type is also present.  This variable is initialized using the optional `init` handle,
 or to the `empty default value` of type `V` if that handle is `null`.
 

 In each iteration, the iteration variables are passed to an invocation of the `body` handle.
 A non-`void` value returned from the body (of type `V`) updates the leading
 iteration variable.
 The result of the loop handle execution will be the final `V` value of that variable
 (or `void` if there is no `V` variable).
 

 The following rules hold for the argument handles:
 
- The `body` handle must not be `null`; its type must be of the form
 `(V T A...)V`, where `V` is non-`void`, or else `(T A...)void`.
 (In the `void` case, we assign the type `void` to the name `V`,
 and we will write `(V T A...)V` with the understanding that a `void` type `V`
 is quietly dropped from the parameter list, leaving `(T A...)V`.)
 
- The parameter list `(V T A...)` of the body contributes to a list
 of types called the internal parameter list.
 It will constrain the parameter lists of the other loop parts.
 
- As a special case, if the body contributes only `V` and `T` types,
 with no additional `A` types, then the internal parameter list is extended by
 the argument types `A...` of the `iterator` handle; if it is `null` the
 single type `Iterable` is added and constitutes the `A...` list.
 
- If the iteration variable types `(V T)` are dropped from the internal parameter list, the resulting shorter
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
 
- If the `iterator` handle is non-`null`, it must have the return
 type `java.util.Iterator` or a subtype thereof.
 The iterator it produces when the loop is executed will be assumed
 to yield values which can be converted to type `T`.
 
- The parameter list of an `iterator` that is non-`null` (of some form `(A*)`) must be
 effectively identical to the external parameter list `(A...)`.
 
- If `iterator` is `null` it defaults to a method handle which behaves
 like `iterator`.  In that case, the internal parameter list
 `(V T A...)` must have at least one `A` type, and the default iterator
 handle parameter is adjusted to accept the leading `A` type, as if by
 the `asType asType` conversion method.
 The leading `A` type must be `Iterable` or a subtype thereof.
 This conversion step, done at loop construction time, must not throw a `WrongMethodTypeException`.
 

 

 The type `T` may be either a primitive or reference.
 Since type `Iterator` is erased in the method handle representation to the raw type `Iterator`,
 the `iteratedLoop` combinator adjusts the leading argument type for `body` to `Object`
 as if by the `asType asType` conversion method.
 Therefore, if an iterator of the wrong type appears as the loop is executed, runtime exceptions may occur
 as the result of dynamic conversions performed by `asType`.
 

 The resulting loop handle's result type and parameter signature are determined as follows:
 
- The loop handle's result type is the result type `V` of the body.
 
- The loop handle's parameter types are the types `(A...)`,
 from the external parameter list.
 

 

 Here is pseudocode for the resulting loop handle. In the code, `V`/`v` represent the type / value of
 the loop variable as well as the result type of the loop; `T`/`t`, that of the elements of the
 structure the loop iterates over, and `A...`/`a...` represent arguments passed to the loop.
 {@snippet lang="java" :
 Iterator iterator(A...);  // defaults to Iterable::iterator
 V init(A...);
 V body(V,T,A...);
 V iteratedLoop(A... a...) {
   Iterator it = iterator(a...);
   V v = init(a...);
   while (it.hasNext()) {
     T t = it.next();
     v = body(v, t, a...);
   }
   return v;
 }
 }

 {@snippet lang="java" :
 // get an iterator from a list
 static List reverseStep(List r, String e) {
   r.add(0, e);
   return r;
 }
 static List newArrayList() { return new ArrayList<>(); }
 // assume MH_reverseStep and MH_newArrayList are handles to the above methods
 MethodHandle loop = MethodHandles.iteratedLoop(null, MH_newArrayList, MH_reverseStep);
 List list = Arrays.asList("a", "b", "c", "d", "e");
 List reversedList = Arrays.asList("e", "d", "c", "b", "a");
 assertEquals(reversedList, (List) loop.invoke(list));
 }

 {@snippet lang="java" :
 MethodHandle iteratedLoop(MethodHandle iterator, MethodHandle init, MethodHandle body) {
     // assume MH_next, MH_hasNext, MH_startIter are handles to methods of Iterator/Iterable
     Class<?> returnType = body.type().returnType();
     Class<?> ttype = body.type().parameterType(returnType == void.class ? 0 : 1);
     MethodHandle nextVal = MH_next.asType(MH_next.type().changeReturnType(ttype));
     MethodHandle retv = null, step = body, startIter = iterator;
     if (returnType != void.class) {
         // the simple thing first:  in (I V A...), drop the I to get V
         retv = dropArguments(identity(returnType), 0, Iterator.class);
         // body type signature (V T A...), internal loop types (I V A...)
         step = swapArguments(body, 0, 1);  // swap V <-> T
     }
     if (startIter == null)  startIter = MH_getIter;
     MethodHandle[]
         iterVar    = { startIter, null, MH_hasNext, retv }, // it = iterator; while (it.hasNext())
         bodyClause = { init, filterArguments(step, 0, nextVal) };  // v = body(v, t, a)
     return loop(iterVar, bodyClause);
 }
 }

**参数**

- **iterator** — an optional handle to return the iterator to start the loop. If non-`null`, the handle must return `java.util.Iterator` or a subtype. See above for other constraints.
- **init** — optional initializer, providing the initial value of the loop variable. May be `null`, implying a default initial value.  See above for other constraints.
- **body** — body of the loop, which may not be `null`. It controls the loop parameters and result type in the standard case (see above for details). It must accept its own return type (if non-void) plus a `T` parameter (for the iterated values), and may accept any number of additional types. See above for other constraints.

**返回**

- a method handle embodying the iteration loop functionality.

**异常**

- **NullPointerException** — if the `body` handle is `null`.
- **IllegalArgumentException** — if any argument violates the above requirements.

> *Since 9*
