---
id: "java-en-function-string-concat"
language: "java"
lang: "en"
category: "function"
name: "String.concat"
signature: "public String concat(String str)"
title: "String.concat"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.concat

```java
public String concat(String str)
```

Concatenates the specified string to the end of this string.
 

 If the length of the argument string is `0`, then this
 `String` object is returned. Otherwise, a
 `String` object is returned that represents a character
 sequence that is the concatenation of the character sequence
 represented by this `String` object and the character
 sequence represented by the argument string.

 Examples:
 
```

 "cares".concat("s") returns "caress"
 "to".concat("get").concat("her") returns "together"
 
```

**参数**

- **str** — the `String` that is concatenated to the end of this `String`.

**返回**

- a string that represents the concatenation of this object's characters followed by the string argument's characters.
