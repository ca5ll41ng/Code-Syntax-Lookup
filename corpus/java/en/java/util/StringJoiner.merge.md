---
id: "java-en-function-stringjoiner-merge"
language: "java"
lang: "en"
category: "function"
name: "StringJoiner.merge"
signature: "public StringJoiner merge(StringJoiner other)"
title: "StringJoiner.merge"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringJoiner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringJoiner.merge

```java
public StringJoiner merge(StringJoiner other)
```

Adds the contents of the given `StringJoiner` without prefix and
 suffix as the next element if it is non-empty. If the given `StringJoiner` is empty, the call has no effect.

 

A `StringJoiner` is empty if `add`
 has never been called, and if `merge()` has never been called
 with a non-empty `StringJoiner` argument.

 

If the other `StringJoiner` is using a different delimiter,
 then elements from the other `StringJoiner` are concatenated with
 that delimiter and the result is appended to this `StringJoiner`
 as a single element.

**参数**

- **other** — The `StringJoiner` whose contents should be merged into this one

**返回**

- This `StringJoiner`

**异常**

- **NullPointerException** — if the other `StringJoiner` is null
