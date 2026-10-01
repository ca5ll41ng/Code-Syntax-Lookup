---
id: "java-en-function-query-not"
language: "java"
lang: "en"
category: "function"
name: "Query.not"
signature: "public static QueryExp not(QueryExp queryExp)"
title: "Query.not"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.not

```java
public static QueryExp not(QueryExp queryExp)
```

Returns a constraint that is the negation of its argument.

**参数**

- **queryExp** — The constraint to negate.

**返回**

- A negated constraint.  The returned object will be serialized as an instance of the non-public class  javax.management.NotQueryExp.
