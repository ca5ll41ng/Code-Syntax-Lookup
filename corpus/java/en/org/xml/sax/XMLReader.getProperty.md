---
id: "java-en-function-xmlreader-getproperty"
language: "java"
lang: "en"
category: "function"
name: "XMLReader.getProperty"
signature: "public Object getProperty (String name) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "XMLReader.getProperty"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/XMLReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReader.getProperty

```java
public Object getProperty (String name) throws SAXNotRecognizedException, SAXNotSupportedException
```

Look up the value of a property.

 

The property name is any fully-qualified URI.  It is
 possible for an XMLReader to recognize a property name but
 temporarily be unable to return its value.
 Some property values may be available only in specific
 contexts, such as before, during, or after a parse.

 

XMLReaders are not required to recognize any specific
 property names, though an initial core set is documented for
 SAX2.

 

Implementors are free (and encouraged) to invent their own properties,
 using names built on their own URIs.

**参数**

- **name** — The property name, which is a fully-qualified URI.

**返回**

- The current value of the property.

**异常**

- **org.xml.sax.SAXNotRecognizedException** — If the property value can't be assigned or retrieved.
- **org.xml.sax.SAXNotSupportedException** — When the XMLReader recognizes the property name but cannot determine its value at this time.

**参见**

- #setProperty
