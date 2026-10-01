---
id: "java-en-function-charsequence-getchars"
language: "java"
lang: "en"
category: "function"
name: "CharSequence.getChars"
signature: "public default void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)"
title: "CharSequence.getChars"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/CharSequence.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharSequence.getChars

```java
public default void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)
```

Copies characters from this sequence into the given destination array.
 The first character to be copied is at index `srcBegin`; the last
 character to be copied is at index `srcEnd-1`. The total number of
 characters to be copied is `srcEnd-srcBegin`. The
 characters are copied into the subarray of `dst` starting
 at index `dstBegin` and ending at index:
 
```
`dstbegin + (srcEnd-srcBegin) - 1
 `
```

 The default implementation invokes `charAt` in a loop
 iterating `index` from `srcBegin` to `srcEnd-1`.
 Concurrent truncation of this character sequence can throw
 `IndexOutOfBoundsException`. In this case, some characters, but not
 all, may be already transferred.

**参数**

- **srcBegin** — start copying at this offset.
- **srcEnd** — stop copying at this offset.
- **dst** — the array to copy the data into.
- **dstBegin** — offset into `dst`.

**异常**

- **IndexOutOfBoundsException** — if any of the following is true:   - `srcBegin` is negative  - `dstBegin` is negative  - the `srcBegin` argument is greater than the `srcEnd` argument.  - `srcEnd` is greater than `this.length()`.  - `dstBegin+srcEnd-srcBegin` is greater than `dst.length`
- **NullPointerException** — if `dst` is `null`

> *Since 25*
