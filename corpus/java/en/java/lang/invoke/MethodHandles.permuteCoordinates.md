---
id: "java-en-function-methodhandles-permutecoordinates"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.permuteCoordinates"
signature: "public static VarHandle permuteCoordinates(VarHandle target, List<Class<?>> newCoordinates, int... reorder)"
title: "MethodHandles.permuteCoordinates"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.permuteCoordinates

```java
public static VarHandle permuteCoordinates(VarHandle target, List<Class<?>> newCoordinates, int... reorder)
```

Provides a var handle which adapts the coordinate values of the target var handle, by re-arranging them
 so that the new coordinates match the provided ones.
 

 The given array controls the reordering.
 Call `#I` the number of incoming coordinates (the value
 `newCoordinates.size()`), and call `#O` the number
 of outgoing coordinates (the number of coordinates associated with the target var handle).
 Then the length of the reordering array must be `#O`,
 and each element must be a non-negative number less than `#I`.
 For every `N` less than `#O`, the `N`-th
 outgoing coordinate will be taken from the `I`-th incoming
 coordinate, where `I` is `reorder[N]`.
 

 No coordinate value conversions are applied.
 The type of each incoming coordinate, as determined by `newCoordinates`,
 must be identical to the type of the corresponding outgoing coordinate
 in the target var handle.
 

 The reordering array need not specify an actual permutation.
 An incoming coordinate will be duplicated if its index appears
 more than once in the array, and an incoming coordinate will be dropped
 if its index does not appear in the array.
 

 The resulting var handle will feature the same access modes (see `VarHandle.AccessMode`) and
 atomic access guarantees as those featured by the target var handle.

**参数**

- **target** — the var handle to invoke after the coordinates have been reordered
- **newCoordinates** — the new coordinate types
- **reorder** — an index array which controls the reordering

**返回**

- an adapter var handle which re-arranges the incoming coordinate values, before calling the target var handle

**异常**

- **IllegalArgumentException** — if the index array length is not equal to the number of coordinates of the target var handle, or if any index array element is not a valid index for a coordinate of `newCoordinates`, or if two corresponding coordinate types in the target var handle and in `newCoordinates` are not identical.
- **NullPointerException** — if any of the arguments is `null` or `newCoordinates` contains `null`.

> *Since 22*
