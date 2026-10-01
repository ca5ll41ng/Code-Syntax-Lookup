---
id: "java-en-function-bitset-nextclearbit"
language: "java"
lang: "en"
category: "function"
name: "BitSet.nextClearBit"
signature: "public int nextClearBit(int fromIndex)"
title: "BitSet.nextClearBit"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.nextClearBit

```java
public int nextClearBit(int fromIndex)
```

Returns the index of the first bit that is set to `false`
 that occurs on or after the specified starting index.

**参数**

- **fromIndex** — the index to start checking from (inclusive)

**返回**

- the index of the next clear bit

**异常**

- **IndexOutOfBoundsException** — if the specified index is negative

> *Since 1.4*
