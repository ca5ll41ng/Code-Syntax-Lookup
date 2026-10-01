---
id: "java-en-function-matchresult-group"
language: "java"
lang: "en"
category: "function"
name: "MatchResult.group"
signature: "String group()"
title: "MatchResult.group"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/MatchResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchResult.group

```java
String group()
```

Returns the input subsequence matched by the previous match.

 

 For a matcher m with input sequence s,
 the expressions m.`group()` and
 s.`substring(`m.`start(),`&nbsp;m.`end())`
 are equivalent.  

 

 Note that some patterns, for example `a*`, match the empty
 string.  This method will return the empty string when the pattern
 successfully matches the empty string in the input.

**返回**

- The (possibly empty) subsequence matched by the previous match, in string form

**异常**

- **IllegalStateException** — If no match has yet been attempted, or if the previous match operation failed
