---
id: "java-en-function-listformat-parseobject"
language: "java"
lang: "en"
category: "function"
name: "ListFormat.parseObject"
signature: "public Object parseObject(String source, ParsePosition parsePos)"
title: "ListFormat.parseObject"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ListFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ListFormat.parseObject

```java
public Object parseObject(String source, ParsePosition parsePos)
```

Parses text from a string to produce a list of strings.
 

 The method attempts to parse text starting at the index given by
 `parsePos`.
 If parsing succeeds, then the index of `parsePos` is updated
 to the index after the last character used (parsing does not necessarily
 use all characters up to the end of the string), and the parsed
 object is returned. The updated `parsePos` can be used to
 indicate the starting point for the next call to parse additional text.
 If an error occurs, then the index of `parsePos` is not
 changed, the error index of `parsePos` is set to the index of
 the character where the error occurred, and null is returned.
 See the `parse` method for more information
 on list parsing.

**参数**

- **source** — A string, part of which should be parsed.
- **parsePos** — A `ParsePosition` object with index and error index information as described above.

**返回**

- A list of string parsed from the `source`. In case of error, returns null.

**异常**

- **NullPointerException** — if `source` or `parsePos` is null.
- **IndexOutOfBoundsException** — if the starting index given by `parsePos` is outside `source`.
