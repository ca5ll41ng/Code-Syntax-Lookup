---
id: "java-en-function-stringjoiner-add"
language: "java"
lang: "en"
category: "function"
name: "StringJoiner.add"
signature: "public StringJoiner add(CharSequence newElement)"
title: "StringJoiner.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringJoiner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringJoiner.add

```java
public StringJoiner add(CharSequence newElement)
```

Adds a copy of the given `CharSequence` value as the next
 element of the `StringJoiner` value. If `newElement` is
 `null`, then `"null"` is added.

**参数**

- **newElement** — The element to add

**返回**

- a reference to this `StringJoiner`
