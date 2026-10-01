---
id: "java-en-function-collections-synchronizedsortedset"
language: "java"
lang: "en"
category: "function"
name: "Collections.synchronizedSortedSet"
signature: "public static <T> SortedSet<T> synchronizedSortedSet(SortedSet<T> s)"
title: "Collections.synchronizedSortedSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.synchronizedSortedSet

```java
public static <T> SortedSet<T> synchronizedSortedSet(SortedSet<T> s)
```

Returns a synchronized (thread-safe) sorted set backed by the specified
 sorted set.  In order to guarantee serial access, it is critical that
 **all** access to the backing sorted set is accomplished
 through the returned sorted set (or its views).

 It is imperative that the user manually synchronize on the returned
 sorted set when traversing it or any of its `subSet`,
 `headSet`, or `tailSet` views via `Iterator`,
 `Spliterator` or `Stream`:
 
```

  SortedSet s = Collections.synchronizedSortedSet(new TreeSet());
      ...
  synchronized (s) {
      Iterator i = s.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 
```

 or:
 
```

  SortedSet s = Collections.synchronizedSortedSet(new TreeSet());
  SortedSet s2 = s.headSet(foo);
      ...
  synchronized (s) {  // Note: s, not s2!!!
      Iterator i = s2.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 
```

 Failure to follow this advice may result in non-deterministic behavior.

 

The returned sorted set will be serializable if the specified
 sorted set is serializable.

**参数**

- **the** — class of the objects in the set
- **s** — the sorted set to be "wrapped" in a synchronized sorted set.

**返回**

- a synchronized view of the specified sorted set.
