---
id: "java-en-function-java-util-treemap"
language: "java"
lang: "en"
category: "function"
name: "java.util.TreeMap"
title: "TreeMap"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap

A Red-Black tree based `NavigableMap` implementation.
 The map is sorted according to the `Comparable natural
 ordering` of its keys, or by a `Comparator` provided at map
 creation time, depending on which constructor is used.

 

This implementation provides guaranteed log(n) time cost for the
 `containsKey`, `get`, `put` and `remove`
 operations.  Algorithms are adaptations of those in Cormen, Leiserson, and
 Rivest's Introduction to Algorithms.

 

Note that the ordering maintained by a tree map, like any sorted map, and
 whether or not an explicit comparator is provided, must be consistent
 with `equals` if this sorted map is to correctly implement the
 `Map` interface.  (See `Comparable` or `Comparator` for a
 precise definition of consistent with equals.)  This is so because
 the `Map` interface is defined in terms of the `equals`
 operation, but a sorted map performs all key comparisons using its `compareTo` (or `compare`) method, so two keys that are deemed equal by
 this method are, from the standpoint of the sorted map, equal.  The behavior
 of a sorted map is well-defined even if its ordering is
 inconsistent with `equals`; it just fails to obey the general contract
 of the `Map` interface.

 

**Note that this implementation is not synchronized.**
 If multiple threads access a map concurrently, and at least one of the
 threads modifies the map structurally, it must be synchronized
 externally.  (A structural modification is any operation that adds or
 deletes one or more mappings; merely changing the value associated
 with an existing key is not a structural modification.)  This is
 typically accomplished by synchronizing on some object that naturally
 encapsulates the map.
 If no such object exists, the map should be "wrapped" using the
 `synchronizedSortedMap Collections.synchronizedSortedMap`
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access to the map: 
```

   SortedMap m = Collections.synchronizedSortedMap(new TreeMap(...));
```

 

The iterators returned by the `iterator` method of the collections
 returned by all of this class's "collection view methods" are
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

 

The methods
 `ceilingEntry`,
 `firstEntry`,
 `floorEntry`,
 `higherEntry`,
 `lastEntry`,
 `lowerEntry`,
 `pollFirstEntry`, and
 `pollLastEntry`
 return `Map.Entry` instances that represent snapshots of mappings as
 of the time of the call. They do not support mutation of the
 underlying map via the optional `setValue setValue` method.

 

The `putFirst putFirst` and `putLast putLast` methods of this class
 throw `UnsupportedOperationException`. The encounter order of mappings is determined
 by the comparison method; therefore, explicit positioning is not supported.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of keys maintained by this map
- **the** — type of mapped values

**参见**

- Map
- HashMap
- Hashtable
- Comparable
- Comparator
- Collection

> *Since 1.2*
