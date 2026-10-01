---
id: "java-en-function-methodhandles-filtercoordinates"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.filterCoordinates"
signature: "public static VarHandle filterCoordinates(VarHandle target, int pos, MethodHandle... filters)"
title: "MethodHandles.filterCoordinates"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.filterCoordinates

```java
public static VarHandle filterCoordinates(VarHandle target, int pos, MethodHandle... filters)
```

Adapts a target var handle by pre-processing incoming coordinate values using unary filter functions.
 

 When calling e.g. `get` on the resulting var handle, the incoming coordinate values
 starting at position `pos` (of type `C1, C2 ... Cn`, where `C1, C2 ... Cn` are the return types
 of the unary filter functions) are transformed into new values (of type `S1, S2 ... Sn`, where `S1, S2 ... Sn` are the
 parameter types of the unary filter functions), and then passed (along with any coordinate that was left unaltered
 by the adaptation) to the target var handle.
 

 For the coordinate filters to be well-formed, their types must be of the form `S1 -> T1, S2 -> T1 ... Sn -> Tn`,
 where `T1, T2 ... Tn` are the coordinate types starting at position `pos` of the target var handle.
 

 If any of the filters throws a checked exception when invoked, the resulting var handle will
 throw an `IllegalStateException`.
 

 The resulting var handle will feature the same access modes (see `VarHandle.AccessMode`) and
 atomic access guarantees as those featured by the target var handle.

**参数**

- **target** — the target var handle
- **pos** — the position of the first coordinate to be transformed
- **filters** — the unary functions which are used to transform coordinates starting at position `pos`

**返回**

- an adapter var handle which accepts new coordinate types, applying the provided transformation to the new coordinate values.

**异常**

- **IllegalArgumentException** — if the handles in `filters` are not well-formed, that is, they have types other than `S1 -> T1, S2 -> T2, ... Sn -> Tn` where `T1, T2 ... Tn` are the coordinate types starting at position `pos` of the target var handle, if `pos` is not between 0 and the target var handle coordinate arity, inclusive, or if more filters are provided than the actual number of coordinate types available starting at `pos`, or if it's determined that any of the filters throws any checked exceptions.
- **NullPointerException** — if any of the arguments is `null` or `filters` contains `null`.

> *Since 22*
