---
id: "java-en-function-string-hashcode"
language: "java"
lang: "en"
category: "function"
name: "String.hashCode"
signature: "public int hashCode()"
title: "String.hashCode"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.hashCode

```java
public int hashCode()
```

Returns a hash code for this string. The hash code for a
 `String` object is computed as
 
```

 s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
 
```

 using `int` arithmetic, where `s[i]` is the
 ith character of the string, `n` is the length of
 the string, and `^` indicates exponentiation.
 (The hash value of the empty string is zero.)

**返回**

- a hash code value for this object.
