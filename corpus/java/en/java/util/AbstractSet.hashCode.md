---
id: "java-en-function-abstractset-hashcode"
language: "java"
lang: "en"
category: "function"
name: "AbstractSet.hashCode"
signature: "public int hashCode()"
title: "AbstractSet.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSet.hashCode

```java
public int hashCode()
```

Returns the hash code value for this set.  The hash code of a set is
 defined to be the sum of the hash codes of the elements in the set,
 where the hash code of a `null` element is defined to be zero.
 This ensures that `s1.equals(s2)` implies that
 `s1.hashCode()==s2.hashCode()` for any two sets `s1`
 and `s2`, as required by the general contract of
 `hashCode`.

 

This implementation iterates over the set, calling the
 `hashCode` method on each element in the set, and adding up
 the results.

**返回**

- the hash code value for this set

**参见**

- Object#equals(Object)
- Set#equals(Object)
