---
id: "java-en-function-collections-newsetfrommap"
language: "java"
lang: "en"
category: "function"
name: "Collections.newSetFromMap"
signature: "public static <E> Set<E> newSetFromMap(Map<E, Boolean> map)"
title: "Collections.newSetFromMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.newSetFromMap

```java
public static <E> Set<E> newSetFromMap(Map<E, Boolean> map)
```

Returns a set backed by the specified map.  The resulting set displays
 the same ordering, concurrency, and performance characteristics as the
 backing map.  In essence, this factory method provides a `Set`
 implementation corresponding to any `Map` implementation.  There
 is no need to use this method on a `Map` implementation that
 already has a corresponding `Set` implementation (such as `HashMap` or `TreeMap`).

 

Each method invocation on the set returned by this method results in
 exactly one method invocation on the backing map or its `keySet`
 view, with one exception.  The `addAll` method is implemented
 as a sequence of `put` invocations on the backing map.

 

The specified map must be empty at the time this method is invoked,
 and should not be accessed directly after this method returns.  These
 conditions are ensured if the map is created empty, passed directly
 to this method, and no reference to the map is retained, as illustrated
 in the following code fragment:
 
```

    Set&lt;Object&gt; weakHashSet = Collections.newSetFromMap(
        new WeakHashMap&lt;Object, Boolean&gt;());
 
```

**参数**

- **the** — class of the map keys and of the objects in the returned set
- **map** — the backing map

**返回**

- the set backed by the map

**异常**

- **IllegalArgumentException** — if `map` is not empty

> *Since 1.6*
