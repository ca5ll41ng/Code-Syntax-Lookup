---
id: "java-en-function-query-initialsubstring"
language: "java"
lang: "en"
category: "function"
name: "Query.initialSubString"
signature: "public static QueryExp initialSubString(AttributeValueExp a, StringValueExp s)"
title: "Query.initialSubString"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.initialSubString

```java
public static QueryExp initialSubString(AttributeValueExp a, StringValueExp s)
```

Returns a query expression that represents a matching constraint on
 a string argument. The value must start with the given literal string
 value.

**参数**

- **a** — An attribute expression.
- **s** — A string value expression representing the beginning of the string value.

**返回**

- The constraint that a matches s.  The returned object will be serialized as an instance of the non-public class   javax.management.MatchQueryExp.
