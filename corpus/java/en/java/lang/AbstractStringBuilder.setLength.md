---
id: "java-en-function-abstractstringbuilder-setlength"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.setLength"
signature: "public void setLength(int newLength)"
title: "AbstractStringBuilder.setLength"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.setLength

```java
public void setLength(int newLength)
```

Sets the length of the character sequence.
 The sequence is changed to a new character sequence
 whose length is specified by the argument. For every nonnegative
 index k less than `newLength`, the character at
 index k in the new character sequence is the same as the
 character at index k in the old sequence if k is less
 than the length of the old character sequence; otherwise, it is the
 null character `'\u005Cu0000'`.

 In other words, if the `newLength` argument is less than
 the current length, the length is changed to the specified length.
 

 If the `newLength` argument is greater than or equal
 to the current length, sufficient null characters
 (`'\u005Cu0000'`) are appended so that
 length becomes the `newLength` argument.
 

 The `newLength` argument must be greater than or equal
 to `0`.

**参数**

- **newLength** — the new length

**异常**

- **IndexOutOfBoundsException** — if the `newLength` argument is negative.
