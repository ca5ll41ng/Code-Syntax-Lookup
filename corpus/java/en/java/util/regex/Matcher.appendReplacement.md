---
id: "java-en-function-matcher-appendreplacement"
language: "java"
lang: "en"
category: "function"
name: "Matcher.appendReplacement"
signature: "public Matcher appendReplacement(StringBuffer sb, String replacement)"
title: "Matcher.appendReplacement"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.appendReplacement

```java
public Matcher appendReplacement(StringBuffer sb, String replacement)
```

Implements a non-terminal append-and-replace step.

 

 This method performs the following actions: 

 

   
- 

 It reads characters from the input sequence, starting at the
   append position, and appends them to the given string buffer.  It
   stops after reading the last character preceding the previous match,
   that is, the character at index `start`&nbsp;`-`&nbsp;`1`.  

   
- 

 It appends the given replacement string to the string buffer.
   

   
- 

 It sets the append position of this matcher to the index of
   the last character matched, plus one, that is, to `end`.
   

 

 

 The replacement string may contain references to subsequences
 captured during the previous match: Each occurrence of
 ${name} or `$`g
 will be replaced by the result of evaluating the corresponding
 `group` or `group`
 respectively. For `$`g,
 the first number after the `$` is always treated as part of
 the group reference. Subsequent numbers are incorporated into g if
 they would form a legal group reference. Only the numerals '0'
 through '9' are considered as potential components of the group
 reference. If the second group matched the string `"foo"`, for
 example, then passing the replacement string `"$2bar"` would
 cause `"foobar"` to be appended to the string buffer. A dollar
 sign (`$`) may be included as a literal in the replacement
 string by preceding it with a backslash (`\$`).

 

 Note that backslashes (`\`) and dollar signs (`$`) in
 the replacement string may cause the results to be different than if it
 were being treated as a literal replacement string. Dollar signs may be
 treated as references to captured subsequences as described above, and
 backslashes are used to escape literal characters in the replacement
 string.

 

 This method is intended to be used in a loop together with the
 `appendTail(StringBuffer) appendTail` and `find() find`
 methods.  The following code, for example, writes `one dog two dogs
 in the yard` to the standard-output stream: 

 
```

 Pattern p = Pattern.compile("cat");
 Matcher m = p.matcher("one cat two cats in the yard");
 StringBuffer sb = new StringBuffer();
 while (m.find()) {
     m.appendReplacement(sb, "dog");
 }
 m.appendTail(sb);
 System.out.println(sb.toString());
```

**参数**

- **sb** — The target string buffer
- **replacement** — The replacement string

**返回**

- This matcher

**异常**

- **IllegalStateException** — If no match has yet been attempted, or if the previous match operation failed
- **IllegalArgumentException** — If the replacement string refers to a named-capturing group that does not exist in the pattern
- **IndexOutOfBoundsException** — If the replacement string refers to a capturing group that does not exist in the pattern
