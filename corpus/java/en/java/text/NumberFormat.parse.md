---
id: "java-en-function-numberformat-parse"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.parse"
signature: "public abstract Number parse(String source, ParsePosition parsePosition)"
title: "NumberFormat.parse"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.parse

```java
public abstract Number parse(String source, ParsePosition parsePosition)
```

Parses text from the beginning of the given string to produce a `Number`.
 

 This method attempts to parse text starting at the index given by the
 `ParsePosition`. If parsing succeeds, then the index of the `ParsePosition` is updated to the index after the last character used
 (parsing does not necessarily use all characters up to the end of the
 string), and the parsed number is returned. The updated `ParsePosition` can be used to indicate the starting
 point for the next call to this method. If an error occurs, then the
 index of the `ParsePosition` is not changed, the error index of the
 `ParsePosition` is set to the index of the character where the error
 occurred, and `null` is returned.
 

 This method will return a Long if possible (e.g., within the range [Long.MIN_VALUE,
 Long.MAX_VALUE] and with no decimals), otherwise a Double.

**参数**

- **source** — the `String` to parse
- **parsePosition** — A `ParsePosition` object with index and error index information as described above.

**返回**

- A `Number` parsed from the string. In case of failure, returns `null`.

**异常**

- **NullPointerException** — if `source` or `ParsePosition` is `null`.

**参见**

- #isStrict()
