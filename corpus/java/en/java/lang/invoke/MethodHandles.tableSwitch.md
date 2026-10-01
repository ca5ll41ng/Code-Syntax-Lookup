---
id: "java-en-function-methodhandles-tableswitch"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.tableSwitch"
signature: "public static MethodHandle tableSwitch(MethodHandle fallback, MethodHandle... targets)"
title: "MethodHandles.tableSwitch"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.tableSwitch

```java
public static MethodHandle tableSwitch(MethodHandle fallback, MethodHandle... targets)
```

Creates a table switch method handle, which can be used to switch over a set of target
 method handles, based on a given target index, called selector.
 

 For a selector value of `n`, where `n` falls in the range `[0, N)`,
 and where `N` is the number of target method handles, the table switch method
 handle will invoke the n-th target method handle from the list of target method handles.
 

 For a selector value that does not fall in the range `[0, N)`, the table switch
 method handle will invoke the given fallback method handle.
 

 All method handles passed to this method must have the same type, with the additional
 requirement that the leading parameter be of type `int`. The leading parameter
 represents the selector.
 

 Any trailing parameters present in the type will appear on the returned table switch
 method handle as well. Any arguments assigned to these parameters will be forwarded,
 together with the selector value, to the selected method handle when invoking it.

 The cases each drop the `selector` value they are given, and take an additional
 `String` argument, which is concatenated (using `concat`)
 to a specific constant label string for each case:
 {@snippet lang="java" :
 MethodHandles.Lookup lookup = MethodHandles.lookup();
 MethodHandle caseMh = lookup.findVirtual(String.class, "concat",
         MethodType.methodType(String.class, String.class));
 caseMh = MethodHandles.dropArguments(caseMh, 0, int.class);

 MethodHandle caseDefault = MethodHandles.insertArguments(caseMh, 1, "default: ");
 MethodHandle case0 = MethodHandles.insertArguments(caseMh, 1, "case 0: ");
 MethodHandle case1 = MethodHandles.insertArguments(caseMh, 1, "case 1: ");

 MethodHandle mhSwitch = MethodHandles.tableSwitch(
     caseDefault,
     case0,
     case1
 );

 assertEquals("default: data", (String) mhSwitch.invokeExact(-1, "data"));
 assertEquals("case 0: data", (String) mhSwitch.invokeExact(0, "data"));
 assertEquals("case 1: data", (String) mhSwitch.invokeExact(1, "data"));
 assertEquals("default: data", (String) mhSwitch.invokeExact(2, "data"));
 }

**参数**

- **fallback** — the fallback method handle that is called when the selector is not within the range `[0, N)`.
- **targets** — array of target method handles.

**返回**

- the table switch method handle.

**异常**

- **NullPointerException** — if `fallback`, the `targets` array, or any any of the elements of the `targets` array are `null`.
- **IllegalArgumentException** — if the `targets` array is empty, if the leading parameter of the fallback handle or any of the target handles is not `int`, or if the types of the fallback handle and all of target handles are not the same.

> *Since 17*
