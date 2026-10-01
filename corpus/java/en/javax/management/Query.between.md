---
id: "java-en-function-query-between"
language: "java"
lang: "en"
category: "function"
name: "Query.between"
signature: "public static QueryExp between(ValueExp v1, ValueExp v2, ValueExp v3)"
title: "Query.between"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.between

```java
public static QueryExp between(ValueExp v1, ValueExp v2, ValueExp v3)
```

Returns a query expression that represents the constraint that one
 value is between two other values.

**参数**

- **v1** — A value expression that is "between" v2 and v3.
- **v2** — Value expression that represents a boundary of the constraint.
- **v3** — Value expression that represents a boundary of the constraint.

**返回**

- The constraint that v1 lies between v2 and v3.  The returned object will be serialized as an instance of the non-public class  javax.management.BetweenQueryExp.
