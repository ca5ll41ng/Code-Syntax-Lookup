---
id: "java-en-function-set-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Set.hashCode"
signature: "int hashCode()"
title: "Set.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.hashCode

```java
int hashCode()
```

Returns the hash code value for this set.  The hash code of a set is
 defined to be the sum of the hash codes of the elements in the set,
 where the hash code of a `null` element is defined to be zero.
 This ensures that `s1.equals(s2)` implies that
 `s1.hashCode()==s2.hashCode()` for any two sets `s1`
 and `s2`, as required by the general contract of
 `hashCode`.

**返回**

- the hash code value for this set

**参见**

- Object#equals(Object)
- Set#equals(Object)
