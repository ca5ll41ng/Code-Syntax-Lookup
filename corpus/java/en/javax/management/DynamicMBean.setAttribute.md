---
id: "java-en-function-dynamicmbean-setattribute"
language: "java"
lang: "en"
category: "function"
name: "DynamicMBean.setAttribute"
signature: "public void setAttribute(Attribute attribute) throws AttributeNotFoundException, InvalidAttributeValueException, MBeanException, ReflectionException"
title: "DynamicMBean.setAttribute"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/DynamicMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicMBean.setAttribute

```java
public void setAttribute(Attribute attribute) throws AttributeNotFoundException, InvalidAttributeValueException, MBeanException, ReflectionException
```

Set the value of a specific attribute of the Dynamic MBean.

**参数**

- **attribute** — The identification of the attribute to be set and  the value it is to be set to.

**异常**

- **AttributeNotFoundException** — if specified attribute does not exist or cannot be retrieved
- **InvalidAttributeValueException** — if value specified is not valid for the attribute
- **MBeanException** — Wraps a java.lang.Exception thrown by the MBean's setter.
- **ReflectionException** — Wraps a java.lang.Exception thrown while trying to invoke the MBean's setter.

**参见**

- #getAttribute
