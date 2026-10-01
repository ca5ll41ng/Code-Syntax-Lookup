---
id: "java-en-function-saxparserfactory-setfeature"
language: "java"
lang: "en"
category: "function"
name: "SAXParserFactory.setFeature"
signature: "public abstract void setFeature(String name, boolean value) throws ParserConfigurationException, SAXNotRecognizedException, SAXNotSupportedException"
title: "SAXParserFactory.setFeature"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParserFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParserFactory.setFeature

```java
public abstract void setFeature(String name, boolean value) throws ParserConfigurationException, SAXNotRecognizedException, SAXNotSupportedException
```

Sets the particular feature in the underlying implementation of
 org.xml.sax.XMLReader.
 A list of the core features and properties can be found at
 http://www.saxproject.org/

 

All implementations are required to support the `FEATURE_SECURE_PROCESSING` feature.
 When the feature is
 
   
- 
     `true`: the implementation will limit XML processing to conform to implementation limits.
     Examples include entity expansion limits and XML Schema constructs that would consume large amounts of resources.
     If XML processing is limited for security reasons, it will be reported via a call to the registered
     `fatalError`.
     See `SAXParser` `parse` methods for handler specification.
   
   
- 
     When the feature is `false`, the implementation will processing XML according to the XML specifications without
     regard to possible implementation limits.

**参数**

- **name** — The name of the feature to be set.
- **value** — The value of the feature to be set.

**异常**

- **ParserConfigurationException** — if a parser cannot be created which satisfies the requested configuration.
- **SAXNotRecognizedException** — When the underlying XMLReader does not recognize the property name.
- **SAXNotSupportedException** — When the underlying XMLReader recognizes the property name but doesn't support the property.
- **NullPointerException** — If the `name` parameter is null.

**参见**

- org.xml.sax.XMLReader#setFeature
