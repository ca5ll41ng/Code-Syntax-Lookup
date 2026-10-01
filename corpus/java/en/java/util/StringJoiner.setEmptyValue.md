---
id: "java-en-function-stringjoiner-setemptyvalue"
language: "java"
lang: "en"
category: "function"
name: "StringJoiner.setEmptyValue"
signature: "public StringJoiner setEmptyValue(CharSequence emptyValue)"
title: "StringJoiner.setEmptyValue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/StringJoiner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringJoiner.setEmptyValue

```java
public StringJoiner setEmptyValue(CharSequence emptyValue)
```

Sets the sequence of characters to be used when determining the string
 representation of this `StringJoiner` and no elements have been
 added yet, that is, when it is empty.  A copy of the `emptyValue`
 parameter is made for this purpose. Note that once an add method has been
 called, the `StringJoiner` is no longer considered empty, even if
 the element(s) added correspond to the empty `String`.

**参数**

- **emptyValue** — the characters to return as the value of an empty `StringJoiner`

**返回**

- this `StringJoiner` itself so the calls may be chained

**异常**

- **NullPointerException** — when the `emptyValue` parameter is `null`
