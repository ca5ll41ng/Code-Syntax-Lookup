---
id: "java-en-function-listformat-format"
language: "java"
lang: "en"
category: "function"
name: "ListFormat.format"
signature: "public String format(List<String> input)"
title: "ListFormat.format"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ListFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListFormat.format

```java
public String format(List<String> input)
```

{@return the string that consists of the input strings, concatenated with the
 patterns of this `ListFormat`}
          or string sizes.

**参数**

- **input** — The list of input strings to format. There should at least one String element in this list, otherwise an `IllegalArgumentException` is thrown.

**异常**

- **IllegalArgumentException** — if the length of `input` is zero.
- **NullPointerException** — if `input` is null.
