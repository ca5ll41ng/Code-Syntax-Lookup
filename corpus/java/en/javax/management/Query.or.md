---
id: "java-en-function-query-or"
language: "java"
lang: "en"
category: "function"
name: "Query.or"
signature: "public static QueryExp or(QueryExp q1, QueryExp q2)"
title: "Query.or"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.or

```java
public static QueryExp or(QueryExp q1, QueryExp q2)
```

Returns a query expression that is the disjunction of two other query
 expressions.

**参数**

- **q1** — A query expression.
- **q2** — Another query expression.

**返回**

- The disjunction of the two arguments.  The returned object will be serialized as an instance of the non-public class  javax.management.OrQueryExp.
