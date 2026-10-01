---
id: "java-en-function-parseradapter-getproperty"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.getProperty"
signature: "public Object getProperty (String name) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "ParserAdapter.getProperty"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.getProperty

```java
public Object getProperty (String name) throws SAXNotRecognizedException, SAXNotSupportedException
```

Get a parser property.

 

No properties are currently recognized.

**参数**

- **name** — The property name.

**返回**

- The property value.

**异常**

- **SAXNotRecognizedException** — If the property value can't be assigned or retrieved.
- **SAXNotSupportedException** — If the property value is not currently readable.

**参见**

- org.xml.sax.XMLReader#getProperty
