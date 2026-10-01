---
id: "java-en-function-requiredmodelmbean-setattributes"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.setAttributes"
signature: "public AttributeList setAttributes(AttributeList attributes)"
title: "RequiredModelMBean.setAttributes"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.setAttributes

```java
public AttributeList setAttributes(AttributeList attributes)
```

Sets the values of an array of attributes of this ModelMBean.
 Executes the setAttribute() method for each attribute in the list.

**参数**

- **attributes** — A list of attributes: The identification of the attributes to be set and  the values they are to be set to.

**返回**

- The array of attributes that were set, with their new values in Attribute instances.

**异常**

- **RuntimeOperationsException** — Wraps an `IllegalArgumentException`: The object name in parameter is null or attributes in parameter is null.

**参见**

- #getAttributes
