---
id: "java-en-function-orqueryexp-apply"
language: "java"
lang: "en"
category: "function"
name: "OrQueryExp.apply"
signature: "public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "OrQueryExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/OrQueryExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OrQueryExp.apply

```java
public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the OrQueryExp on a MBean.

**参数**

- **name** — The name of the MBean on which the OrQueryExp will be applied.

**返回**

- True if the query was successfully applied to the MBean, false otherwise.

**异常**

- **BadStringOperationException** — The string passed to the method is invalid.
- **BadBinaryOpValueExpException** — The expression passed to the method is invalid.
- **BadAttributeValueExpException** — The attribute value passed to the method is invalid.
