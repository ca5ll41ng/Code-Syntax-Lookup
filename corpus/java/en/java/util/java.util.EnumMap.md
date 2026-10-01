---
id: "java-en-function-java-util-enummap"
language: "java"
lang: "en"
category: "function"
name: "java.util.EnumMap"
title: "EnumMap"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumMap

A specialized `Map` implementation for use with enum type keys.  All
 of the keys in an enum map must come from a single enum type that is
 specified, explicitly or implicitly, when the map is created.  Enum maps
 are represented internally as arrays.  This representation is extremely
 compact and efficient.

 

Enum maps are maintained in the natural order of their keys
 (the order in which the enum constants are declared).  This is reflected
 in the iterators returned by the collections views (`keySet`,
 `entrySet`, and `values`).

 

Iterators returned by the collection views are weakly consistent:
 they will never throw `ConcurrentModificationException` and they may
 or may not show the effects of any modifications to the map that occur while
 the iteration is in progress.

 

Null keys are not permitted.  Attempts to insert a null key will
 throw `NullPointerException`.  Attempts to test for the
 presence of a null key or to remove one will, however, function properly.
 Null values are permitted.

 

Like most collection implementations `EnumMap` is not
 synchronized. If multiple threads access an enum map concurrently, and at
 least one of the threads modifies the map, it should be synchronized
 externally.  This is typically accomplished by synchronizing on some
 object that naturally encapsulates the enum map.  If no such object exists,
 the map should be "wrapped" using the `synchronizedMap`
 method.  This is best done at creation time, to prevent accidental
 unsynchronized access:

 
```

     Map&lt;EnumKey, V&gt; m
         = Collections.synchronizedMap(new EnumMap&lt;EnumKey, V&gt;(...));
 
```

 

Implementation note: All basic operations execute in constant time.
 They are likely (though not guaranteed) to be faster than their
 `HashMap` counterparts.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — enum type of keys maintained by this map
- **the** — type of mapped values

**参见**

- EnumSet

> *Since 1.5*
