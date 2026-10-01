---
id: "java-en-function-messageformat-parseobject"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.parseObject"
signature: "public Object parseObject(String source, ParsePosition pos)"
title: "MessageFormat.parseObject"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.parseObject

```java
public Object parseObject(String source, ParsePosition pos)
```

Parses text from a string to produce an object array.
 

 The method attempts to parse text starting at the index given by
 `pos`.
 If parsing succeeds, then the index of `pos` is updated
 to the index after the last character used (parsing does not necessarily
 use all characters up to the end of the string), and the parsed
 object array is returned. The updated `pos` can be used to
 indicate the starting point for the next call to this method.
 If an error occurs, then the index of `pos` is not
 changed, the error index of `pos` is set to the index of
 the character where the error occurred, and null is returned.
 

 See the `parse` method for more information
 on message parsing.

**参数**

- **source** — A `String`, part of which should be parsed.
- **pos** — A `ParsePosition` object with index and error index information as described above.

**返回**

- An `Object` array parsed from the string. In case of error, returns null.

**异常**

- **NullPointerException** — if `pos` is null.
