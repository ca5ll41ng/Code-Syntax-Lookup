---
id: "java-en-function-collections-synchronizedcollection"
language: "java"
lang: "en"
category: "function"
name: "Collections.synchronizedCollection"
signature: "public static <T> Collection<T> synchronizedCollection(Collection<T> c)"
title: "Collections.synchronizedCollection"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.synchronizedCollection

```java
public static <T> Collection<T> synchronizedCollection(Collection<T> c)
```

Returns a synchronized (thread-safe) collection backed by the specified
 collection.  In order to guarantee serial access, it is critical that
 **all** access to the backing collection is accomplished
 through the returned collection.

 It is imperative that the user manually synchronize on the returned
 collection when traversing it via `Iterator`, `Spliterator`
 or `Stream`:
 
```

  Collection c = Collections.synchronizedCollection(myCollection);
     ...
  synchronized (c) {
      Iterator i = c.iterator(); // Must be in the synchronized block
      while (i.hasNext())
         foo(i.next());
  }
 
```

 Failure to follow this advice may result in non-deterministic behavior.

 

The returned collection does not pass the `hashCode`
 and `equals` operations through to the backing collection, but
 relies on `Object`'s equals and hashCode methods.  This is
 necessary to preserve the contracts of these operations in the case
 that the backing collection is a set or a list.

 The returned collection will be serializable if the specified collection
 is serializable.

**参数**

- **the** — class of the objects in the collection
- **c** — the collection to be "wrapped" in a synchronized collection.

**返回**

- a synchronized view of the specified collection.
