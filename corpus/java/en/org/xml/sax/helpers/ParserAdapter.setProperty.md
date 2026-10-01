---
id: "java-en-function-parseradapter-setproperty"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.setProperty"
signature: "public void setProperty (String name, Object value) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "ParserAdapter.setProperty"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.setProperty

```java
public void setProperty (String name, Object value) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set a parser property.

 

No properties are currently recognized.

**参数**

- **name** — The property name.
- **value** — The property value.

**异常**

- **SAXNotRecognizedException** — If the property value can't be assigned or retrieved.
- **SAXNotSupportedException** — If the property can't be assigned that value.

**参见**

- org.xml.sax.XMLReader#setProperty
