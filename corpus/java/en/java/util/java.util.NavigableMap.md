---
id: "java-en-function-java-util-navigablemap"
language: "java"
lang: "en"
category: "function"
name: "java.util.NavigableMap"
title: "NavigableMap"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/NavigableMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NavigableMap

A `SortedMap` extended with navigation methods returning the
 closest matches for given search targets. Methods
 `lowerEntry`, `floorEntry`, `ceilingEntry`,
 and `higherEntry` return `Map.Entry` objects
 associated with keys respectively less than, less than or equal,
 greater than or equal, and greater than a given key, returning
 `null` if there is no such key.  Similarly, methods
 `lowerKey`, `floorKey`, `ceilingKey`, and
 `higherKey` return only the associated keys. All of these
 methods are designed for locating, not traversing entries.

 

A `NavigableMap` may be accessed and traversed in either
 ascending or descending key order.  The `descendingMap`
 method returns a view of the map with the senses of all relational
 and directional methods inverted. The performance of ascending
 operations and views is likely to be faster than that of descending
 ones.  Methods
 `subMap`,
 `headMap`, and
 `tailMap`
 differ from the like-named `SortedMap` methods in accepting
 additional arguments describing whether lower and upper bounds are
 inclusive versus exclusive.  Submaps of any `NavigableMap`
 must implement the `NavigableMap` interface.

 

This interface additionally defines methods `firstEntry`,
 `pollFirstEntry`, `lastEntry`, and
 `pollLastEntry` that return and/or remove the least and
 greatest mappings, if any exist, else returning `null`.

 

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

 

Methods
 `subMap`,
 `headMap`, and
 `tailMap`
 are specified to return `SortedMap` to allow existing
 implementations of `SortedMap` to be compatibly retrofitted to
 implement `NavigableMap`, but extensions and implementations
 of this interface are encouraged to override these methods to return
 `NavigableMap`.  Similarly,
 `keySet` can be overridden to return `NavigableSet`.

 

This interface is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of keys maintained by this map
- **the** — type of mapped values

> *Since 1.6*
