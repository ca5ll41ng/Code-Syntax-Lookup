---
id: "java-en-function-collections-synchronizedmap"
language: "java"
lang: "en"
category: "function"
name: "Collections.synchronizedMap"
signature: "public static <K,V> Map<K,V> synchronizedMap(Map<K,V> m)"
title: "Collections.synchronizedMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.synchronizedMap

```java
public static <K,V> Map<K,V> synchronizedMap(Map<K,V> m)
```

Returns a synchronized (thread-safe) map backed by the specified
 map.  In order to guarantee serial access, it is critical that
 **all** access to the backing map is accomplished
 through the returned map.

 It is imperative that the user manually synchronize on the returned
 map when traversing any of its collection views via `Iterator`,
 `Spliterator` or `Stream`:
 
```

  Map m = Collections.synchronizedMap(new HashMap());
      ...
  Set s = m.keySet();  // Needn't be in synchronized block
      ...
  synchronized (m) {  // Synchronizing on m, not s!
      Iterator i = s.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 
```

 Failure to follow this advice may result in non-deterministic behavior.

 

The returned map will be serializable if the specified map is
 serializable.

**参数**

- **the** — class of the map keys
- **the** — class of the map values
- **m** — the map to be "wrapped" in a synchronized map.

**返回**

- a synchronized view of the specified map.
