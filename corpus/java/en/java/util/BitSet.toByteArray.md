---
id: "java-en-function-bitset-tobytearray"
language: "java"
lang: "en"
category: "function"
name: "BitSet.toByteArray"
signature: "public byte[] toByteArray()"
title: "BitSet.toByteArray"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.toByteArray

```java
public byte[] toByteArray()
```

Returns a new byte array containing all the bits in this bit set.

 

More precisely, if
 
`byte[] bytes = s.toByteArray();`
 
then `bytes.length == (s.length()+7)/8` and
 
`s.get(n) == ((bytes[n/8] & (1<<(n%8))) != 0)`
 
for all `n < 8 * bytes.length`.

**返回**

- a byte array containing a little-endian representation of all the bits in this bit set

> *Since 1.7*
