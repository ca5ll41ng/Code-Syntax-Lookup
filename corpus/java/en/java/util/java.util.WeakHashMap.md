---
id: "java-en-function-java-util-weakhashmap"
language: "java"
lang: "en"
category: "function"
name: "java.util.WeakHashMap"
title: "WeakHashMap"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/WeakHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakHashMap

Hash table based implementation of the `Map` interface, with
 weak keys.
 An entry in a `WeakHashMap` will automatically be removed when
 its key is no longer in ordinary use.  More precisely, the presence of a
 mapping for a given key will not prevent the key from being discarded by the
 garbage collector, that is, made finalizable, finalized, and then reclaimed.
 When a key has been discarded its entry is effectively removed from the map,
 so this class behaves somewhat differently from other `Map`
 implementations.

 
      
          `hasIdentity Value objects` can not be used as
          keys in a `WeakHashMap`. The `put`
          method, and all methods that associate a value with a key, throw `IdentityException` if the key is a value object.
          The `WeakHashMap` constructor and the `putAll` method also throw `IdentityException` if invoked with
          a `Map` containing a key that is a value object.
      
 

 

 Both null values and the null key are supported. This class has
 performance characteristics similar to those of the `HashMap`
 class, and has the same efficiency parameters of initial capacity
 and load factor.

 

 Like most collection classes, this class is not synchronized.
 A synchronized `WeakHashMap` may be constructed using the
 `synchronizedMap Collections.synchronizedMap`
 method.

 

 This class is intended primarily for use with key objects whose
 `equals` methods test for object identity using the
 `==` operator.  Once such a key is discarded it can never be
 recreated, so it is impossible to do a lookup of that key in a
 `WeakHashMap` at some later time and be surprised that its entry
 has been removed.  This class will work perfectly well with key objects
 whose `equals` methods are not based upon object identity, such
 as `String` instances.  With such recreatable key objects,
 however, the automatic removal of `WeakHashMap` entries whose
 keys have been discarded may prove to be confusing.

 

 The behavior of the `WeakHashMap` class depends in part upon
 the actions of the garbage collector, so several familiar (though not
 required) `Map` invariants do not hold for this class.  Because
 the garbage collector may discard keys at any time, a
 `WeakHashMap` may behave as though an unknown thread is silently
 removing entries.  In particular, even if you synchronize on a
 `WeakHashMap` instance and invoke none of its mutator methods, it
 is possible for the `size` method to return smaller values over
 time, for the `isEmpty` method to return `false` and
 then `true`, for the `containsKey` method to return
 `true` and later `false` for a given key, for the
 `get` method to return a value for a given key but later return
 `null`, for the `put` method to return
 `null` and the `remove` method to return
 `false` for a key that previously appeared to be in the map, and
 for successive examinations of the key set, the value collection, and
 the entry set to yield successively smaller numbers of elements.

 

 Each key object in a `WeakHashMap` is stored indirectly as
 the referent of a weak reference.  Therefore a key will automatically be
 removed only after the weak references to it, both inside and outside of the
 map, have been cleared by the garbage collector.

 

 **Implementation note:** The values in a
 `WeakHashMap` are held by ordinary strong references.  Thus care
 should be taken to ensure that values do not strongly refer to their
 own keys, either directly or indirectly, since that will prevent the keys
 from being discarded.  Note that a value may refer indirectly to its
 key via the `WeakHashMap` itself; that is, a value may
 strongly refer to some other key object whose associated value, in
 turn, strongly refers to the key of the first value.  If the values
 in the map do not rely on the map holding strong references to them, one way
 to deal with this is to wrap values themselves within
 `WeakReferences` before
 inserting, as in: `m.put(key, new WeakReference(value))`,
 and then unwrapping upon each `get`.

 

The iterators returned by the `iterator` method of the collections
 returned by all of this class's "collection view methods" are
 fail-fast: if the map is structurally modified at any time after the
 iterator is created, in any way except through the iterator's own
 `remove` method, the iterator will throw a `ConcurrentModificationException`.  Thus, in the face of concurrent
 modification, the iterator fails quickly and cleanly, rather than risking
 arbitrary, non-deterministic behavior at an undetermined time in the future.

 

Note that the fail-fast behavior of an iterator cannot be guaranteed
 as it is, generally speaking, impossible to make any hard guarantees in the
 presence of unsynchronized concurrent modification.  Fail-fast iterators
 throw `ConcurrentModificationException` on a best-effort basis.
 Therefore, it would be wrong to write a program that depended on this
 exception for its correctness:  the fail-fast behavior of iterators
 should be used only to detect bugs.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of keys maintained by this map
- **the** — type of mapped values

**参见**

- java.util.HashMap
- java.lang.ref.WeakReference

> *Since 1.2*
