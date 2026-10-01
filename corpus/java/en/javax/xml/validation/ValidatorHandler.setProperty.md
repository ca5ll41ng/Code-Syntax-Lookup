---
id: "java-en-function-validatorhandler-setproperty"
language: "java"
lang: "en"
category: "function"
name: "ValidatorHandler.setProperty"
signature: "public void setProperty(String name, Object object) throws SAXNotRecognizedException, SAXNotSupportedException"
title: "ValidatorHandler.setProperty"
directive: "method"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/ValidatorHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValidatorHandler.setProperty

```java
public void setProperty(String name, Object object) throws SAXNotRecognizedException, SAXNotSupportedException
```

Set the value of a property.

 

The property name is any fully-qualified URI.  It is
 possible for a `ValidatorHandler` to recognize a property name but
 to be unable to change the current value.
 Some property values may be immutable or mutable only
 in specific contexts, such as before, during, or after
 a validation.

 

`ValidatorHandler`s are not required to recognize setting
 any specific property names.

**参数**

- **name** — The property name, which is a non-null fully-qualified URI.
- **object** — The requested value for the property.

**异常**

- **SAXNotRecognizedException** — If the property value can't be assigned or retrieved.
- **SAXNotSupportedException** — When the `ValidatorHandler` recognizes the property name but cannot set the requested value.
- **NullPointerException** — When name is null.
