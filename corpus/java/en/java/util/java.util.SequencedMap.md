---
id: "java-en-function-java-util-sequencedmap"
language: "java"
lang: "en"
category: "function"
name: "java.util.SequencedMap"
title: "SequencedMap"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedMap

A Map that has a well-defined encounter order, that supports operations at both ends, and
 that is reversible. The encounter order
 of a `SequencedMap` is similar to that of the elements of a `SequencedCollection`,
 but the ordering applies to mappings instead of individual elements.
 

 The bulk operations on this map, including the `forEach forEach` and the
 `replaceAll replaceAll` methods, operate on this map's mappings in
 encounter order.
 

 The view collections provided by the
 `keySet keySet`,
 `values values`,
 `entrySet entrySet`,
 `sequencedKeySet sequencedKeySet`,
 `sequencedValues sequencedValues`,
 and
 `sequencedEntrySet sequencedEntrySet` methods all reflect the encounter order
 of this map. Even though the return values of the `keySet`, `values`, and
 `entrySet` methods are not sequenced types, the elements
 in those view collections do reflect the encounter order of this map. Thus, the
 iterators returned by the statements
 {@snippet :
     var it1 = sequencedMap.entrySet().iterator();
     var it2 = sequencedMap.sequencedEntrySet().iterator();
 }
 both provide the mappings of `sequencedMap` in that map's encounter order.
 

 This interface provides methods to add mappings, to retrieve mappings, and to remove
 mappings at either end of the map's encounter order.
 

 This interface also defines the `reversed` method, which provides a
 reverse-ordered view of this map.
 In the reverse-ordered view, the concepts of first and last are inverted, as
 are the concepts of successor and predecessor. The first mapping of this map
 is the last mapping of the reverse-ordered view, and vice-versa. The successor of some
 mapping in this map is its predecessor in the reversed view, and vice-versa. All
 methods that respect the encounter order of the map operate as if the encounter order
 is inverted. For instance, the `forEach forEach` method of the reversed view reports
 the mappings in order from the last mapping of this map to the first. In addition, all of
 the view collections of the reversed view also reflect the inverse of this map's
 encounter order. For example,
 {@snippet :
     var itr = sequencedMap.reversed().entrySet().iterator();
 }
 provides the mappings of this map in the inverse of the encounter order, that is, from
 the last mapping to the first mapping. The availability of the `reversed` method,
 and its impact on the ordering semantics of all applicable methods and views, allow convenient
 iteration, searching, copying, and streaming of this map's mappings in either forward order or
 reverse order.
 

 A map's reverse-ordered view is generally not serializable, even if the original
 map is serializable.
 

 The `Map.Entry` instances obtained by iterating the `entrySet` view, the
 `sequencedEntrySet` view, and its reverse-ordered view, maintain a connection to the
 underlying map. This connection is guaranteed only during the iteration. It is unspecified
 whether the connection is maintained outside of the iteration. If the underlying map permits
 it, calling an Entry's `setValue setValue` method will modify the value of the
 underlying mapping. It is, however, unspecified whether modifications to the value in the
 underlying mapping are visible in the `Entry` instance.
 

 The methods
 `firstEntry`,
 `lastEntry`,
 `pollFirstEntry`, and
 `pollLastEntry`
 return `Map.Entry` instances that represent snapshots of mappings as
 of the time of the call. They do not support mutation of the
 underlying map via the optional `setValue setValue` method.
 

 Depending upon the implementation, the `Entry` instances returned by other
 means might or might not be connected to the underlying map. For example, consider
 an `Entry` obtained in the following manner:
 {@snippet :
     var entry = sequencedMap.sequencedEntrySet().getFirst();
 }
 It is not specified by this interface whether the `setValue` method of the
 `Entry` thus obtained will update a mapping in the underlying map, or whether
 it will throw an exception, or whether changes to the underlying map are visible in
 that `Entry`.
 

 This interface has the same requirements on the `equals` and `hashCode`
 methods as defined by `equals Map.equals` and `hashCode Map.hashCode`.
 Thus, a `Map` and a `SequencedMap` will compare equals if and only
 if they have equal mappings, irrespective of ordering.
 

 This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of keys maintained by this map
- **the** — type of mapped values

> *Since 21*
