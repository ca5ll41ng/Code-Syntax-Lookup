---
id: "java-en-function-collections-synchronizednavigableset"
language: "java"
lang: "en"
category: "function"
name: "Collections.synchronizedNavigableSet"
signature: "public static <T> NavigableSet<T> synchronizedNavigableSet(NavigableSet<T> s)"
title: "Collections.synchronizedNavigableSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.synchronizedNavigableSet

```java
public static <T> NavigableSet<T> synchronizedNavigableSet(NavigableSet<T> s)
```

Returns a synchronized (thread-safe) navigable set backed by the
 specified navigable set.  In order to guarantee serial access, it is
 critical that **all** access to the backing navigable set is
 accomplished through the returned navigable set (or its views).

 It is imperative that the user manually synchronize on the returned
 navigable set when traversing it, or any of its `subSet`,
 `headSet`, or `tailSet` views, via `Iterator`,
 `Spliterator` or `Stream`:
 
```

  NavigableSet s = Collections.synchronizedNavigableSet(new TreeSet());
      ...
  synchronized (s) {
      Iterator i = s.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 
```

 or:
 
```

  NavigableSet s = Collections.synchronizedNavigableSet(new TreeSet());
  NavigableSet s2 = s.headSet(foo, true);
      ...
  synchronized (s) {  // Note: s, not s2!!!
      Iterator i = s2.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 
```

 Failure to follow this advice may result in non-deterministic behavior.

 

The returned navigable set will be serializable if the specified
 navigable set is serializable.

**参数**

- **the** — class of the objects in the set
- **s** — the navigable set to be "wrapped" in a synchronized navigable set

**返回**

- a synchronized view of the specified navigable set

> *Since 1.8*
