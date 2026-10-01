---
id: "java-en-function-charset-contains"
language: "java"
lang: "en"
category: "function"
name: "Charset.contains"
signature: "public abstract boolean contains(Charset cs)"
title: "Charset.contains"
directive: "method"
module: "java.base/java.nio.charset"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/Charset.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Charset.contains

```java
public abstract boolean contains(Charset cs)
```

Tells whether or not this charset contains the given charset.

 

 A charset C is said to contain a charset D if,
 and only if, every character representable in D is also
 representable in C.  If this relationship holds then it is
 guaranteed that every string that can be encoded in D can also be
 encoded in C without performing any replacements.

 

 That C contains D does not imply that each character
 representable in C by a particular byte sequence is represented
 in D by the same byte sequence, although sometimes this is the
 case.

 

 Every charset contains itself.

 

 This method computes an approximation of the containment relation:
 If it returns `true` then the given charset is known to be
 contained by this charset; if it returns `false`, however, then
 it is not necessarily the case that the given charset is not contained
 in this charset.

**参数**

- **cs** — The given charset

**返回**

- `true` if the given charset is contained in this charset
