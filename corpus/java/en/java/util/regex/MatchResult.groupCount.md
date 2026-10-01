---
id: "java-en-function-matchresult-groupcount"
language: "java"
lang: "en"
category: "function"
name: "MatchResult.groupCount"
signature: "int groupCount()"
title: "MatchResult.groupCount"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/MatchResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchResult.groupCount

```java
int groupCount()
```

Returns the number of capturing groups in this match result's pattern.

 

 Group zero denotes the entire pattern by convention. It is not
 included in this count.

 

 Any non-negative integer smaller than or equal to the value
 returned by this method is guaranteed to be a valid group index for
 this matcher.

**返回**

- The number of capturing groups in this matcher's pattern
