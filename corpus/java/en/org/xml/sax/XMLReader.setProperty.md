---
id: "java-en-function-xmlreader-setproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLReader.setProperty"
signature: "public void setProperty (String name, Object value) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "XMLReader.setProperty"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader.setProperty

```java
public void setProperty (String name, Object value) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set the value of a property.

 

The property name is any fully-qualified URI.  It is
 possible for an XMLReader to recognize a property name but
 to be unable to change the current value.
 Some property values may be immutable or mutable only
 in specific contexts, such as before, during, or after
 a parse.

 

XMLReaders are not required to recognize setting
 any specific property names, though a core set is defined by
 SAX2.

 

This method is also the standard mechanism for setting
 extended handlers.

**参数**

- **name** — The property name, which is a fully-qualified URI.
- **value** — The requested value for the property.

**异常**

- **org.xml.sax.SAXNotRecognizedException** — If the property value can't be assigned or retrieved.
- **org.xml.sax.SAXNotSupportedException** — When the XMLReader recognizes the property name but cannot set the requested value.
