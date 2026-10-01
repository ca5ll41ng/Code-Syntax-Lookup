---
id: "java-en-function-classattributevalueexp-apply"
language: "java"
lang: "en"
category: "function"
name: "ClassAttributeValueExp.apply"
signature: "public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "ClassAttributeValueExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ClassAttributeValueExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassAttributeValueExp.apply

```java
public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the ClassAttributeValueExp on an MBean. Returns the name of
 the Java implementation class of the MBean.

**参数**

- **name** — The name of the MBean on which the ClassAttributeValueExp will be applied.

**返回**

- The ValueExp.

**异常**

- BadAttributeValueExpException
- InvalidApplicationException
