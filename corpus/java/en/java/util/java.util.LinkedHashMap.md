---
id: "java-en-function-java-util-linkedhashmap"
language: "java"
lang: "en"
category: "function"
name: "java.util.LinkedHashMap"
title: "LinkedHashMap"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedHashMap

Hash table and linked list implementation of the `Map` interface,
 with well-defined encounter order.  This implementation differs from
 `HashMap` in that it maintains a doubly-linked list running through all of
 its entries.  This linked list defines the encounter order (the order of iteration),
 which is normally the order in which keys were inserted into the map
 (insertion-order). The least recently inserted entry (the eldest) is
 first, and the youngest entry is last. Note that encounter order is not affected
 if a key is re-inserted into the map with the `put` method. (A key
 `k` is reinserted into a map `m` if `m.put(k, v)` is invoked when
 `m.containsKey(k)` would return `true` immediately prior to
 the invocation.) The reverse-ordered view of this map is in the opposite order, with
 the youngest entry appearing first and the eldest entry appearing last.
 The encounter order of entries already in the map can be changed by using
 the `putFirst putFirst` and `putLast putLast` methods.

 

This implementation spares its clients from the unspecified, generally
 chaotic ordering provided by `HashMap` (and `Hashtable`),
 without incurring the increased cost associated with `TreeMap`.  It
 can be used to produce a copy of a map that has the same order as the
 original, regardless of the original map's implementation:
 
```
`void foo(Map m) {
         Map copy = new LinkedHashMap<>(m);
         ...
     `
 }
```

 This technique is particularly useful if a module takes a map on input,
 copies it, and later returns results whose order is determined by that of
 the copy.  (Clients generally appreciate having things returned in the same
 order they were presented.)

 

A special `LinkedHashMap(int,float,boolean) constructor` is
 provided to create a linked hash map whose encounter order is the order
 in which its entries were last accessed, from least-recently accessed to
 most-recently (access-order).  This kind of map is well-suited to
 building LRU caches.  Invoking the `put`, `putIfAbsent`,
 `get`, `getOrDefault`, `compute`, `computeIfAbsent`,
 `computeIfPresent`, or `merge` methods results
 in an access to the corresponding entry (assuming it exists after the
 invocation completes). The `replace` methods only result in an access
 of the entry if the value is replaced.  The `putAll` method generates one
 entry access for each mapping in the specified map, in the order that
 key-value mappings are provided by the specified map's entry set iterator.
 No other methods generate entry accesses. Invoking these methods on the
 reversed view generates accesses to entries on the backing map. Note that in the
 reversed view, an access to an entry moves it first in encounter order.
 Explicit-positioning methods such as `putFirst` or `lastEntry`, whether on
 the map or on its reverse-ordered view, perform the positioning operation and
 do not generate entry accesses. Operations on the `keySet`, `values`,
 and `entrySet` views or on their sequenced counterparts do not affect
 the encounter order of the backing map.

 

The `removeEldestEntry` method may be overridden to
 impose a policy for removing stale mappings automatically when new mappings
 are added to the map. Alternatively, since the "eldest" entry is the first
 entry in encounter order, programs can inspect and remove stale mappings through
 use of the `firstEntry firstEntry` and `pollFirstEntry pollFirstEntry`
 methods.

 

This class provides all of the optional `Map` and `SequencedMap` operations,
 and it permits null elements.  Like `HashMap`, it provides constant-time
 performance for the basic operations (`add`, `contains` and
 `remove`), assuming the hash function disperses elements
 properly among the buckets.  Performance is likely to be just slightly
 below that of `HashMap`, due to the added expense of maintaining the
 linked list, with one exception: Iteration over the collection-views
 of a `LinkedHashMap` requires time proportional to the size
 of the map, regardless of its capacity.  Iteration over a `HashMap`
 is likely to be more expensive, requiring time proportional to its
 capacity.

 

A linked hash map has two parameters that affect its performance:
 initial capacity and load factor.  They are defined precisely
 as for `HashMap`.  Note, however, that the penalty for choosing an
 excessively high value for initial capacity is less severe for this class
 than for `HashMap`, as iteration times for this class are unaffected
 by capacity.

 

**Note that this implementation is not synchronized.**
 If multiple threads access a linked hash map concurrently, and at least
 one of the threads modifies the map structurally, it must be
 synchronized externally.  This is typically accomplished by
 synchronizing on some object that naturally encapsulates the map.

 If no such object exists, the map should be "wrapped" using the
 `synchronizedMap Collections.synchronizedMap`
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the map:
```

   Map m = Collections.synchronizedMap(new LinkedHashMap(...));
```

 A structural modification is any operation that adds or deletes one or more
 mappings or, in the case of access-ordered linked hash maps, affects
 iteration order.  In insertion-ordered linked hash maps, merely changing
 the value associated with a key that is already contained in the map is not
 a structural modification.  **In access-ordered linked hash maps,
 merely querying the map with `get` is a structural modification.
 **)

 

The iterators returned by the `iterator` method of the collections
 returned by all of this class's collection view methods are
 fail-fast: if the map is structurally modified at any time after
 the iterator is created, in any way except through the iterator's own
 `remove` method, the iterator will throw a `ConcurrentModificationException`.  Thus, in the face of concurrent
 modification, the iterator fails quickly and cleanly, rather than risking
 arbitrary, non-deterministic behavior at an undetermined time in the future.

 

Note that the fail-fast behavior of an iterator cannot be guaranteed
 as it is, generally speaking, impossible to make any hard guarantees in the
 presence of unsynchronized concurrent modification.  Fail-fast iterators
 throw `ConcurrentModificationException` on a best-effort basis.
 Therefore, it would be wrong to write a program that depended on this
 exception for its correctness:   the fail-fast behavior of iterators
 should be used only to detect bugs.

 

The spliterators returned by the spliterator method of the collections
 returned by all of this class's collection view methods are
 late-binding,
 fail-fast, and additionally report `ORDERED`.

 

This class is a member of the
 
 Java Collections Framework.

 The spliterators returned by the spliterator method of the collections
 returned by all of this class's collection view methods are created from
 the iterators of the corresponding collections.

**参数**

- **the** — type of keys maintained by this map
- **the** — type of mapped values

**参见**

- Object#hashCode()
- Collection
- Map
- HashMap
- TreeMap
- Hashtable

> *Since 1.4*
