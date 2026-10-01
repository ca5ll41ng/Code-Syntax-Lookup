---
id: "java-en-function-query-in"
language: "java"
lang: "en"
category: "function"
name: "Query.in"
signature: "public static QueryExp in(ValueExp val, ValueExp valueList[])"
title: "Query.in"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Query.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Query.in

```java
public static QueryExp in(ValueExp val, ValueExp valueList[])
```

Returns an expression constraining a value to be one of an explicit list.

**参数**

- **val** — A value to be constrained.
- **valueList** — An array of ValueExps.

**返回**

- A QueryExp that represents the constraint.  The returned object will be serialized as an instance of the non-public class  javax.management.InQueryExp.
