---
id: "java-en-function-modelmbeaninfo-getattribute"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.getAttribute"
signature: "public ModelMBeanAttributeInfo getAttribute(String inName) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfo.getAttribute"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.getAttribute

```java
public ModelMBeanAttributeInfo getAttribute(String inName) throws MBeanException, RuntimeOperationsException
```

Returns a ModelMBeanAttributeInfo requested by name.

**参数**

- **inName** — The name of the ModelMBeanAttributeInfo to get. If no ModelMBeanAttributeInfo exists for this name null is returned.

**返回**

- the attribute info for the named attribute, or null if there is none.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException for a null attribute name.
