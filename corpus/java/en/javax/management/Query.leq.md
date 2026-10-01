---
id: "java-en-function-query-leq"
language: "java"
lang: "en"
category: "function"
name: "Query.leq"
signature: "public static QueryExp leq(ValueExp v1, ValueExp v2)"
title: "Query.leq"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.leq

```java
public static QueryExp leq(ValueExp v1, ValueExp v2)
```

Returns a query expression that represents a "less than or equal to"
 constraint on two values.

**参数**

- **v1** — A value expression.
- **v2** — Another value expression.

**返回**

- A "less than or equal to" constraint on the arguments. The returned object will be serialized as an instance of the non-public class  javax.management.BinaryRelQueryExp with a `relOp` equal to `LE`.
