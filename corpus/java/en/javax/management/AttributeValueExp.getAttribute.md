---
id: "java-en-function-attributevalueexp-getattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributeValueExp.getAttribute"
signature: "protected Object getAttribute(ObjectName name)"
title: "AttributeValueExp.getAttribute"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeValueExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeValueExp.getAttribute

```java
protected Object getAttribute(ObjectName name)
```

Return the value of the given attribute in the named MBean.
 If the attempt to access the attribute generates an exception,
 return null.

 

The MBean Server used is the one returned by `getMBeanServer`.

**参数**

- **name** — the name of the MBean whose attribute is to be returned.

**返回**

- the value of the attribute, or null if it could not be obtained.
