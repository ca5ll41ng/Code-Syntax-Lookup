---
id: "java-en-function-methodhandles-collectcoordinates"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.collectCoordinates"
signature: "public static VarHandle collectCoordinates(VarHandle target, int pos, MethodHandle filter)"
title: "MethodHandles.collectCoordinates"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.collectCoordinates

```java
public static VarHandle collectCoordinates(VarHandle target, int pos, MethodHandle filter)
```

Adapts a target var handle by pre-processing
 a sub-sequence of its coordinate values with a filter (a method handle).
 The pre-processed coordinates are replaced by the result (if any) of the
 filter function and the target var handle is then called on the modified (usually shortened)
 coordinate list.
 

 If `R` is the return type of the filter, then:
 
 
- if `R` is not `void`, the target var handle must have a coordinate of type `R` in
 position `pos`. The parameter types of the filter will replace the coordinate type at position `pos`
 of the target var handle. When the returned var handle is invoked, it will be as if the filter is invoked first,
 and its result is passed in place of the coordinate at position `pos` in a downstream invocation of the
 target var handle.
 
-  if `R` is `void`, the parameter types (if any) of the filter will be inserted in the
 coordinate type list of the target var handle at position `pos`. In this case, when the returned var handle
 is invoked, the filter essentially acts as a side effect, consuming some of the coordinate values, before a
 downstream invocation of the target var handle.
 

 

 If any of the filters throws a checked exception when invoked, the resulting var handle will
 throw an `IllegalStateException`.
 

 The resulting var handle will feature the same access modes (see `VarHandle.AccessMode`) and
 atomic access guarantees as those featured by the target var handle.

**参数**

- **target** — the var handle to invoke after the coordinates have been filtered
- **pos** — the position in the coordinate list of the target var handle where the filter is to be inserted
- **filter** — the filter method handle

**返回**

- an adapter var handle which filters the incoming coordinate values, before calling the target var handle

**异常**

- **IllegalArgumentException** — if the return type of `filter` is not void, and it is not the same as the `pos` coordinate of the target var handle, if `pos` is not between 0 and the target var handle coordinate arity, inclusive, if the resulting var handle's type would have too many coordinates, or if it's determined that `filter` throws any checked exceptions.
- **NullPointerException** — if any of the arguments is `null`.

> *Since 22*
