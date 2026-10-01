---
id: "java-en-function-bitset-get"
language: "java"
lang: "en"
category: "function"
name: "BitSet.get"
signature: "public boolean get(int bitIndex)"
title: "BitSet.get"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.get

```java
public boolean get(int bitIndex)
```

Returns the value of the bit with the specified index. The value
 is `true` if the bit with the index `bitIndex`
 is currently set in this `BitSet`; otherwise, the result
 is `false`.

**参数**

- **bitIndex** — the bit index

**返回**

- the value of the bit with the specified index

**异常**

- **IndexOutOfBoundsException** — if the specified index is negative
