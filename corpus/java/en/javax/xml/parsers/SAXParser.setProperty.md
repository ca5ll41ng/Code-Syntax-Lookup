---
id: "java-en-function-saxparser-setproperty"
language: "java"
lang: "en"
category: "function"
name: "SAXParser.setProperty"
signature: "public abstract void setProperty(String name, Object value) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "SAXParser.setProperty"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParser.setProperty

```java
public abstract void setProperty(String name, Object value) throws SAXNotRecognizedException, SAXNotSupportedException
```

Sets the particular property in the underlying implementation of
 `org.xml.sax.XMLReader`.
 A list of the core features and properties can be found at
 
 http://sax.sourceforge.net/?selected=get-set.
 

 All implementations that implement JAXP 1.5 or newer are required to
 support the `ACCESS_EXTERNAL_DTD` and
 `ACCESS_EXTERNAL_SCHEMA` properties.
 
 
   
- 
      

      Setting the `ACCESS_EXTERNAL_DTD` property
      restricts the access to external DTDs, external Entity References to
      the protocols specified by the property.  If access is denied during parsing
      due to the restriction of this property, `org.xml.sax.SAXException`
      will be thrown by the parse methods defined by `javax.xml.parsers.SAXParser`.
      
      

      Setting the `ACCESS_EXTERNAL_SCHEMA` property
      restricts the access to external Schema set by the schemaLocation attribute to
      the protocols specified by the property.  If access is denied during parsing
      due to the restriction of this property, `org.xml.sax.SAXException`
      will be thrown by the parse methods defined by the `javax.xml.parsers.SAXParser`.

**参数**

- **name** — The name of the property to be set.
- **value** — The value of the property to be set.

**异常**

- **SAXNotRecognizedException** — When the underlying XMLReader does not recognize the property name.
- **SAXNotSupportedException** — When the underlying XMLReader recognizes the property name but doesn't support the property.

**参见**

- org.xml.sax.XMLReader#setProperty
