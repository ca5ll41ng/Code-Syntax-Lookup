---
id: "java-en-function-comparator-equals"
language: "java"
lang: "en"
category: "function"
name: "Comparator.equals"
signature: "boolean equals(Object obj)"
title: "Comparator.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.equals

```java
boolean equals(Object obj)
```

Indicates whether some other object is &quot;equal to&quot;
 this comparator.  This method must obey the general contract of
 `equals`.  Additionally, this method can
 return `true` only if the specified object is also
 a comparator and it imposes the same ordering as this
 comparator.  Thus, `comp1.equals(comp2)` implies that
 `signum signum``(comp1.compare(o1,
 o2))==signum(comp2.compare(o1, o2))` for every object reference
 `o1` and `o2`.

 Note that it is always safe not to override
 `Object.equals(Object)`.  However, overriding this method may,
 in some cases, improve performance by allowing programs to determine
 that two distinct comparators impose the same order.

**参数**

- **obj** — the reference object with which to compare.

**返回**

- `true` only if the specified object is also a comparator and it imposes the same ordering as this comparator.

**参见**

- Object#equals(Object)
- Object#hashCode()
