---
id: "java-en-function-abstractstringbuilder-replace"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.replace"
signature: "public AbstractStringBuilder replace(int start, int end, String str)"
title: "AbstractStringBuilder.replace"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.replace

```java
public AbstractStringBuilder replace(int start, int end, String str)
```

Replaces the characters in a substring of this sequence
 with characters in the specified `String`. The substring
 begins at the specified `start` and extends to the character
 at index `end - 1` or to the end of the
 sequence if no such character exists. First the
 characters in the substring are removed and then the specified
 `String` is inserted at `start`. (This
 sequence will be lengthened to accommodate the
 specified String if necessary.)

**参数**

- **start** — The beginning index, inclusive.
- **end** — The ending index, exclusive.
- **str** — String that will replace previous contents.

**返回**

- This object.

**异常**

- **StringIndexOutOfBoundsException** — if `start` is negative, greater than `length()`, or greater than `end`.
