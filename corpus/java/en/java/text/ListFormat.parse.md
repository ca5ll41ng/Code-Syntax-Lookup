---
id: "java-en-function-listformat-parse"
language: "java"
lang: "en"
category: "function"
name: "ListFormat.parse"
signature: "public List<String> parse(String source) throws ParseException"
title: "ListFormat.parse"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ListFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListFormat.parse

```java
public List<String> parse(String source) throws ParseException
```

{@return the parsed list of strings from the `source` string}

 Note that `format` and this method
 may not guarantee a round-trip, if the input strings contain ambiguous
 delimiters. For example, a two element String list `"a, b,", "c"` will be
 formatted as `"a, b, and c"`, but may be parsed as three elements
 `"a", "b", "c"`.

**参数**

- **source** — the string to parse, not null.

**异常**

- **ParseException** — if parse failed
- **NullPointerException** — if source is null
