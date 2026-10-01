---
id: "java-en-function-abstractstringbuilder-delete"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.delete"
signature: "public AbstractStringBuilder delete(int start, int end)"
title: "AbstractStringBuilder.delete"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.delete

```java
public AbstractStringBuilder delete(int start, int end)
```

Removes the characters in a substring of this sequence.
 The substring begins at the specified `start` and extends to
 the character at index `end - 1` or to the end of the
 sequence if no such character exists. If
 `start` is equal to `end`, no changes are made.

**参数**

- **start** — The beginning index, inclusive.
- **end** — The ending index, exclusive.

**返回**

- This object.

**异常**

- **StringIndexOutOfBoundsException** — if `start` is negative, greater than `length()`, or greater than `end`.
