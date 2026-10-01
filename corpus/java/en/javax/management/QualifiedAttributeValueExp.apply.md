---
id: "java-en-function-qualifiedattributevalueexp-apply"
language: "java"
lang: "en"
category: "function"
name: "QualifiedAttributeValueExp.apply"
signature: "public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "QualifiedAttributeValueExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/QualifiedAttributeValueExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# QualifiedAttributeValueExp.apply

```java
public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the QualifiedAttributeValueExp to an MBean.

**参数**

- **name** — The name of the MBean on which the QualifiedAttributeValueExp will be applied.

**返回**

- The ValueExp.

**异常**

- BadStringOperationException
- BadBinaryOpValueExpException
- BadAttributeValueExpException
- InvalidApplicationException
