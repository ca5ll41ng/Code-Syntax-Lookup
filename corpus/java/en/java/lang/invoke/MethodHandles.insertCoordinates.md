---
id: "java-en-function-methodhandles-insertcoordinates"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.insertCoordinates"
signature: "public static VarHandle insertCoordinates(VarHandle target, int pos, Object... values)"
title: "MethodHandles.insertCoordinates"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.insertCoordinates

```java
public static VarHandle insertCoordinates(VarHandle target, int pos, Object... values)
```

Provides a target var handle with one or more bound coordinates
 in advance of the var handle's invocation. As a consequence, the resulting var handle will feature less
 coordinate types than the target var handle.
 

 When calling e.g. `get` on the resulting var handle, incoming coordinate values
 are joined with bound coordinate values, and then passed to the target var handle.
 

 For the bound coordinates to be well-formed, their types must be `T1, T2 ... Tn `,
 where `T1, T2 ... Tn` are the coordinate types starting at position `pos` of the target var handle.
 

 The resulting var handle will feature the same access modes (see `VarHandle.AccessMode`) and
 atomic access guarantees as those featured by the target var handle.

**参数**

- **target** — the var handle to invoke after the bound coordinates are inserted
- **pos** — the position of the first coordinate to be inserted
- **values** — the series of bound coordinates to insert

**返回**

- an adapter var handle which inserts additional coordinates, before calling the target var handle

**异常**

- **IllegalArgumentException** — if `pos` is not between 0 and the target var handle coordinate arity, inclusive, or if more values are provided than the actual number of coordinate types available starting at `pos`.
- **ClassCastException** — if the bound coordinates in `values` are not well-formed, that is, they have types other than `T1, T2 ... Tn `, where `T1, T2 ... Tn` are the coordinate types starting at position `pos` of the target var handle.
- **NullPointerException** — if any of the arguments is `null` or `values` contains `null`.

> *Since 22*
