---
id: "java-en-function-methodhandles-dropcoordinates"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.dropCoordinates"
signature: "public static VarHandle dropCoordinates(VarHandle target, int pos, Class<?>... valueTypes)"
title: "MethodHandles.dropCoordinates"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.dropCoordinates

```java
public static VarHandle dropCoordinates(VarHandle target, int pos, Class<?>... valueTypes)
```

Returns a var handle which will discard some dummy coordinates before delegating to the
 target var handle. As a consequence, the resulting var handle will feature more
 coordinate types than the target var handle.
 

 The `pos` argument may range between zero and N, where N is the arity of the
 target var handle's coordinate types. If `pos` is zero, the dummy coordinates will precede
 the target's real arguments; if `pos` is N they will come after.
 

 The resulting var handle will feature the same access modes (see `VarHandle.AccessMode`) and
 atomic access guarantees as those featured by the target var handle.

**参数**

- **target** — the var handle to invoke after the dummy coordinates are dropped
- **pos** — position of the first coordinate to drop (zero for the leftmost)
- **valueTypes** — the type(s) of the coordinate(s) to drop

**返回**

- an adapter var handle which drops some dummy coordinates, before calling the target var handle

**异常**

- **IllegalArgumentException** — if `pos` is not between 0 and the target var handle coordinate arity, inclusive.
- **NullPointerException** — if any of the arguments is `null` or `valueTypes` contains `null`.

> *Since 22*
