---
id: "java-en-function-abstractstringbuilder-reverse"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.reverse"
signature: "public AbstractStringBuilder reverse()"
title: "AbstractStringBuilder.reverse"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.reverse

```java
public AbstractStringBuilder reverse()
```

Causes this character sequence to be replaced by the reverse of
 the sequence. If there are any surrogate pairs included in the
 sequence, these are treated as single characters for the
 reverse operation. Thus, the order of the high-low surrogates
 is never reversed.

 Let n be the character length of this character sequence
 (not the length in `char` values) just prior to
 execution of the `reverse` method. Then the
 character at index k in the new character sequence is
 equal to the character at index n-k-1 in the old
 character sequence.

 

Note that the reverse operation may result in producing
 surrogate pairs that were unpaired low-surrogates and
 high-surrogates before the operation. For example, reversing
 "\u005CuDC00\u005CuD800" produces "\u005CuD800\u005CuDC00" which is
 a valid surrogate pair.

**返回**

- a reference to this object.
