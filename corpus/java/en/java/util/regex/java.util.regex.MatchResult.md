---
id: "java-en-function-java-util-regex-matchresult"
language: "java"
lang: "en"
category: "function"
name: "java.util.regex.MatchResult"
title: "MatchResult"
directive: "type"
module: "java.base/java.util.regex"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/regex/MatchResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchResult

The result of a match operation.

 

This interface contains query methods used to determine the
 results of a match against a regular expression. The match boundaries,
 groups and group boundaries can be seen but not modified through
 a `MatchResult`.

 Support for named groups is implemented by the default methods
 `start`, `end` and `group`.
 They all make use of the map returned by `namedGroups`, whose
 default implementation simply throws `UnsupportedOperationException`.
 It is thus sufficient to override `namedGroups` for these methods
 to work. However, overriding them directly might be preferable for
 performance or other reasons.

**参见**

- Matcher

> *Since 1.5*
