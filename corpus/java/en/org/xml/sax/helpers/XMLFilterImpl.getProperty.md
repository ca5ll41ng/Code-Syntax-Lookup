---
id: "java-en-function-xmlfilterimpl-getproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.getProperty"
signature: "public Object getProperty (String name) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "XMLFilterImpl.getProperty"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.getProperty

```java
public Object getProperty (String name) throws SAXNotRecognizedException, SAXNotSupportedException
```

Look up the value of a property.

**参数**

- **name** — The property name.

**返回**

- The current value of the property.

**异常**

- **org.xml.sax.SAXNotRecognizedException** — If the property value can't be assigned or retrieved from the parent.
- **org.xml.sax.SAXNotSupportedException** — When the parent recognizes the property name but cannot determine its value at this time.
