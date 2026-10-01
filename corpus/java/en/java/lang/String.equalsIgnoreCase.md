---
id: "java-en-function-string-equalsignorecase"
language: "java"
lang: "en"
category: "function"
name: "String.equalsIgnoreCase"
signature: "public boolean equalsIgnoreCase(String anotherString)"
title: "String.equalsIgnoreCase"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.equalsIgnoreCase

```java
public boolean equalsIgnoreCase(String anotherString)
```

Compares this `String` to another `String`, ignoring case
 considerations.  Two strings are considered equal ignoring case if they
 are of the same length and corresponding Unicode code points in the two
 strings are equal ignoring case.

 

 Two Unicode code points are considered the same
 ignoring case if at least one of the following is true:
 
   
-  The two Unicode code points are the same (as compared by the
        `==` operator)
   
-  Calling `Character.toLowerCase(Character.toUpperCase(int))`
        on each Unicode code point produces the same result
 

 

Note that this method does not take locale into account, and
 will result in unsatisfactory results for certain locales.  The
 `java.text.Collator` class provides locale-sensitive comparison.

**参数**

- **anotherString** — The `String` to compare this `String` against

**返回**

- `true` if the argument is not `null` and it represents an equivalent `String` ignoring case; `false` otherwise

**参见**

- #equals(Object)
- #equalsFoldCase(String)
- #codePoints()
