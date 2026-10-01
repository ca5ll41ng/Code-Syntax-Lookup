---
id: "java-en-function-abstractstringbuilder-appendcodepoint"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.appendCodePoint"
signature: "public AbstractStringBuilder appendCodePoint(int codePoint)"
title: "AbstractStringBuilder.appendCodePoint"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.appendCodePoint

```java
public AbstractStringBuilder appendCodePoint(int codePoint)
```

Appends the string representation of the `codePoint`
 argument to this sequence.

 

 The argument is appended to the contents of this sequence.
 The length of this sequence increases by
 `charCount`.

 

 The overall effect is exactly as if the argument were
 converted to a `char` array by the method
 `toChars` and the character in that array
 were then `append(char[]) appended` to this character
 sequence.

**参数**

- **codePoint** — a Unicode code point

**返回**

- a reference to this object.

**异常**

- **IllegalArgumentException** — if the specified `codePoint` isn't a valid Unicode code point
