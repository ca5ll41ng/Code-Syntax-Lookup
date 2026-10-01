---
id: "java-en-function-abstractmap-hashcode"
language: "java"
lang: "en"
category: "function"
name: "AbstractMap.hashCode"
signature: "public int hashCode()"
title: "AbstractMap.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractMap.hashCode

```java
public int hashCode()
```

Returns the hash code value for this map.  The hash code of a map is
 defined to be the sum of the hash codes of each entry in the map's
 `entrySet()` view.  This ensures that `m1.equals(m2)`
 implies that `m1.hashCode()==m2.hashCode()` for any two maps
 `m1` and `m2`, as required by the general contract of
 `hashCode`.

 This implementation iterates over `entrySet()`, calling
 `hashCode hashCode` on each element (entry) in the
 set, and adding up the results.

**返回**

- the hash code value for this map

**参见**

- Map.Entry#hashCode()
- Object#equals(Object)
- Set#equals(Object)
