---
id: "java-en-function-abstractstringbuilder-repeat"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.repeat"
signature: "public AbstractStringBuilder repeat(int codePoint, int count)"
title: "AbstractStringBuilder.repeat"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.repeat

```java
public AbstractStringBuilder repeat(int codePoint, int count)
```

Repeats `count` copies of the string representation of the
 `codePoint` argument to this sequence.
 

 The length of this sequence increases by `count` times the
 string representation length.
 

 It is usual to use `char` expressions for code points. For example:
 {@snippet lang="java":
 // insert 10 asterisks into the buffer
 sb.repeat('*', 10);
 }

**参数**

- **codePoint** — code point to append
- **count** — number of times to copy

**返回**

- a reference to this object.

**异常**

- **IllegalArgumentException** — if the specified `codePoint` is not a valid Unicode code point or if `count` is negative.

> *Since 21*
