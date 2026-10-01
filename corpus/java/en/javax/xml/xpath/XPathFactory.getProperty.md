---
id: "java-en-function-xpathfactory-getproperty"
language: "java"
lang: "en"
category: "function"
name: "XPathFactory.getProperty"
signature: "public String getProperty(String name)"
title: "XPathFactory.getProperty"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactory.getProperty

```java
public String getProperty(String name)
```

Returns the value of the specified property.

 The default implementation throws
 `java.lang.UnsupportedOperationException`.

**参数**

- **name** — the property name

**返回**

- the value of the property.

**异常**

- **IllegalArgumentException** — if the property name is not recognized
- **UnsupportedOperationException** — if the implementation does not support the method
- **NullPointerException** — if the `name` is `null`

> *Since 18*
