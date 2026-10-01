---
id: "java-en-function-format-parseobject"
language: "java"
lang: "en"
category: "function"
name: "Format.parseObject"
signature: "public abstract Object parseObject (String source, ParsePosition pos)"
title: "Format.parseObject"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Format.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Format.parseObject

```java
public abstract Object parseObject (String source, ParsePosition pos)
```

Parses text from the given string to produce an object.
 

 This method attempts to parse text starting at the index given by
 `pos`. If parsing succeeds, then the index of `pos` is updated
 to the index after the last character used (parsing does not necessarily
 use all characters up to the end of the string), and the parsed
 object is returned. The updated `pos` can be used to
 indicate the starting point for the next call to this method.
 If an error occurs, then the index of `pos` is not
 changed, the error index of `pos` is set to the index of
 the character where the error occurred, and `null` is returned.

**参数**

- **source** — the `String` to parse
- **pos** — A `ParsePosition` object with index and error index information as described above.

**返回**

- An `Object` parsed from the string. In case of error, returns `null`.

**异常**

- **NullPointerException** — if `source` or `pos` is `null`.
