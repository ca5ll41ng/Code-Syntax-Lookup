---
id: "java-en-function-attributevalueexp-setmbeanserver"
language: "java"
lang: "en"
category: "function"
name: "AttributeValueExp.setMBeanServer"
signature: "public void setMBeanServer(MBeanServer s)"
title: "AttributeValueExp.setMBeanServer"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeValueExp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeValueExp.setMBeanServer

```java
public void setMBeanServer(MBeanServer s)
```

Sets the MBean server on which the query is to be performed.

**参数**

- **s** — The MBean server on which the query is to be performed.

> **⚠ Deprecated** — This method has no effect.  The MBean Server used to obtain an attribute value is `getMBeanServer`.
