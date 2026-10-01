---
id: "java-en-function-validator-setproperty"
language: "java"
lang: "en"
category: "function"
name: "Validator.setProperty"
signature: "public void setProperty(String name, Object object) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "Validator.setProperty"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/Validator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Validator.setProperty

```java
public void setProperty(String name, Object object) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set the value of a property.

 

The property name is any fully-qualified URI.  It is
 possible for a `Validator` to recognize a property name but
 to be unable to change the current value.
 Some property values may be immutable or mutable only
 in specific contexts, such as before, during, or after
 a validation.

 

 All implementations that implement JAXP 1.5 or newer are required to
 support the `ACCESS_EXTERNAL_DTD` and
 `ACCESS_EXTERNAL_SCHEMA` properties.

 
   
- 
      

Access to external DTDs in source or Schema file is restricted to
      the protocols specified by the `ACCESS_EXTERNAL_DTD`
      property.  If access is denied during validation due to the restriction
      of this property, `org.xml.sax.SAXException` will be thrown by the
      `validate` method.

      

Access to external reference set by the schemaLocation attribute is
      restricted to the protocols specified by the
      `ACCESS_EXTERNAL_SCHEMA` property.
      If access is denied during validation due to the restriction of this property,
      `org.xml.sax.SAXException` will be thrown by the
      `validate` method.

**参数**

- **name** — The property name, which is a non-null fully-qualified URI.
- **object** — The requested value for the property.

**异常**

- **SAXNotRecognizedException** — If the property value can't be assigned or retrieved.
- **SAXNotSupportedException** — When the `Validator` recognizes the property name but cannot set the requested value.
- **NullPointerException** — When the name parameter is null.
