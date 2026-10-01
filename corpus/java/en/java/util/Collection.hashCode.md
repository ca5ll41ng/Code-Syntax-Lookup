---
id: "java-en-function-collection-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Collection.hashCode"
signature: "int hashCode()"
title: "Collection.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.hashCode

```java
int hashCode()
```

Returns the hash code value for this collection.  While the
 `Collection` interface adds no stipulations to the general
 contract for the `Object.hashCode` method, programmers should
 take note that any class that overrides the `Object.equals`
 method must also override the `Object.hashCode` method in order
 to satisfy the general contract for the `Object.hashCode` method.
 In particular, `c1.equals(c2)` implies that
 `c1.hashCode()==c2.hashCode()`.

**返回**

- the hash code value for this collection

**参见**

- Object#hashCode()
- Object#equals(Object)
