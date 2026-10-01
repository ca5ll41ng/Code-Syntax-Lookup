---
id: "java-en-function-collections-synchronizedlist"
language: "java"
lang: "en"
category: "function"
name: "Collections.synchronizedList"
signature: "public static <T> List<T> synchronizedList(List<T> list)"
title: "Collections.synchronizedList"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.synchronizedList

```java
public static <T> List<T> synchronizedList(List<T> list)
```

Returns a synchronized (thread-safe) list backed by the specified
 list.  In order to guarantee serial access, it is critical that
 **all** access to the backing list is accomplished
 through the returned list.

 It is imperative that the user manually synchronize on the returned
 list when traversing it via `Iterator`, `Spliterator`
 or `Stream`:
 
```

  List list = Collections.synchronizedList(new ArrayList());
      ...
  synchronized (list) {
      Iterator i = list.iterator(); // Must be in synchronized block
      while (i.hasNext())
          foo(i.next());
  }
 
```

 Failure to follow this advice may result in non-deterministic behavior.

 

The returned list will be serializable if the specified list is
 serializable.

**参数**

- **the** — class of the objects in the list
- **list** — the list to be "wrapped" in a synchronized list.

**返回**

- a synchronized view of the specified list.
