---
id: "java-en-function-dynamicmbean-getattribute"
language: "java"
lang: "en"
category: "function"
name: "DynamicMBean.getAttribute"
signature: "public Object getAttribute(String attribute) throws AttributeNotFoundException, MBeanException, ReflectionException"
title: "DynamicMBean.getAttribute"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/DynamicMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicMBean.getAttribute

```java
public Object getAttribute(String attribute) throws AttributeNotFoundException, MBeanException, ReflectionException
```

Obtain the value of a specific attribute of the Dynamic MBean.

**参数**

- **attribute** — The name of the attribute to be retrieved

**返回**

- The value of the attribute retrieved.

**异常**

- **AttributeNotFoundException** — if specified attribute does not exist or cannot be retrieved
- **MBeanException** — Wraps a java.lang.Exception thrown by the MBean's getter.
- **ReflectionException** — Wraps a java.lang.Exception thrown while trying to invoke the getter.

**参见**

- #setAttribute
