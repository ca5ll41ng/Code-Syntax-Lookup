---
id: "java-en-function-string-replacefirst"
language: "java"
lang: "en"
category: "function"
name: "String.replaceFirst"
signature: "public String replaceFirst(String regex, String replacement)"
title: "String.replaceFirst"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.replaceFirst

```java
public String replaceFirst(String regex, String replacement)
```

Replaces the first substring of this string that matches the given regular expression with the
 given replacement.

 

 An invocation of this method of the form
 str`.replaceFirst(`regex`,` repl`)`
 yields exactly the same result as the expression

 
 
 `java.util.regex.Pattern`.`compile(String) compile`(regex).`matcher(java.lang.CharSequence) matcher`(str).`replaceFirst(String) replaceFirst`(repl)
 
 

 Note that backslashes (`\`) and dollar signs (`$`) in the
 replacement string may cause the results to be different than if it were
 being treated as a literal replacement string; see
 `replaceFirst`.
 Use `quoteReplacement` to suppress the special
 meaning of these characters, if desired.

**参数**

- **regex** — the regular expression to which this string is to be matched
- **replacement** — the string to be substituted for the first match

**返回**

- The resulting `String`

**异常**

- **PatternSyntaxException** — if the regular expression's syntax is invalid

**参见**

- java.util.regex.Pattern

> *Since 1.4*
