---
id: "java-en-function-stringvalueexp-apply"
language: "java"
lang: "en"
category: "function"
name: "StringValueExp.apply"
signature: "public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "StringValueExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StringValueExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringValueExp.apply

```java
public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the ValueExp on a MBean.

**参数**

- **name** — The name of the MBean on which the ValueExp will be applied.

**返回**

- The ValueExp.

**异常**

- **BadStringOperationException** — {@inheritDoc}
- **BadBinaryOpValueExpException** — {@inheritDoc}
- **BadAttributeValueExpException** — {@inheritDoc}
- **InvalidApplicationException** — {@inheritDoc}
