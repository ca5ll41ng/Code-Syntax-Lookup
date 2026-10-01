---
id: "java-en-function-javax-xml-validation-schemafactory"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.validation.SchemaFactory"
title: "SchemaFactory"
directive: "type"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/SchemaFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SchemaFactory

Factory that creates `Schema` objects. Entry-point to
 the validation API.

 

 `SchemaFactory` is a schema compiler. It reads external
 representations of schemas and prepares them for validation.

 

 The `SchemaFactory` class is not thread-safe. In other words,
 it is the application's responsibility to ensure that at most
 one thread is using a `SchemaFactory` object at any
 given moment. Implementations are encouraged to mark methods
 as `synchronized` to protect themselves from broken clients.

 

 `SchemaFactory` is not re-entrant. While one of the
 `newSchema` methods is being invoked, applications
 may not attempt to recursively invoke the `newSchema` method,
 even from the same thread.

 Schema Language
 

 This spec uses a namespace URI to designate a schema language.
 The following table shows the values defined by this specification.
 

 To be compliant with the spec, the implementation
 is only required to support W3C XML Schema 1.0. However,
 if it chooses to support other schema languages listed here,
 it must conform to the relevant behaviors described in this spec.

 

 Schema languages not listed here are expected to
 introduce their own URIs to represent themselves.
 The `SchemaFactory` class is capable of locating other
 implementations for other schema languages at run-time.

 

 Note that because the XML DTD is strongly tied to the parsing process
 and has a significant effect on the parsing process, it is impossible
 to define the DTD validation as a process independent from parsing.
 For this reason, this specification does not define the semantics for
 the XML DTD. This doesn't prohibit implementors from implementing it
 in a way they see fit, but users are warned that any DTD
 validation implemented on this interface necessarily deviate from
 the XML DTD semantics as defined in the XML 1.0.

 
   URIs for Supported Schema languages
   
     
       value
       language
     
   
   
     
       `W3C_XML_SCHEMA_NS_URI` ("`http://www.w3.org/2001/XMLSchema`")
       W3C XML Schema 1.0
     
     
       `RELAXNG_NS_URI` ("`http://relaxng.org/ns/structure/1.0`")
       RELAX NG 1.0

> *Since 1.5*
