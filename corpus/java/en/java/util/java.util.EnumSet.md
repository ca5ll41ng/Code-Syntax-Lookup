---
id: "java-en-function-java-util-enumset"
language: "java"
lang: "en"
category: "function"
name: "java.util.EnumSet"
title: "EnumSet"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumSet

A specialized `Set` implementation for use with enum types.  All of
 the elements in an enum set must come from a single enum type that is
 specified, explicitly or implicitly, when the set is created.  Enum sets
 are represented internally as bit vectors.  This representation is
 extremely compact and efficient. The space and time performance of this
 class should be good enough to allow its use as a high-quality, typesafe
 alternative to traditional `int`-based "bit flags."  Even bulk
 operations (such as `containsAll` and `retainAll`) should
 run very quickly if their argument is also an enum set.

 

The iterator returned by the `iterator` method traverses the
 elements in their natural order (the order in which the enum
 constants are declared).  The returned iterator is weakly
 consistent: it will never throw `ConcurrentModificationException`
 and it may or may not show the effects of any modifications to the set that
 occur while the iteration is in progress.

 

Null elements are not permitted.  Attempts to insert a null element
 will throw `NullPointerException`.  Attempts to test for the
 presence of a null element or to remove one will, however, function
 properly.

 

Like most collection implementations, `EnumSet` is not
 synchronized.  If multiple threads access an enum set concurrently, and at
 least one of the threads modifies the set, it should be synchronized
 externally.  This is typically accomplished by synchronizing on some
 object that naturally encapsulates the enum set.  If no such object exists,
 the set should be "wrapped" using the `synchronizedSet`
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access:

 
```

 Set&lt;MyEnum&gt; s = Collections.synchronizedSet(EnumSet.noneOf(MyEnum.class));
 
```

 

Implementation note: All basic operations execute in constant time.
 They are likely (though not guaranteed) to be much faster than their
 `HashSet` counterparts.  Even bulk operations execute in
 constant time if their argument is also an enum set.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — enum type of elements maintained by this set

**参见**

- EnumMap

> *Since 1.5*
