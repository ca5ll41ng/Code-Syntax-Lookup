---
id: "java-en-function-bitset-previousclearbit"
language: "java"
lang: "en"
category: "function"
name: "BitSet.previousClearBit"
signature: "public int previousClearBit(int fromIndex)"
title: "BitSet.previousClearBit"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.previousClearBit

```java
public int previousClearBit(int fromIndex)
```

Returns the index of the nearest bit that is set to `false`
 that occurs on or before the specified starting index.
 If no such bit exists, or if `-1` is given as the
 starting index, then `-1` is returned.

**参数**

- **fromIndex** — the index to start checking from (inclusive)

**返回**

- the index of the previous clear bit, or `-1` if there is no such bit

**异常**

- **IndexOutOfBoundsException** — if the specified index is less than `-1`

> *Since 1.7*
