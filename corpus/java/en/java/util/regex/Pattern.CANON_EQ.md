---
id: "java-en-function-pattern-canon_eq"
language: "java"
lang: "en"
category: "function"
name: "Pattern.CANON_EQ"
signature: "public static final int CANON_EQ = 0x80"
title: "Pattern.CANON_EQ"
directive: "field"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Pattern.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Pattern.CANON_EQ

```java
public static final int CANON_EQ = 0x80
```

Enables canonical equivalence.

 

 When this flag is specified then two characters will be considered
 to match if, and only if, their full canonical decompositions match.
 The expression "a&#92;u030A", for example, will match the
 string "&#92;u00E5" when this flag is specified.  By default,
 matching does not take canonical equivalence into account.

 

 There is no embedded flag character for enabling canonical
 equivalence.

 

 Specifying this flag may impose a performance penalty
 and a moderate risk of memory exhaustion.
