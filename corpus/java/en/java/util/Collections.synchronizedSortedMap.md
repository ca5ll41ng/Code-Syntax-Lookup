---
id: "java-en-function-collections-synchronizedsortedmap"
language: "java"
lang: "en"
category: "function"
name: "Collections.synchronizedSortedMap"
signature: "public static <K,V> SortedMap<K,V> synchronizedSortedMap(SortedMap<K,V> m)"
title: "Collections.synchronizedSortedMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.synchronizedSortedMap

```java
public static <K,V> SortedMap<K,V> synchronizedSortedMap(SortedMap<K,V> m)
```

Returns a synchronized (thread-safe) sorted map backed by the specified
 sorted map.  In order to guarantee serial access, it is critical that
 **all** access to the backing sorted map is accomplished
 through the returned sorted map (or its views).

 It is imperative that the user manually synchronize on the returned
 sorted map when traversing any of its collection views, or the
 collections views of any of its `subMap`, `headMap` or
 `tailMap` views, via `Iterator`, `Spliterator` or
 `Stream`:
 
```

  SortedMap m = Collections.synchronizedSortedMap(new TreeMap());
      ...
  Set s = m.keySet();  // Needn't be in synchronized block
      ...
  synchronized (m) {  // Synchronizing on m, not s!
      Iterator i = s.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 
```

 or:
 
```

  SortedMap m = Collections.synchronizedSortedMap(new TreeMap());
  SortedMap m2 = m.subMap(foo, bar);
      ...
  Set s2 = m2.keySet();  // Needn't be in synchronized block
      ...
  synchronized (m) {  // Synchronizing on m, not m2 or s2!
      Iterator i = s2.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 
```

 Failure to follow this advice may result in non-deterministic behavior.

 

The returned sorted map will be serializable if the specified
 sorted map is serializable.

**参数**

- **the** — class of the map keys
- **the** — class of the map values
- **m** — the sorted map to be "wrapped" in a synchronized sorted map.

**返回**

- a synchronized view of the specified sorted map.
