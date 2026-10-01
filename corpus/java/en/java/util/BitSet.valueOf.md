---
id: "java-en-function-bitset-valueof"
language: "java"
lang: "en"
category: "function"
name: "BitSet.valueOf"
signature: "public static BitSet valueOf(long[] longs)"
title: "BitSet.valueOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.valueOf

```java
public static BitSet valueOf(long[] longs)
```

Returns a new bit set containing all the bits in the given long array.

 

More precisely,
 
`BitSet.valueOf(longs).get(n) == ((longs[n/64] & (1L<<(n%64))) != 0)`
 
for all `n < 64 * longs.length`.

 

This method is equivalent to
 `BitSet.valueOf(LongBuffer.wrap(longs))`.

**参数**

- **longs** — a long array containing a little-endian representation of a sequence of bits to be used as the initial bits of the new bit set

**返回**

- a `BitSet` containing all the bits in the long array

> *Since 1.7*
