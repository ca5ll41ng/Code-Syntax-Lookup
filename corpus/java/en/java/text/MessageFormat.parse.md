---
id: "java-en-function-messageformat-parse"
language: "java"
lang: "en"
category: "function"
name: "MessageFormat.parse"
signature: "public Object[] parse(String source, ParsePosition pos)"
title: "MessageFormat.parse"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/MessageFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageFormat.parse

```java
public Object[] parse(String source, ParsePosition pos)
```

Parses the string.

 

Caveats: The parse may fail in a number of circumstances.
 For example:
 
 
- If one of the arguments does not occur in the pattern.
 
- If the format of an argument loses information, such as
     with a choice format where a large number formats to "many".
 
- Does not yet handle recursion (where
     the substituted strings contain {n} references.)
 
- Will not always find a match (or the correct match)
     if some part of the parse is ambiguous.
     For example, if the pattern "{1},{2}" is used with the
     string arguments {"a,b", "c"}, it will format as "a,b,c".
     When the result is parsed, it will return {"a", "b,c"}.
 
- If a single argument is parsed more than once in the string,
     then the later parse wins.
 

 When the parse fails, use ParsePosition.getErrorIndex() to find out
 where in the string the parsing failed.  The returned error
 index is the starting offset of the sub-patterns that the string
 is comparing with.  For example, if the parsing string "AAA {0} BBB"
 is comparing against the pattern "AAD {0} BBB", the error index is
 0. When an error occurs, the call to this method will return null.
 If the source is null, return an empty array.

**参数**

- **source** — the string to parse
- **pos** — the parse position

**返回**

- an array of parsed objects

**异常**

- **NullPointerException** — if `pos` is `null` for a non-null `source` string.
