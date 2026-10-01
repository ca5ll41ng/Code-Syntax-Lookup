---
id: "java-en-function-query-anysubstring"
language: "java"
lang: "en"
category: "function"
name: "Query.anySubString"
signature: "public static QueryExp anySubString(AttributeValueExp a, StringValueExp s)"
title: "Query.anySubString"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.anySubString

```java
public static QueryExp anySubString(AttributeValueExp a, StringValueExp s)
```

Returns a query expression that represents a matching constraint on
 a string argument. The value must contain the given literal string
 value.

**参数**

- **a** — An attribute expression.
- **s** — A string value expression representing the substring.

**返回**

- The constraint that a matches s.  The returned object will be serialized as an instance of the non-public class   javax.management.MatchQueryExp.
