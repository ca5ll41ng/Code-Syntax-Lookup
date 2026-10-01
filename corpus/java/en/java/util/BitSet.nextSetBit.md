---
id: "java-en-function-bitset-nextsetbit"
language: "java"
lang: "en"
category: "function"
name: "BitSet.nextSetBit"
signature: "public int nextSetBit(int fromIndex)"
title: "BitSet.nextSetBit"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.nextSetBit

```java
public int nextSetBit(int fromIndex)
```

Returns the index of the first bit that is set to `true`
 that occurs on or after the specified starting index. If no such
 bit exists then `-1` is returned.

 

To iterate over the `true` bits in a `BitSet`,
 use the following loop:

  
```
 `for (int i = bs.nextSetBit(0); i >= 0; i = bs.nextSetBit(i+1)) {
     // operate on index i here
     if (i == Integer.MAX_VALUE) {
         break; // or (i+1) would overflow
     `
 }}
```

**参数**

- **fromIndex** — the index to start checking from (inclusive)

**返回**

- the index of the next set bit, or `-1` if there is no such bit

**异常**

- **IndexOutOfBoundsException** — if the specified index is negative

> *Since 1.4*
