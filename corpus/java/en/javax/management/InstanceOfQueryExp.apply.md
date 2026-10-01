---
id: "java-en-function-instanceofqueryexp-apply"
language: "java"
lang: "en"
category: "function"
name: "InstanceOfQueryExp.apply"
signature: "public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "InstanceOfQueryExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/InstanceOfQueryExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstanceOfQueryExp.apply

```java
public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the InstanceOf on a MBean.

**参数**

- **name** — The name of the MBean on which the InstanceOf will be applied.

**返回**

- True if the MBean specified by the name is instance of the class.

**异常**

- BadAttributeValueExpException
- InvalidApplicationException
- BadStringOperationException
- BadBinaryOpValueExpException
