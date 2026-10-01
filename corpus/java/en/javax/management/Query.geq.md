---
id: "java-en-function-query-geq"
language: "java"
lang: "en"
category: "function"
name: "Query.geq"
signature: "public static QueryExp geq(ValueExp v1, ValueExp v2)"
title: "Query.geq"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.geq

```java
public static QueryExp geq(ValueExp v1, ValueExp v2)
```

Returns a query expression that represents a "greater than or equal
 to" constraint on two values.

**参数**

- **v1** — A value expression.
- **v2** — Another value expression.

**返回**

- A "greater than or equal to" constraint on the arguments.  The returned object will be serialized as an instance of the non-public class  javax.management.BinaryRelQueryExp with a `relOp` equal to `GE`.
