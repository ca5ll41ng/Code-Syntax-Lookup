---
id: "java-en-function-collections-shuffle"
language: "java"
lang: "en"
category: "function"
name: "Collections.shuffle"
signature: "public static void shuffle(List<?> list)"
title: "Collections.shuffle"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.shuffle

```java
public static void shuffle(List<?> list)
```

Randomly permutes the specified list using a default source of
 randomness.  All permutations occur with approximately equal
 likelihood.

 

The hedge "approximately" is used in the foregoing description because
 default source of randomness is only approximately an unbiased source
 of independently chosen bits. If it were a perfect source of randomly
 chosen bits, then the algorithm would choose permutations with perfect
 uniformity.

 

This implementation traverses the list backwards, from the last
 element up to the second, repeatedly swapping a randomly selected element
 into the "current position".  Elements are randomly selected from the
 portion of the list that runs from the first element to the current
 position, inclusive.

 not implement the `RandomAccess` interface and is large, this
 implementation dumps the specified list into an array before shuffling
 it, and dumps the shuffled array back into the list.  This avoids the
 quadratic behavior that would result from shuffling a "sequential
 access" list in place.

**参数**

- **list** — the list to be shuffled.

**异常**

- **UnsupportedOperationException** — if the specified list or its list-iterator does not support the `set` operation.
