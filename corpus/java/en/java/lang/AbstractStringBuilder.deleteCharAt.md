---
id: "java-en-function-abstractstringbuilder-deletecharat"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.deleteCharAt"
signature: "public AbstractStringBuilder deleteCharAt(int index)"
title: "AbstractStringBuilder.deleteCharAt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.deleteCharAt

```java
public AbstractStringBuilder deleteCharAt(int index)
```

Removes the `char` at the specified position in this
 sequence. This sequence is shortened by one `char`.

 

Note: If the character at the given index is a supplementary
 character, this method does not remove the entire character. If
 correct handling of supplementary characters is required,
 determine the number of `char`s to remove by calling
 `Character.charCount(thisSequence.codePointAt(index))`,
 where `thisSequence` is this sequence.

**参数**

- **index** — Index of `char` to remove

**返回**

- This object.

**异常**

- **StringIndexOutOfBoundsException** — if the `index` is negative or greater than or equal to `length()`.
