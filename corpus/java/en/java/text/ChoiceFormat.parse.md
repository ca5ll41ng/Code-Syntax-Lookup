---
id: "java-en-function-choiceformat-parse"
language: "java"
lang: "en"
category: "function"
name: "ChoiceFormat.parse"
signature: "public Number parse(String text, ParsePosition status)"
title: "ChoiceFormat.parse"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ChoiceFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChoiceFormat.parse

```java
public Number parse(String text, ParsePosition status)
```

Parses the input text starting at the index given by the `ParsePosition`
 as a `Double`. The value returned is the `limit` corresponding
 to the `format` that is the longest substring of the input text.
 Matching is done in ascending order, when multiple `format`s match
 the text equivalently in strength, the first matching `limit` is
 returned. If there is no match, `Double.NaN` is returned.
 

 For example,
 {@snippet lang=java :
 var fmt = new ChoiceFormat("0#foo|1#bar|2#baz");
 fmt.parse("baz", new ParsePosition(0)); // returns 2.0
 fmt.parse("quux", new ParsePosition(0)); // returns NaN
 }

**参数**

- **text** — the source text.
- **status** — an input-output parameter.  On input, the status.index field indicates the first character of the source text that should be parsed.  On exit, if no error occurred, status.index is set to the first unparsed character in the source text.  On exit, if an error did occur, status.index is unchanged and status.errorIndex is set to the first index of the character that caused the parse to fail.

**返回**

- A Number which represents the `limit` corresponding to the `format` parsed, or `Double.NaN` if the parse fails.

**异常**

- **NullPointerException** — if `status` is `null` or if `text` is `null` and the list of choice strings is not empty.
