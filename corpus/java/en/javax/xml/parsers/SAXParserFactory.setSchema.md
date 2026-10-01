---
id: "java-en-function-saxparserfactory-setschema"
language: "java"
lang: "en"
category: "function"
name: "SAXParserFactory.setSchema"
signature: "public void setSchema(Schema schema)"
title: "SAXParserFactory.setSchema"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParserFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParserFactory.setSchema

```java
public void setSchema(Schema schema)
```

Set the `Schema` to be used by parsers created
 from this factory.

 

When a `Schema` is non-null, a parser will use a validator
 created from it to validate documents before it passes information
 down to the application.

 

When warnings/errors/fatal errors are found by the validator, the parser must
 handle them as if those errors were found by the parser itself.
 In other words, if the user-specified `org.xml.sax.ErrorHandler`
 is set, it must receive those errors, and if not, they must be
 treated according to the implementation specific
 default error handling rules.

 

A validator may modify the SAX event stream (for example by
 adding default values that were missing in documents), and a parser
 is responsible to make sure that the application will receive
 those modified event stream.

 

Initially, `null` is set as the `Schema`.

 

This processing will take effect even if
 the `isValidating` method returns `false`.

 

It is an error to use
 the `http://java.sun.com/xml/jaxp/properties/schemaSource`
 property and/or the `http://java.sun.com/xml/jaxp/properties/schemaLanguage`
 property in conjunction with a non-null `Schema` object.
 Such configuration will cause a `SAXException`
 exception when those properties are set on a `SAXParser`.

 Note for implementors
 

 A parser must be able to work with any `Schema`
 implementation. However, parsers and schemas are allowed
 to use implementation-specific custom mechanisms
 as long as they yield the result described in the specification.

**参数**

- **schema** — `Schema` to use, `null` to remove a schema.

**异常**

- **UnsupportedOperationException** — When implementation does not override this method

> *Since 1.5*
