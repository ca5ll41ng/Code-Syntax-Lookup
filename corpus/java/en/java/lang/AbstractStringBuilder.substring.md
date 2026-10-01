---
id: "java-en-function-abstractstringbuilder-substring"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.substring"
signature: "public String substring(int start)"
title: "AbstractStringBuilder.substring"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.substring

```java
public String substring(int start)
```

Returns a `String` that contains a subsequence of
 characters currently contained in this character sequence. The
 substring begins at the specified index and extends to the end of
 this sequence.

**参数**

- **start** — The beginning index, inclusive.

**返回**

- A string containing the specified subsequence of characters.

**异常**

- **StringIndexOutOfBoundsException** — if `start` is less than zero, or greater than the length of this object.
