---
id: "java-en-function-xpathfactory-setproperty"
language: "java"
lang: "en"
category: "function"
name: "XPathFactory.setProperty"
signature: "public void setProperty(String name, String value)"
title: "XPathFactory.setProperty"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactory.setProperty

```java
public void setProperty(String name, String value)
```

Sets a property for this `XPathFactory`. The property applies to
 `XPath` objects that the `XPathFactory` creates. It has no
 impact on `XPath` objects that are already created.
 

 A property can either be defined in this `XPathFactory`, or by the
 underlying implementation.

 The default implementation throws
 `java.lang.UnsupportedOperationException`.

**参数**

- **name** — the property name
- **value** — the value for the property

**异常**

- **IllegalArgumentException** — if the property name is not recognized, or the value can not be assigned
- **UnsupportedOperationException** — if the implementation does not support the method
- **NullPointerException** — if the `name` is `null`

> *Since 18*
