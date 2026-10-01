---
id: "java-en-function-java-util-hashtable"
language: "java"
lang: "en"
category: "function"
name: "java.util.Hashtable"
title: "Hashtable"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable

This class implements a hash table, which maps keys to values. Any
 non-`null` object can be used as a key or as a value. 

 To successfully store and retrieve objects from a hashtable, the
 objects used as keys must implement the `hashCode`
 method and the `equals` method. 

 An instance of `Hashtable` has two parameters that affect its
 performance: initial capacity and load factor.  The
 capacity is the number of buckets in the hash table, and the
 initial capacity is simply the capacity at the time the hash table
 is created.  Note that the hash table is open: in the case of a "hash
 collision", a single bucket stores multiple entries, which must be searched
 sequentially.  The load factor is a measure of how full the hash
 table is allowed to get before its capacity is automatically increased.
 The initial capacity and load factor parameters are merely hints to
 the implementation.  The exact details as to when and whether the rehash
 method is invoked are implementation-dependent.

 Generally, the default load factor (.75) offers a good tradeoff between
 time and space costs.  Higher values decrease the space overhead but
 increase the time cost to look up an entry (which is reflected in most
 `Hashtable` operations, including `get` and `put`).

 The initial capacity controls a tradeoff between wasted space and the
 need for `rehash` operations, which are time-consuming.
 No `rehash` operations will ever occur if the initial
 capacity is greater than the maximum number of entries the
 `Hashtable` will contain divided by its load factor.  However,
 setting the initial capacity too high can waste space.

 If many entries are to be made into a `Hashtable`,
 creating it with a sufficiently large capacity may allow the
 entries to be inserted more efficiently than letting it perform
 automatic rehashing as needed to grow the table. 

 This example creates a hashtable of numbers. It uses the names of
 the numbers as keys:
 
```
   `Hashtable numbers
     = new Hashtable();
   numbers.put("one", 1);
   numbers.put("two", 2);
   numbers.put("three", 3);`
```

 

To retrieve a number, use the following code:
 
```
   `Integer n = numbers.get("two");
   if (n != null) {
     System.out.println("two = " + n);
   `}
```

 

The iterators returned by the `iterator` method of the collections
 returned by all of this class's "collection view methods" are
 fail-fast: if the Hashtable is structurally modified at any time
 after the iterator is created, in any way except through the iterator's own
 `remove` method, the iterator will throw a `ConcurrentModificationException`.  Thus, in the face of concurrent
 modification, the iterator fails quickly and cleanly, rather than risking
 arbitrary, non-deterministic behavior at an undetermined time in the future.
 The Enumerations returned by Hashtable's `keys keys` and
 `elements elements` methods are not fail-fast; if the
 Hashtable is structurally modified at any time after the enumeration is
 created then the results of enumerating are undefined.

 

Note that the fail-fast behavior of an iterator cannot be guaranteed
 as it is, generally speaking, impossible to make any hard guarantees in the
 presence of unsynchronized concurrent modification.  Fail-fast iterators
 throw `ConcurrentModificationException` on a best-effort basis.
 Therefore, it would be wrong to write a program that depended on this
 exception for its correctness: the fail-fast behavior of iterators
 should be used only to detect bugs.

 

As of the Java 2 platform v1.2, this class was retrofitted to
 implement the `Map` interface, making it a member of the
 

 Java Collections Framework.  Unlike the new collection
 implementations, `Hashtable` is synchronized.  If a
 thread-safe implementation is not needed, it is recommended to use
 `HashMap` in place of `Hashtable`.  If a thread-safe
 highly-concurrent implementation is desired, then it is recommended
 to use `java.util.concurrent.ConcurrentHashMap` in place of
 `Hashtable`.

**参数**

- **the** — type of keys maintained by this map
- **the** — type of mapped values

**参见**

- Object#equals(java.lang.Object)
- Object#hashCode()
- Hashtable#rehash()
- Collection
- Map
- HashMap
- TreeMap

> *Since 1.0*
