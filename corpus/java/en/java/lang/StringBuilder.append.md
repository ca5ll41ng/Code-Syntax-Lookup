---
id: "java-en-function-stringbuilder-append"
language: "java"
lang: "en"
category: "function"
name: "StringBuilder.append"
signature: "public StringBuilder append(StringBuffer sb)"
title: "StringBuilder.append"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringBuilder.append

```java
public StringBuilder append(StringBuffer sb)
```

Appends the specified `StringBuffer` to this sequence.
 

 The characters of the `StringBuffer` argument are appended,
 in order, to this sequence, increasing the
 length of this sequence by the length of the argument.
 If `sb` is `null`, then the four characters
 `"null"` are appended to this sequence.
 

 Let n be the length of this character sequence just prior to
 execution of the `append` method. Then the character at index
 k in the new character sequence is equal to the character at
 index k in the old character sequence, if k is less than
 n; otherwise, it is equal to the character at index k-n
 in the argument `sb`.

**参数**

- **sb** — the `StringBuffer` to append.

**返回**

- a reference to this object.
