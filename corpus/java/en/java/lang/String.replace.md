---
id: "java-en-function-string-replace"
language: "java"
lang: "en"
category: "function"
name: "String.replace"
signature: "public String replace(char oldChar, char newChar)"
title: "String.replace"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.replace

```java
public String replace(char oldChar, char newChar)
```

Returns a string resulting from replacing all occurrences of
 `oldChar` in this string with `newChar`.
 

 If the character `oldChar` does not occur in the
 character sequence represented by this `String` object,
 then a reference to this `String` object is returned.
 Otherwise, a `String` object is returned that
 represents a character sequence identical to the character sequence
 represented by this `String` object, except that every
 occurrence of `oldChar` is replaced by an occurrence
 of `newChar`.
 

 Examples:
 
```

 "mesquite in your cellar".replace('e', 'o')
         returns "mosquito in your collar"
 "the war of baronets".replace('r', 'y')
         returns "the way of bayonets"
 "sparring with a purple porpoise".replace('p', 't')
         returns "starring with a turtle tortoise"
 "JonL".replace('q', 'x') returns "JonL" (no change)
 
```

**参数**

- **oldChar** — the old character.
- **newChar** — the new character.

**返回**

- a string derived from this string by replacing every occurrence of `oldChar` with `newChar`.
