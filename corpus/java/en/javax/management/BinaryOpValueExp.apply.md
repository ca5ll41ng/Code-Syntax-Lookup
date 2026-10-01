---
id: "java-en-function-binaryopvalueexp-apply"
language: "java"
lang: "en"
category: "function"
name: "BinaryOpValueExp.apply"
signature: "public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "BinaryOpValueExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/BinaryOpValueExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BinaryOpValueExp.apply

```java
public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the BinaryOpValueExp on a MBean.

**参数**

- **name** — The name of the MBean on which the BinaryOpValueExp will be applied.

**返回**

- The ValueExp.

**异常**

- BadStringOperationException
- BadBinaryOpValueExpException
- BadAttributeValueExpException
- InvalidApplicationException
