---
id: "java-en-function-string-intern"
language: "java"
lang: "en"
category: "function"
name: "String.intern"
signature: "public native String intern()"
title: "String.intern"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.intern

```java
public native String intern()
```

Returns a canonical representation for the string object.
 

 A pool of strings, initially empty, is maintained privately by the
 class `String`.
 

 When the intern method is invoked, if the pool already contains a
 string equal to this `String` object as determined by
 the `equals` method, then the string from the pool is
 returned. Otherwise, this `String` object is added to the
 pool and a reference to this `String` object is returned.
 

 It follows that for any two strings `s` and `t`,
 `s.intern() == t.intern()` is `true`
 if and only if `s.equals(t)` is `true`.
 

 All literal strings and string-valued constant expressions are
 interned. String literals are defined in section {@jls 3.10.5} of the
 The Java Language Specification.

**返回**

- a string that has the same contents as this string, but is guaranteed to be from a pool of unique strings.
