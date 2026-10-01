---
id: "java-en-function-saxparserfactory-getfeature"
language: "java"
lang: "en"
category: "function"
name: "SAXParserFactory.getFeature"
signature: "public abstract boolean getFeature(String name) throws ParserConfigurationException, SAXNotRecognizedException, SAXNotSupportedException"
title: "SAXParserFactory.getFeature"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParserFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParserFactory.getFeature

```java
public abstract boolean getFeature(String name) throws ParserConfigurationException, SAXNotRecognizedException, SAXNotSupportedException
```

Returns the particular property requested for in the underlying
 implementation of org.xml.sax.XMLReader.

**参数**

- **name** — The name of the property to be retrieved.

**返回**

- Value of the requested property.

**异常**

- **ParserConfigurationException** — if a parser cannot be created which satisfies the requested configuration.
- **SAXNotRecognizedException** — When the underlying XMLReader does not recognize the property name.
- **SAXNotSupportedException** — When the underlying XMLReader recognizes the property name but doesn't support the property.

**参见**

- org.xml.sax.XMLReader#getProperty
