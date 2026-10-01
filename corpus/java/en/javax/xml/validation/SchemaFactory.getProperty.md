---
id: "java-en-function-schemafactory-getproperty"
language: "java"
lang: "en"
category: "function"
name: "SchemaFactory.getProperty"
signature: "public Object getProperty(String name) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "SchemaFactory.getProperty"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory.getProperty

```java
public Object getProperty(String name) throws SAXNotRecognizedException, SAXNotSupportedException
```

Look up the value of a property.

 

The property name is any fully-qualified URI.  It is
 possible for a `SchemaFactory` to recognize a property name but
 temporarily be unable to return its value.

 

`SchemaFactory`s are not required to recognize any specific
 property names.

 

Implementors are free (and encouraged) to invent their own properties,
 using names built on their own URIs.

**参数**

- **name** — The property name, which is a non-null fully-qualified URI.

**返回**

- The current value of the property.

**异常**

- **SAXNotRecognizedException** — If the property value can't be assigned or retrieved.
- **SAXNotSupportedException** — When the XMLReader recognizes the property name but cannot determine its value at this time.
- **NullPointerException** — If `name` is `null`.

**参见**

- #setProperty(String, Object)
