---
id: "java-en-function-collections-synchronizedset"
language: "java"
lang: "en"
category: "function"
name: "Collections.synchronizedSet"
signature: "public static <T> Set<T> synchronizedSet(Set<T> s)"
title: "Collections.synchronizedSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.synchronizedSet

```java
public static <T> Set<T> synchronizedSet(Set<T> s)
```

Returns a synchronized (thread-safe) set backed by the specified
 set.  In order to guarantee serial access, it is critical that
 **all** access to the backing set is accomplished
 through the returned set.

 It is imperative that the user manually synchronize on the returned
 collection when traversing it via `Iterator`, `Spliterator`
 or `Stream`:
 
```

  Set s = Collections.synchronizedSet(new HashSet());
      ...
  synchronized (s) {
      Iterator i = s.iterator(); // Must be in the synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 
```

 Failure to follow this advice may result in non-deterministic behavior.

 

The returned set will be serializable if the specified set is
 serializable.

**参数**

- **the** — class of the objects in the set
- **s** — the set to be "wrapped" in a synchronized set.

**返回**

- a synchronized view of the specified set.
