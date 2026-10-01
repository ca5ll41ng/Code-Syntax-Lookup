---
id: "java-en-function-documentbuilderfactory-setschema"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilderFactory.setSchema"
signature: "public void setSchema(Schema schema)"
title: "DocumentBuilderFactory.setSchema"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilderFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilderFactory.setSchema

```java
public void setSchema(Schema schema)
```

Set the `Schema` to be used by parsers created
 from this factory.

 

 When a `Schema` is non-null, a parser will use a validator
 created from it to validate documents before it passes information
 down to the application.

 

When errors are found by the validator, the parser is responsible
 to report them to the user-specified `org.xml.sax.ErrorHandler`
 (or if the error handler is not set, ignore them or throw them), just
 like any other errors found by the parser itself.
 In other words, if the user-specified `org.xml.sax.ErrorHandler`
 is set, it must receive those errors, and if not, they must be
 treated according to the implementation specific
 default error handling rules.

 

 A validator may modify the outcome of a parse (for example by
 adding default values that were missing in documents), and a parser
 is responsible to make sure that the application will receive
 modified DOM trees.

 

 Initially, null is set as the `Schema`.

 

 This processing will take effect even if
 the `isValidating` method returns `false`.

 

It is an error to use
 the `http://java.sun.com/xml/jaxp/properties/schemaSource`
 property and/or the `http://java.sun.com/xml/jaxp/properties/schemaLanguage`
 property in conjunction with a `Schema` object.
 Such configuration will cause a `ParserConfigurationException`
 exception when the `newDocumentBuilder` is invoked.

 Note for implementors

 

 A parser must be able to work with any `Schema`
 implementation. However, parsers and schemas are allowed
 to use implementation-specific custom mechanisms
 as long as they yield the result described in the specification.

**参数**

- **schema** — `Schema` to use or `null` to remove a schema.

**异常**

- **UnsupportedOperationException** — When implementation does not override this method.

> *Since 1.5*
