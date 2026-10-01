---
id: "java-en-function-methodhandle-ascollector"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.asCollector"
signature: "public MethodHandle asCollector(Class<?> arrayType, int arrayLength)"
title: "MethodHandle.asCollector"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.asCollector

```java
public MethodHandle asCollector(Class<?> arrayType, int arrayLength)
```

Makes an array-collecting method handle, which accepts a given number of trailing
 positional arguments and collects them into an array argument.
 The new method handle adapts, as its target,
 the current method handle.  The type of the adapter will be
 the same as the type of the target, except that a single trailing
 parameter (usually of type `arrayType`) is replaced by
 `arrayLength` parameters whose type is element type of `arrayType`.
 

 If the array type differs from the final argument type on the original target,
 the original target is adapted to take the array type directly,
 as if by a call to `asType asType`.
 

 When called, the adapter replaces its trailing `arrayLength`
 arguments by a single new array of type `arrayType`, whose elements
 comprise (in order) the replaced arguments.
 Finally the target is called.
 What the target eventually returns is returned unchanged by the adapter.
 

 (The array may also be a shared constant when `arrayLength` is zero.)
 

 (Note: The `arrayType` is often identical to the
 `lastParameterType last parameter type`
 of the original target.
 It is an explicit argument for symmetry with `asSpreader`, and also
 to allow the target to use a simple `Object` as its last parameter type.)
 

 In order to create a collecting adapter which is not restricted to a particular
 number of collected arguments, use `asVarargsCollector asVarargsCollector`
 or `withVarargs withVarargs` instead.
 

 Here are some examples of array-collecting method handles:
 {@snippet lang="java" :
MethodHandle deepToString = publicLookup()
  .findStatic(Arrays.class, "deepToString", methodType(String.class, Object[].class));
assertEquals("[won]",   (String) deepToString.invokeExact(new Object[]{"won"}));
MethodHandle ts1 = deepToString.asCollector(Object[].class, 1);
assertEquals(methodType(String.class, Object.class), ts1.type());
//assertEquals("[won]", (String) ts1.invokeExact(         new Object[]{"won"})); //FAIL
assertEquals("[[won]]", (String) ts1.invokeExact((Object) new Object[]{"won"}));
// arrayType can be a subtype of Object[]
MethodHandle ts2 = deepToString.asCollector(String[].class, 2);
assertEquals(methodType(String.class, String.class, String.class), ts2.type());
assertEquals("[two, too]", (String) ts2.invokeExact("two", "too"));
MethodHandle ts0 = deepToString.asCollector(Object[].class, 0);
assertEquals("[]", (String) ts0.invokeExact());
// collectors can be nested, Lisp-style
MethodHandle ts22 = deepToString.asCollector(Object[].class, 3).asCollector(String[].class, 2);
assertEquals("[A, B, [C, D]]", ((String) ts22.invokeExact((Object)'A', (Object)"B", "C", "D")));
// arrayType can be any primitive array type
MethodHandle bytesToString = publicLookup()
  .findStatic(Arrays.class, "toString", methodType(String.class, byte[].class))
  .asCollector(byte[].class, 3);
assertEquals("[1, 2, 3]", (String) bytesToString.invokeExact((byte)1, (byte)2, (byte)3));
MethodHandle longsToString = publicLookup()
  .findStatic(Arrays.class, "toString", methodType(String.class, long[].class))
  .asCollector(long[].class, 1);
assertEquals("[123]", (String) longsToString.invokeExact((long)123));
 }
 

 Note: The resulting adapter is never a `asVarargsCollector
 variable-arity method handle`, even if the original target method handle was.

**参数**

- **arrayType** — often `Object[]`, the type of the array argument which will collect the arguments
- **arrayLength** — the number of arguments to collect into a new array argument

**返回**

- a new method handle which collects some trailing argument into an array, before calling the original method handle

**异常**

- **NullPointerException** — if `arrayType` is a null reference
- **IllegalArgumentException** — if `arrayType` is not an array type or `arrayType` is not assignable to this method handle's trailing parameter type, or `arrayLength` is not a legal array size, or the resulting method handle's type would have too many parameters
- **WrongMethodTypeException** — if the implied `asType` call fails

**参见**

- #asSpreader
- #asVarargsCollector
