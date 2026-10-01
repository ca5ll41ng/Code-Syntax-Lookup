---
id: "java-en-function-abstractstringbuilder-insert"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.insert"
signature: "public AbstractStringBuilder insert(int index, char[] str, int offset, int len)"
title: "AbstractStringBuilder.insert"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.insert

```java
public AbstractStringBuilder insert(int index, char[] str, int offset, int len)
```

Inserts the string representation of a subarray of the `str`
 array argument into this sequence. The subarray begins at the
 specified `offset` and extends `len` `char`s.
 The characters of the subarray are inserted into this sequence at
 the position indicated by `index`. The length of this
 sequence increases by `len` `char`s.

**参数**

- **index** — position at which to insert subarray.
- **str** — A `char` array.
- **offset** — the index of the first `char` in subarray to be inserted.
- **len** — the number of `char`s in the subarray to be inserted.

**返回**

- This object

**异常**

- **StringIndexOutOfBoundsException** — if `index` is negative or greater than `length()`, or `offset` or `len` are negative, or `(offset+len)` is greater than `str.length`.
