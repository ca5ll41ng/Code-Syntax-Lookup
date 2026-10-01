---
id: "java-en-function-bitset-previoussetbit"
language: "java"
lang: "en"
category: "function"
name: "BitSet.previousSetBit"
signature: "public int previousSetBit(int fromIndex)"
title: "BitSet.previousSetBit"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.previousSetBit

```java
public int previousSetBit(int fromIndex)
```

Returns the index of the nearest bit that is set to `true`
 that occurs on or before the specified starting index.
 If no such bit exists, or if `-1` is given as the
 starting index, then `-1` is returned.

 

To iterate over the `true` bits in a `BitSet`,
 use the following loop:

  
```
 `for (int i = bs.length(); (i = bs.previousSetBit(i-1)) >= 0; ) {
     // operate on index i here
 `}
```

**参数**

- **fromIndex** — the index to start checking from (inclusive)

**返回**

- the index of the previous set bit, or `-1` if there is no such bit

**异常**

- **IndexOutOfBoundsException** — if the specified index is less than `-1`

> *Since 1.7*
