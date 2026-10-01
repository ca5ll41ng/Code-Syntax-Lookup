---
id: "java-en-function-string-substring"
language: "java"
lang: "en"
category: "function"
name: "String.substring"
signature: "public String substring(int beginIndex)"
title: "String.substring"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.substring

```java
public String substring(int beginIndex)
```

Returns a string that is a substring of this string. The
 substring begins with the character at the specified index and
 extends to the end of this string. 

 Examples:
 
```

 "unhappy".substring(2) returns "happy"
 "Harbison".substring(3) returns "bison"
 "emptiness".substring(9) returns "" (an empty string)
 
```

**参数**

- **beginIndex** — the beginning index, inclusive.

**返回**

- the specified substring.

**异常**

- **IndexOutOfBoundsException** — if `beginIndex` is negative or larger than the length of this `String` object.
