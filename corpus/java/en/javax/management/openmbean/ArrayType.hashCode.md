---
id: "java-en-function-arraytype-hashcode"
language: "java"
lang: "en"
category: "function"
name: "ArrayType.hashCode"
signature: "public int hashCode()"
title: "ArrayType.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/ArrayType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayType.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `ArrayType` instance.
 

 The hash code of an `ArrayType` instance is the sum of the
 hash codes of all the elements of information used in `equals`
 comparisons (i.e. dimension, elements' open type and primitive array flag).
 The hashcode for a primitive value is the hashcode of the corresponding boxed
 object (e.g. the hashcode for `true` is `Boolean.TRUE.hashCode()`).
 This ensures that `t1.equals(t2)` implies that
 `t1.hashCode()==t2.hashCode()` for any two
 `ArrayType` instances `t1` and `t2`,
 as required by the general contract of the method
 `hashCode`.
 

 As `ArrayType` instances are immutable, the hash
 code for this instance is calculated once, on the first call
 to `hashCode`, and then the same value is returned
 for subsequent calls.

**返回**

- the hash code value for this `ArrayType` instance
