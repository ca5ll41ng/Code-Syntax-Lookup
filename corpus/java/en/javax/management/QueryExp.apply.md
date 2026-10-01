---
id: "java-en-function-queryexp-apply"
language: "java"
lang: "en"
category: "function"
name: "QueryExp.apply"
signature: "public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "QueryExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/QueryExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QueryExp.apply

```java
public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the QueryExp on an MBean.

**参数**

- **name** — The name of the MBean on which the QueryExp will be applied.

**返回**

- True if the query was successfully applied to the MBean, false otherwise

**异常**

- **BadStringOperationException** — when an invalid string operation is passed to a method for constructing a query
- **BadBinaryOpValueExpException** — when an invalid expression is passed to a method for constructing a query
- **BadAttributeValueExpException** — when an invalid MBean attribute is passed to a query constructing method
- **InvalidApplicationException** — when an invalid apply is attempted
