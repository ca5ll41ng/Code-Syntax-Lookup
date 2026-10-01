---
id: "java-en-function-dateformat-parse"
language: "java"
lang: "en"
category: "function"
name: "DateFormat.parse"
signature: "public Date parse(String source) throws ParseException"
title: "DateFormat.parse"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/DateFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateFormat.parse

```java
public Date parse(String source) throws ParseException
```

Parses text from the beginning of the given string to produce a date.
 The method may not use the entire text of the given string.
 

 See the `parse` method for more information
 on date parsing.

**参数**

- **source** — A `String` whose beginning should be parsed.

**返回**

- A `Date` parsed from the string.

**异常**

- **ParseException** — if the beginning of the specified string cannot be parsed.
