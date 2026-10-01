---
id: "java-en-function-simpleimmutableentry-equals"
language: "java"
lang: "en"
category: "function"
name: "SimpleImmutableEntry.equals"
signature: "public boolean equals(Object o)"
title: "SimpleImmutableEntry.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleImmutableEntry.equals

```java
public boolean equals(Object o)
```

Compares the specified object with this entry for equality.
 Returns `true` if the given object is also a map entry and
 the two entries represent the same mapping.  More formally, two
 entries `e1` and `e2` represent the same mapping
 if
```

   (e1.getKey()==null ?
    e2.getKey()==null :
    e1.getKey().equals(e2.getKey()))
   &amp;&amp;
   (e1.getValue()==null ?
    e2.getValue()==null :
    e1.getValue().equals(e2.getValue()))
```

 This ensures that the `equals` method works properly across
 different implementations of the `Map.Entry` interface.

**参数**

- **o** — object to be compared for equality with this map entry

**返回**

- `true` if the specified object is equal to this map entry

**参见**

- #hashCode
