---
id: "java-en-function-bitset-tostring"
language: "java"
lang: "en"
category: "function"
name: "BitSet.toString"
signature: "public String toString()"
title: "BitSet.toString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/BitSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BitSet.toString

```java
public String toString()
```

Returns a string representation of this bit set. For every index
 for which this `BitSet` contains a bit in the set
 state, the decimal representation of that index is included in
 the result. Such indices are listed in order from lowest to
 highest, separated by ",&nbsp;" (a comma and a space) and
 surrounded by braces, resulting in the usual mathematical
 notation for a set of integers.

 

Example:
 
```

 BitSet drPepper = new BitSet();
```

 Now `drPepper.toString()` returns "`{`}".
 
```

 drPepper.set(2);
```

 Now `drPepper.toString()` returns "`{2`}".
 
```

 drPepper.set(4);
 drPepper.set(10);
```

 Now `drPepper.toString()` returns "`{2, 4, 10`}".

**返回**

- a string representation of this bit set
