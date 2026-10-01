---
id: "java-en-function-query-finalsubstring"
language: "java"
lang: "en"
category: "function"
name: "Query.finalSubString"
signature: "public static QueryExp finalSubString(AttributeValueExp a, StringValueExp s)"
title: "Query.finalSubString"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.finalSubString

```java
public static QueryExp finalSubString(AttributeValueExp a, StringValueExp s)
```

Returns a query expression that represents a matching constraint on
 a string argument. The value must end with the given literal string
 value.

**参数**

- **a** — An attribute expression.
- **s** — A string value expression representing the end of the string value.

**返回**

- The constraint that a matches s.  The returned object will be serialized as an instance of the non-public class   javax.management.MatchQueryExp.
