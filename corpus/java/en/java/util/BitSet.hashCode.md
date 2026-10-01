---
id: "java-en-function-bitset-hashcode"
language: "java"
lang: "en"
category: "function"
name: "BitSet.hashCode"
signature: "public int hashCode()"
title: "BitSet.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.hashCode

```java
public int hashCode()
```

{@return the hash code value for this bit set}

 The hash code depends only on which bits are set within this
 `BitSet`.

 

The hash code is defined to be the result of the following
 calculation:
  
```
 `public int hashCode() {
     long h = 1234;
     long[] words = toLongArray();
     for (int i = words.length; --i >= 0; )
         h ^= words[i] * (i + 1);
     return (int)((h >> 32) ^ h);
 `}
```

 Note that the hash code changes if the set of bits is altered.
