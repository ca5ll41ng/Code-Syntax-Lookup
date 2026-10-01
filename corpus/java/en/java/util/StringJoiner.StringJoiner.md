---
id: "java-en-function-stringjoiner-stringjoiner"
language: "java"
lang: "en"
category: "function"
name: "StringJoiner.StringJoiner"
signature: "public StringJoiner(CharSequence delimiter)"
title: "StringJoiner.StringJoiner"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringJoiner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringJoiner.StringJoiner

```java
public StringJoiner(CharSequence delimiter)
```

Constructs a `StringJoiner` with no characters in it, with no
 `prefix` or `suffix`, and a copy of the supplied
 `delimiter`.
 If no characters are added to the `StringJoiner` and methods
 accessing the value of it are invoked, it will not return a
 `prefix` or `suffix` (or properties thereof) in the result,
 unless `setEmptyValue` has first been called.

**参数**

- **delimiter** — the sequence of characters to be used between each element added to the `StringJoiner` value

**异常**

- **NullPointerException** — if `delimiter` is `null`
