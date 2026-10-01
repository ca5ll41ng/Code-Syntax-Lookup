---
id: "java-en-function-xmlfilterimpl-setproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.setProperty"
signature: "public void setProperty (String name, Object value) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "XMLFilterImpl.setProperty"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.setProperty

```java
public void setProperty (String name, Object value) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set the value of a property.

 

This will always fail if the parent is null.

**参数**

- **name** — The property name.
- **value** — The requested property value.

**异常**

- **org.xml.sax.SAXNotRecognizedException** — If the property value can't be assigned or retrieved from the parent.
- **org.xml.sax.SAXNotSupportedException** — When the parent recognizes the property name but cannot set the requested value.
