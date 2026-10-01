---
id: "java-en-function-matcher-results"
language: "java"
lang: "en"
category: "function"
name: "Matcher.results"
signature: "public Stream<MatchResult> results()"
title: "Matcher.results"
directive: "method"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/Matcher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Matcher.results

```java
public Stream<MatchResult> results()
```

Returns a stream of match results for each subsequence of the input
 sequence that matches the pattern.  The match results occur in the
 same order as the matching subsequences in the input sequence.

 

 Each match result is produced as if by `toMatchResult`.

 

 This method does not reset this matcher.  Matching starts on
 initiation of the terminal stream operation either at the beginning of
 this matcher's region, or, if the matcher has not since been reset, at
 the first character not matched by a previous match.

 

 If the matcher is to be used for further matching operations after
 the terminal stream operation completes then it should be first reset.

 

 This matcher's state should not be modified during execution of the
 returned stream's pipeline.  The returned stream's source
 `Spliterator` is fail-fast and will, on a best-effort
 basis, throw a `java.util.ConcurrentModificationException` if such
 modification is detected.

**返回**

- a sequential stream of match results.

> *Since 9*
