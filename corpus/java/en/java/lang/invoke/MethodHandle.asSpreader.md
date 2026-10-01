---
id: "java-en-function-methodhandle-asspreader"
language: "java"
lang: "en"
category: "function"
name: "MethodHandle.asSpreader"
signature: "public MethodHandle asSpreader(Class<?> arrayType, int arrayLength)"
title: "MethodHandle.asSpreader"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandle.asSpreader

```java
public MethodHandle asSpreader(Class<?> arrayType, int arrayLength)
```

Makes an array-spreading method handle, which accepts a trailing array argument
 and spreads its elements as positional arguments.
 The new method handle adapts, as its target,
 the current method handle.  The type of the adapter will be
 the same as the type of the target, except that the final
 `arrayLength` parameters of the target's type are replaced
 by a single array parameter of type `arrayType`.
 

 If the array element type differs from any of the corresponding
 argument types on the original target,
 the original target is adapted to take the array elements directly,
 as if by a call to `asType asType`.
 

 When called, the adapter replaces a trailing array argument
 by the array's elements, each as its own argument to the target.
 (The order of the arguments is preserved.)
 They are converted pairwise by casting and/or unboxing
 to the types of the trailing parameters of the target.
 Finally the target is called.
 What the target eventually returns is returned unchanged by the adapter.
 

 Before calling the target, the adapter verifies that the array
 contains exactly enough elements to provide a correct argument count
 to the target method handle.
 (The array may also be null when zero elements are required.)
 

 When the adapter is called, the length of the supplied `array`
 argument is queried as if by `array.length` or `arraylength`
 bytecode. If the adapter accepts a zero-length trailing array argument,
 the supplied `array` argument can either be a zero-length array or
 `null`; otherwise, the adapter will throw a `NullPointerException`
 if the array is `null` and throw an `IllegalArgumentException`
 if the array does not have the correct number of elements.
 

 Here are some simple examples of array-spreading method handles:
 {@snippet lang="java" :
MethodHandle equals = publicLookup()
  .findVirtual(String.class, "equals", methodType(boolean.class, Object.class));
assert( (boolean) equals.invokeExact("me", (Object)"me"));
assert(!(boolean) equals.invokeExact("me", (Object)"thee"));
// spread both arguments from a 2-array:
MethodHandle eq2 = equals.asSpreader(Object[].class, 2);
assert( (boolean) eq2.invokeExact(new Object[]{ "me", "me" }));
assert(!(boolean) eq2.invokeExact(new Object[]{ "me", "thee" }));
// try to spread from anything but a 2-array:
for (int n = 0; n <= 10; n++) {
  Object[] badArityArgs = (n == 2 ? new Object[0] : new Object[n]);
  try { assert((boolean) eq2.invokeExact(badArityArgs) && false); }
  catch (IllegalArgumentException ex) { } // OK
}
// spread both arguments from a String array:
MethodHandle eq2s = equals.asSpreader(String[].class, 2);
assert( (boolean) eq2s.invokeExact(new String[]{ "me", "me" }));
assert(!(boolean) eq2s.invokeExact(new String[]{ "me", "thee" }));
// spread second arguments from a 1-array:
MethodHandle eq1 = equals.asSpreader(Object[].class, 1);
assert( (boolean) eq1.invokeExact("me", new Object[]{ "me" }));
assert(!(boolean) eq1.invokeExact("me", new Object[]{ "thee" }));
// spread no arguments from a 0-array or null:
MethodHandle eq0 = equals.asSpreader(Object[].class, 0);
assert( (boolean) eq0.invokeExact("me", (Object)"me", new Object[0]));
assert(!(boolean) eq0.invokeExact("me", (Object)"thee", (Object[])null));
// asSpreader and asCollector are approximate inverses:
for (int n = 0; n <= 2; n++) {
    for (Class<?> a : new Class<?>[]{Object[].class, String[].class, CharSequence[].class}) {
        MethodHandle equals2 = equals.asSpreader(a, n).asCollector(a, n);
        assert( (boolean) equals2.invokeWithArguments("me", "me"));
        assert(!(boolean) equals2.invokeWithArguments("me", "thee"));
    }
}
MethodHandle caToString = publicLookup()
  .findStatic(Arrays.class, "toString", methodType(String.class, char[].class));
assertEquals("[A, B, C]", (String) caToString.invokeExact("ABC".toCharArray()));
MethodHandle caString3 = caToString.asCollector(char[].class, 3);
assertEquals("[A, B, C]", (String) caString3.invokeExact('A', 'B', 'C'));
MethodHandle caToString2 = caString3.asSpreader(char[].class, 2);
assertEquals("[A, B, C]", (String) caToString2.invokeExact('A', "BC".toCharArray()));
 }

**参数**

- **arrayType** — usually `Object[]`, the type of the array argument from which to extract the spread arguments
- **arrayLength** — the number of arguments to spread from an incoming array argument

**返回**

- a new method handle which spreads its final array argument, before calling the original method handle

**异常**

- **NullPointerException** — if `arrayType` is a null reference
- **IllegalArgumentException** — if `arrayType` is not an array type, or if target does not have at least `arrayLength` parameter types, or if `arrayLength` is negative, or if the resulting method handle's type would have too many parameters
- **WrongMethodTypeException** — if the implied `asType` call fails

**参见**

- #asCollector
