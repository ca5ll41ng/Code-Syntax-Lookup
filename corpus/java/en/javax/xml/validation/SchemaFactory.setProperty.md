---
id: "java-en-function-schemafactory-setproperty"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.setProperty"
signature: "public void setProperty(String name, Object object) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "SchemaFactory.setProperty"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.setProperty

```java
public void setProperty(String name, Object object) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set the value of a property.

 

The property name is any fully-qualified URI. It is
 possible for a `SchemaFactory` to recognize a property name but
 to be unable to change the current value.

 

 All implementations that implement JAXP 1.5 or newer are required to
 support the `ACCESS_EXTERNAL_DTD` and
 `ACCESS_EXTERNAL_SCHEMA` properties.

 
   
- 
      

Access to external DTDs in Schema files is restricted to the protocols
      specified by the `ACCESS_EXTERNAL_DTD` property.
      If access is denied during the creation of new Schema due to the restriction
      of this property, `org.xml.sax.SAXException` will be thrown by the
      `newSchema` or `newSchema`
      or `newSchema` or `newSchema` method.

      

Access to external DTDs in xml source files is restricted to the protocols
      specified by the `ACCESS_EXTERNAL_DTD` property.
      If access is denied during validation due to the restriction
      of this property, `org.xml.sax.SAXException` will be thrown by the
      `validate` or
      `validate` method.

      

Access to external reference set by the schemaLocation attribute is
      restricted to the protocols specified by the
      `ACCESS_EXTERNAL_SCHEMA` property.
      If access is denied during validation due to the restriction of this property,
      `org.xml.sax.SAXException` will be thrown by the
      `validate` or
      `validate` method.

      

Access to external reference set by the Import
      and Include element is restricted to the protocols specified by the
      `ACCESS_EXTERNAL_SCHEMA` property.
      If access is denied during the creation of new Schema due to the restriction
      of this property, `org.xml.sax.SAXException` will be thrown by the
      `newSchema` or `newSchema`
      or `newSchema` or `newSchema` method.

**参数**

- **name** — The property name, which is a non-null fully-qualified URI.
- **object** — The requested value for the property.

**异常**

- **SAXNotRecognizedException** — If the property value can't be assigned or retrieved.
- **SAXNotSupportedException** — When the `SchemaFactory` recognizes the property name but cannot set the requested value.
- **NullPointerException** — If `name` is `null`.
