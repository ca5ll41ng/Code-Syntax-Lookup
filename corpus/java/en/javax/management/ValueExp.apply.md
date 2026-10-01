---
id: "java-en-function-valueexp-apply"
language: "java"
lang: "en"
category: "function"
name: "ValueExp.apply"
signature: "public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "ValueExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ValueExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueExp.apply

```java
public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the ValueExp on a MBean.

**参数**

- **name** — The name of the MBean on which the ValueExp will be applied.

**返回**

- The ValueExp.

**异常**

- **BadStringOperationException** — when an invalid string operation is passed to a method for constructing a query
- **BadBinaryOpValueExpException** — when an invalid expression is passed to a method for constructing a query
- **BadAttributeValueExpException** — when an invalid MBean attribute is passed to a query constructing method
- **InvalidApplicationException** — when an invalid apply is attempted
