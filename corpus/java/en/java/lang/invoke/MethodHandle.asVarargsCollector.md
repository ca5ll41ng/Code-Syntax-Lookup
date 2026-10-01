---
id: "java-en-function-methodhandle-asvarargscollector"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.asVarargsCollector"
signature: "public MethodHandle asVarargsCollector(Class<?> arrayType)"
title: "MethodHandle.asVarargsCollector"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.asVarargsCollector

```java
public MethodHandle asVarargsCollector(Class<?> arrayType)
```

Makes a variable arity adapter which is able to accept
 any number of trailing positional arguments and collect them
 into an array argument.
 

 The type and behavior of the adapter will be the same as
 the type and behavior of the target, except that certain
 `invoke` and `asType` requests can lead to
 trailing positional arguments being collected into target's
 trailing parameter.
 Also, the
 `lastParameterType last parameter type`
 of the adapter will be
 `arrayType`, even if the target has a different
 last parameter type.
 

 This transformation may return `this` if the method handle is
 already of variable arity and its trailing parameter type
 is identical to `arrayType`.
 

 When called with `invokeExact invokeExact`, the adapter invokes
 the target with no argument changes.
 (Note: This behavior is different from a
 `asCollector fixed arity collector`,
 since it accepts a whole array of indeterminate length,
 rather than a fixed number of arguments.)
 

 When called with plain, inexact `invoke invoke`, if the caller
 type is the same as the adapter, the adapter invokes the target as with
 `invokeExact`.
 (This is the normal behavior for `invoke` when types match.)
 

 Otherwise, if the caller and adapter arity are the same, and the
 trailing parameter type of the caller is a reference type identical to
 or assignable to the trailing parameter type of the adapter,
 the arguments and return values are converted pairwise,
 as if by `asType asType` on a fixed arity
 method handle.
 

 Otherwise, the arities differ, or the adapter's trailing parameter
 type is not assignable from the corresponding caller type.
 In this case, the adapter replaces all trailing arguments from
 the original trailing argument position onward, by
 a new array of type `arrayType`, whose elements
 comprise (in order) the replaced arguments.
 

 The caller type must provide at least enough arguments,
 and of the correct type, to satisfy the target's requirement for
 positional arguments before the trailing array argument.
 Thus, the caller must supply, at a minimum, `N-1` arguments,
 where `N` is the arity of the target.
 Also, there must exist conversions from the incoming arguments
 to the target's arguments.
 As with other uses of plain `invoke`, if these basic
 requirements are not fulfilled, a `WrongMethodTypeException`
 may be thrown.
 

 In all cases, what the target eventually returns is returned unchanged by the adapter.
 

 In the final case, it is exactly as if the target method handle were
 temporarily adapted with a `asCollector fixed arity collector`
 to the arity required by the caller type.
 (As with `asCollector`, if the array length is zero,
 a shared constant may be used instead of a new array.
 If the implied call to `asCollector` would throw
 an `IllegalArgumentException` or `WrongMethodTypeException`,
 the call to the variable arity adapter must throw
 `WrongMethodTypeException`.)
 

 The behavior of `asType asType` is also specialized for
 variable arity adapters, to maintain the invariant that
 plain, inexact `invoke` is always equivalent to an `asType`
 call to adjust the target type, followed by `invokeExact`.
 Therefore, a variable arity adapter responds
 to an `asType` request by building a fixed arity collector,
 if and only if the adapter and requested type differ either
 in arity or trailing argument type.
 The resulting fixed arity collector has its type further adjusted
 (if necessary) to the requested type by pairwise conversion,
 as if by another application of `asType`.
 

 When a method handle is obtained by executing an `ldc` instruction
 of a `CONSTANT_MethodHandle` constant, and the target method is marked
 as a variable arity method (with the modifier bit `0x0080`),
 the method handle will accept multiple arities, as if the method handle
 constant were created by means of a call to `asVarargsCollector`.
 

 In order to create a collecting adapter which collects a predetermined
 number of arguments, and whose type reflects this predetermined number,
 use `asCollector asCollector` instead.
 

 No method handle transformations produce new method handles with
 variable arity, unless they are documented as doing so.
 Therefore, besides `asVarargsCollector` and `withVarargs`,
 all methods in `MethodHandle` and `MethodHandles`
 will return a method handle with fixed arity,
 except in the cases where they are specified to return their original
 operand (e.g., `asType` of the method handle's own type).
 

 Calling `asVarargsCollector` on a method handle which is already
 of variable arity will produce a method handle with the same type and behavior.
 It may (or may not) return the original variable arity method handle.
 

 Here is an example, of a list-making variable arity method handle:
 {@snippet lang="java" :
MethodHandle deepToString = publicLookup()
  .findStatic(Arrays.class, "deepToString", methodType(String.class, Object[].class));
MethodHandle ts1 = deepToString.asVarargsCollector(Object[].class);
assertEquals("[won]",   (String) ts1.invokeExact(    new Object[]{"won"}));
assertEquals("[won]",   (String) ts1.invoke(         new Object[]{"won"}));
assertEquals("[won]",   (String) ts1.invoke(                      "won" ));
assertEquals("[[won]]", (String) ts1.invoke((Object) new Object[]{"won"}));
// findStatic of Arrays.asList(...) produces a variable arity method handle:
MethodHandle asList = publicLookup()
  .findStatic(Arrays.class, "asList", methodType(List.class, Object[].class));
assertEquals(methodType(List.class, Object[].class), asList.type());
assert(asList.isVarargsCollector());
assertEquals("[]", asList.invoke().toString());
assertEquals("[1]", asList.invoke(1).toString());
assertEquals("[two, too]", asList.invoke("two", "too").toString());
String[] argv = { "three", "thee", "tee" };
assertEquals("[three, thee, tee]", asList.invoke(argv).toString());
assertEquals("[three, thee, tee]", asList.invoke((Object[])argv).toString());
List ls = (List) asList.invoke((Object)argv);
assertEquals(1, ls.size());
assertEquals("[three, thee, tee]", Arrays.toString((Object[])ls.get(0)));
 }
 
 Discussion:
 These rules are designed as a dynamically-typed variation
 of the Java rules for variable arity methods.
 In both cases, callers to a variable arity method or method handle
 can either pass zero or more positional arguments, or else pass
 pre-collected arrays of any length.  Users should be aware of the
 special role of the final argument, and of the effect of a
 type match on that final argument, which determines whether
 or not a single trailing argument is interpreted as a whole
 array or a single element of an array to be collected.
 Note that the dynamic type of the trailing argument has no
 effect on this decision, only a comparison between the symbolic
 type descriptor of the call site and the type descriptor of the method handle.

**参数**

- **arrayType** — often `Object[]`, the type of the array argument which will collect the arguments

**返回**

- a new method handle which can collect any number of trailing arguments into an array, before calling the original method handle

**异常**

- **NullPointerException** — if `arrayType` is a null reference
- **IllegalArgumentException** — if `arrayType` is not an array type or `arrayType` is not assignable to this method handle's trailing parameter type

**参见**

- #asCollector
- #isVarargsCollector
- #withVarargs
- #asFixedArity
