---
id: "java-en-function-inqueryexp-apply"
language: "java"
lang: "en"
category: "function"
name: "InQueryExp.apply"
signature: "public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "InQueryExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/InQueryExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InQueryExp.apply

```java
public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the InQueryExp on a MBean.

**参数**

- **name** — The name of the MBean on which the InQueryExp will be applied.

**返回**

- True if the query was successfully applied to the MBean, false otherwise.

**异常**

- BadStringOperationException
- BadBinaryOpValueExpException
- BadAttributeValueExpException
- InvalidApplicationException
