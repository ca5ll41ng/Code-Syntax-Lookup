---
id: "java-en-function-collections-synchronizednavigablemap"
language: "java"
lang: "en"
category: "function"
name: "Collections.synchronizedNavigableMap"
signature: "public static <K,V> NavigableMap<K,V> synchronizedNavigableMap(NavigableMap<K,V> m)"
title: "Collections.synchronizedNavigableMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.synchronizedNavigableMap

```java
public static <K,V> NavigableMap<K,V> synchronizedNavigableMap(NavigableMap<K,V> m)
```

Returns a synchronized (thread-safe) navigable map backed by the
 specified navigable map.  In order to guarantee serial access, it is
 critical that **all** access to the backing navigable map is
 accomplished through the returned navigable map (or its views).

 It is imperative that the user manually synchronize on the returned
 navigable map when traversing any of its collection views, or the
 collections views of any of its `subMap`, `headMap` or
 `tailMap` views, via `Iterator`, `Spliterator` or
 `Stream`:
 
```

  NavigableMap m = Collections.synchronizedNavigableMap(new TreeMap());
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

  NavigableMap m = Collections.synchronizedNavigableMap(new TreeMap());
  NavigableMap m2 = m.subMap(foo, true, bar, false);
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

 

The returned navigable map will be serializable if the specified
 navigable map is serializable.

**参数**

- **the** — class of the map keys
- **the** — class of the map values
- **m** — the navigable map to be "wrapped" in a synchronized navigable map

**返回**

- a synchronized view of the specified navigable map.

> *Since 1.8*
