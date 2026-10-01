---
id: "java-en-function-matchqueryexp-apply"
language: "java"
lang: "en"
category: "function"
name: "MatchQueryExp.apply"
signature: "public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException"
title: "MatchQueryExp.apply"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MatchQueryExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchQueryExp.apply

```java
public boolean apply(ObjectName name) throws BadStringOperationException, BadBinaryOpValueExpException, BadAttributeValueExpException, InvalidApplicationException
```

Applies the MatchQueryExp on a MBean.

**参数**

- **name** — The name of the MBean on which the MatchQueryExp will be applied.

**返回**

- True if the query was successfully applied to the MBean, false otherwise.

**异常**

- BadStringOperationException
- BadBinaryOpValueExpException
- BadAttributeValueExpException
- InvalidApplicationException
