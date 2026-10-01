---
id: "java-en-function-dateformat-parseobject"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.parseObject"
signature: "public Object parseObject(String source, ParsePosition pos)"
title: "DateFormat.parseObject"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.parseObject

```java
public Object parseObject(String source, ParsePosition pos)
```

Parses text from a string to produce a `Date`.
 

 The method attempts to parse text starting at the index given by
 `pos`.
 If parsing succeeds, then the index of `pos` is updated
 to the index after the last character used (parsing does not necessarily
 use all characters up to the end of the string), and the parsed
 date is returned. The updated `pos` can be used to
 indicate the starting point for the next call to this method.
 If an error occurs, then the index of `pos` is not
 changed, the error index of `pos` is set to the index of
 the character where the error occurred, and null is returned.
 

 See the `parse` method for more information
 on date parsing.

**参数**

- **source** — A `String`, part of which should be parsed.
- **pos** — A `ParsePosition` object with index and error index information as described above.

**返回**

- A `Date` parsed from the string. In case of error, returns null.

**异常**

- **NullPointerException** — if `source` or `pos` is null.
