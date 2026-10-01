---
id: "java-en-function-pattern-literal"
language: "java"
lang: "en"
category: "function"
name: "Pattern.LITERAL"
signature: "public static final int LITERAL = 0x10"
title: "Pattern.LITERAL"
directive: "field"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.LITERAL

```java
public static final int LITERAL = 0x10
```

Enables literal parsing of the pattern.

 

 When this flag is specified then the input string that specifies
 the pattern is treated as a sequence of literal characters.
 Metacharacters or escape sequences in the input sequence will be
 given no special meaning.

 

The flags CASE_INSENSITIVE and UNICODE_CASE retain their impact on
 matching when used in conjunction with this flag. The other flags
 become superfluous.

 

 There is no embedded flag character for enabling literal parsing.

> *Since 1.5*
