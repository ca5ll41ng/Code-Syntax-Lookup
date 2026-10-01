---
id: "java-en-function-bitset-tolongarray"
language: "java"
lang: "en"
category: "function"
name: "BitSet.toLongArray"
signature: "public long[] toLongArray()"
title: "BitSet.toLongArray"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.toLongArray

```java
public long[] toLongArray()
```

Returns a new long array containing all the bits in this bit set.

 

More precisely, if
 
`long[] longs = s.toLongArray();`
 
then `longs.length == (s.length()+63)/64` and
 
`s.get(n) == ((longs[n/64] & (1L<<(n%64))) != 0)`
 
for all `n < 64 * longs.length`.

**返回**

- a long array containing a little-endian representation of all the bits in this bit set

> *Since 1.7*
