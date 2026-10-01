---
id: "java-en-function-attributevalueexp-apply"
language: "java"
lang: "en"
category: "function"
name: "AttributeValueExp.apply"
signature: "public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "AttributeValueExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeValueExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeValueExp.apply

```java
public ValueExp apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the AttributeValueExp on an MBean.
 This method calls `getAttribute getAttribute` and wraps
 the result as a `ValueExp`.  The value returned by
 `getAttribute` must be a `Number`, `String`,
 or `Boolean`; otherwise this method throws a
 `BadAttributeValueExpException`, which will cause
 the containing query to be false for this `name`.

**参数**

- **name** — The name of the MBean on which the AttributeValueExp will be applied.

**返回**

- The ValueExp.

**异常**

- **BadStringOperationException** — {@inheritDoc}
- **BadBinaryOpValueExpException** — {@inheritDoc}
- **BadAttributeValueExpException** — {@inheritDoc}
- **InvalidApplicationException** — {@inheritDoc}
