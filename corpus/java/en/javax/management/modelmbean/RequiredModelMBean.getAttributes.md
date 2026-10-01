---
id: "java-en-function-requiredmodelmbean-getattributes"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.getAttributes"
signature: "public AttributeList getAttributes(String[] attrNames)"
title: "RequiredModelMBean.getAttributes"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.getAttributes

```java
public AttributeList getAttributes(String[] attrNames)
```

Returns the values of several attributes in the ModelMBean.
 Executes a getAttribute for each attribute name in the
 attrNames array passed in.

**参数**

- **attrNames** — A String array of names of the attributes to be retrieved.

**返回**

- The array of the retrieved attributes.

**异常**

- **RuntimeOperationsException** — Wraps an `IllegalArgumentException`: The object name in parameter is null or attributes in parameter is null.

**参见**

- #setAttributes(javax.management.AttributeList)
