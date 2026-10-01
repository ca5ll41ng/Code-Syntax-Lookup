---
id: "java-en-function-string-matches"
language: "java"
lang: "en"
category: "function"
name: "String.matches"
signature: "public boolean matches(String regex)"
title: "String.matches"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.matches

```java
public boolean matches(String regex)
```

Tells whether or not this string matches the given regular expression.

 

 An invocation of this method of the form
 str`.matches(`regex`)` yields exactly the
 same result as the expression

 
 `java.util.regex.Pattern`.`matches(String,CharSequence)
 matches`

**参数**

- **regex** — the regular expression to which this string is to be matched

**返回**

- `true` if, and only if, this string matches the given regular expression

**异常**

- **PatternSyntaxException** — if the regular expression's syntax is invalid

**参见**

- java.util.regex.Pattern

> *Since 1.4*
