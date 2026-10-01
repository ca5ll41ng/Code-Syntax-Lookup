---
id: "java-en-function-query-match"
language: "java"
lang: "en"
category: "function"
name: "Query.match"
signature: "public static QueryExp match(AttributeValueExp a, StringValueExp s)"
title: "Query.match"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.match

```java
public static QueryExp match(AttributeValueExp a, StringValueExp s)
```

Returns a query expression that represents a matching constraint on
 a string argument. The matching syntax is consistent with file globbing:
 supports "?", "*", "[",
 each of which may be escaped with "\";
 character classes may use "!" for negation and
 "-" for range.
 (* for any character sequence,
 ? for a single arbitrary character,
 [...] for a character sequence).
 For example: a*b?c would match a string starting
 with the character a, followed
 by any number of characters, followed by a b,
 any single character, and a c.

**参数**

- **a** — An attribute expression
- **s** — A string value expression representing a matching constraint

**返回**

- A query expression that represents the matching constraint on the string argument.  The returned object will be serialized as an instance of the non-public class  javax.management.MatchQueryExp.
