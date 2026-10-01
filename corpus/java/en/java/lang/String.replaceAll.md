---
id: "java-en-function-string-replaceall"
language: "java"
lang: "en"
category: "function"
name: "String.replaceAll"
signature: "public String replaceAll(String regex, String replacement)"
title: "String.replaceAll"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.replaceAll

```java
public String replaceAll(String regex, String replacement)
```

Replaces each substring of this string that matches the given regular expression with the
 given replacement.

 

 An invocation of this method of the form
 str`.replaceAll(`regex`,` repl`)`
 yields exactly the same result as the expression

 
 
 `java.util.regex.Pattern`.`compile(String) compile`(regex).`matcher(java.lang.CharSequence) matcher`(str).`replaceAll(String) replaceAll`(repl)
 
 

 Note that backslashes (`\`) and dollar signs (`$`) in the
 replacement string may cause the results to be different than if it were
 being treated as a literal replacement string; see
 `replaceAll Matcher.replaceAll`.
 Use `quoteReplacement` to suppress the special
 meaning of these characters, if desired.

**参数**

- **regex** — the regular expression to which this string is to be matched
- **replacement** — the string to be substituted for each match

**返回**

- The resulting `String`

**异常**

- **PatternSyntaxException** — if the regular expression's syntax is invalid

**参见**

- java.util.regex.Pattern

> *Since 1.4*
