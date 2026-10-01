---
id: "java-en-function-matcher-replaceall"
language: "java"
lang: "en"
category: "function"
name: "Matcher.replaceAll"
signature: "public String replaceAll(String replacement)"
title: "Matcher.replaceAll"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.replaceAll

```java
public String replaceAll(String replacement)
```

Replaces every subsequence of the input sequence that matches the
 pattern with the given replacement string.

 

 This method first resets this matcher.  It then scans the input
 sequence looking for matches of the pattern.  Characters that are not
 part of any match are appended directly to the result string; each match
 is replaced in the result by the replacement string.  The replacement
 string may contain references to captured subsequences as in the `appendReplacement appendReplacement` method.

 

 Note that backslashes (`\`) and dollar signs (`$`) in
 the replacement string may cause the results to be different than if it
 were being treated as a literal replacement string. Dollar signs may be
 treated as references to captured subsequences as described above, and
 backslashes are used to escape literal characters in the replacement
 string.

 

 Given the regular expression `a*b`, the input
 `"aabfooaabfooabfoob"`, and the replacement string
 `"-"`, an invocation of this method on a matcher for that
 expression would yield the string `"-foo-foo-foo-"`.

 

 Invoking this method changes this matcher's state.  If the matcher
 is to be used in further matching operations then it should first be
 reset.

**参数**

- **replacement** — The replacement string

**返回**

- The string constructed by replacing each matching subsequence by the replacement string, substituting captured subsequences as needed
