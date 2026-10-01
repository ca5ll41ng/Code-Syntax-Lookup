---
id: "java-en-function-bitset-equals"
language: "java"
lang: "en"
category: "function"
name: "BitSet.equals"
signature: "public boolean equals(Object obj)"
title: "BitSet.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.equals

```java
public boolean equals(Object obj)
```

Compares this bit set against the specified object.
 The result is `true` if and only if the argument is
 not `null` and is a `BitSet` object that has
 exactly the same set of bits set to `true` as this bit
 set. That is, for every nonnegative `int` index `k`,
 
```
((BitSet)obj).get(k) == this.get(k)
```

 must be true. The current sizes of the two bit sets are not compared.

**参数**

- **obj** — the object to compare with

**返回**

- `true` if the objects are the same; `false` otherwise

**参见**

- #size()
