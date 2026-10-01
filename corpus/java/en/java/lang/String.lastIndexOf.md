---
id: "java-en-function-string-lastindexof"
language: "java"
lang: "en"
category: "function"
name: "String.lastIndexOf"
signature: "public int lastIndexOf(int ch)"
title: "String.lastIndexOf"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.lastIndexOf

```java
public int lastIndexOf(int ch)
```

Returns the index within this string of the last occurrence of
 the specified character. For values of `ch` in the
 range from 0 to 0xFFFF (inclusive), the index (in Unicode code
 units) returned is the largest value k such that:
 
```

 this.charAt(k) == ch
 
```

 is true. For other values of `ch`, it is the
 largest value k such that:
 
```

 this.codePointAt(k) == ch
 
```

 is true.  In either case, if no such character occurs in this
 string, then `-1` is returned.  The
 `String` is searched backwards starting at the last
 character.

**参数**

- **ch** — a character (Unicode code point).

**返回**

- the index of the last occurrence of the character in the character sequence represented by this object, or `-1` if the character does not occur.
