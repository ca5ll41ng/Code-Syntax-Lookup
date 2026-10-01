---
id: "java-en-function-string-indexof"
language: "java"
lang: "en"
category: "function"
name: "String.indexOf"
signature: "public int indexOf(int ch)"
title: "String.indexOf"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.indexOf

```java
public int indexOf(int ch)
```

Returns the index within this string of the first occurrence of
 the specified character. If a character with value
 `ch` occurs in the character sequence represented by
 this `String` object, then the index (in Unicode
 code units) of the first such occurrence is returned. For
 values of `ch` in the range from 0 to 0xFFFF
 (inclusive), this is the smallest value k such that:
 
```

 this.charAt(k) == ch
 
```

 is true. For other values of `ch`, it is the
 smallest value k such that:
 
```

 this.codePointAt(k) == ch
 
```

 is true. In either case, if no such character occurs in this
 string, then `-1` is returned.

**参数**

- **ch** — a character (Unicode code point).

**返回**

- the index of the first occurrence of the character in the character sequence represented by this object, or `-1` if the character does not occur.
