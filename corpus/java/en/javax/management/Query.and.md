---
id: "java-en-function-query-and"
language: "java"
lang: "en"
category: "function"
name: "Query.and"
signature: "public static QueryExp and(QueryExp q1, QueryExp q2)"
title: "Query.and"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.and

```java
public static QueryExp and(QueryExp q1, QueryExp q2)
```

Returns a query expression that is the conjunction of two other query
 expressions.

**参数**

- **q1** — A query expression.
- **q2** — Another query expression.

**返回**

- The conjunction of the two arguments.  The returned object will be serialized as an instance of the non-public class  javax.management.AndQueryExp.
