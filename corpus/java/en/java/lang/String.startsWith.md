---
id: "java-en-function-string-startswith"
language: "java"
lang: "en"
category: "function"
name: "String.startsWith"
signature: "public boolean startsWith(String prefix, int toffset)"
title: "String.startsWith"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.startsWith

```java
public boolean startsWith(String prefix, int toffset)
```

Tests if the substring of this string beginning at the
 specified index starts with the specified prefix.

**参数**

- **prefix** — the prefix.
- **toffset** — where to begin looking in this string.

**返回**

- `true` if the character sequence represented by the argument is a prefix of the substring of this object starting at index `toffset`; `false` otherwise. The result is `false` if `toffset` is negative or greater than the length of this `String` object; otherwise the result is the same as the result of the expression  ```  this.substring(toffset).startsWith(prefix)  ```
