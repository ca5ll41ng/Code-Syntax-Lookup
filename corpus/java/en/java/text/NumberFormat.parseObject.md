---
id: "java-en-function-numberformat-parseobject"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.parseObject"
signature: "public final Object parseObject(String source, ParsePosition pos)"
title: "NumberFormat.parseObject"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.parseObject

```java
public final Object parseObject(String source, ParsePosition pos)
```

{@inheritDoc Format}

           pos)`.

**参数**

- **source** — the `String` to parse
- **pos** — A `ParsePosition` object with index and error index information as described above.

**返回**

- A `Number` parsed from the string. In case of error, returns null.

**异常**

- **NullPointerException** — if `source` or `pos` is null.
