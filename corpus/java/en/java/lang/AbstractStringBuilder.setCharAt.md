---
id: "java-en-function-abstractstringbuilder-setcharat"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.setCharAt"
signature: "public void setCharAt(int index, char ch)"
title: "AbstractStringBuilder.setCharAt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.setCharAt

```java
public void setCharAt(int index, char ch)
```

The character at the specified index is set to `ch`. This
 sequence is altered to represent a new character sequence that is
 identical to the old character sequence, except that it contains the
 character `ch` at position `index`.
 

 The index argument must be greater than or equal to
 `0`, and less than the length of this sequence.

**参数**

- **index** — the index of the character to modify.
- **ch** — the new character.

**异常**

- **IndexOutOfBoundsException** — if `index` is negative or greater than or equal to `length()`.
