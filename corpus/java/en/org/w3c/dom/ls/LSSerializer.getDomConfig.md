---
id: "java-en-function-lsserializer-getdomconfig"
language: "java"
lang: "en"
category: "function"
name: "LSSerializer.getDomConfig"
signature: "public DOMConfiguration getDomConfig()"
title: "LSSerializer.getDomConfig"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSSerializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSSerializer.getDomConfig

```java
public DOMConfiguration getDomConfig()
```

The DOMConfiguration object used by the
 LSSerializer when serializing a DOM node.
 
 In addition to the parameters recognized by the
 DOMConfiguration
 interface defined in
 [DOM Level 3 Core]
 , the DOMConfiguration objects for
 LSSerializer adds, or modifies, the following
 parameters:
 
 "canonical-form"
 
 
 true
 [optional] Writes the document according to the rules specified in
 [Canonical XML].
 In addition to the behavior described in
 "canonical-form"
 [DOM Level 3 Core]
 , setting this parameter to true will set the parameters
 "format-pretty-print", "discard-default-content", and "xml-declaration
 ", to false. Setting one of those parameters to
 true will set this parameter to false.
 Serializing an XML 1.1 document when "canonical-form" is
 true will generate a fatal error. 
 false
 [required] (default) Do not canonicalize the output. 
 
 "discard-default-content"
 
 
 
 true
 [required] (default) Use the Attr.specified attribute to decide what attributes
 should be discarded. Note that some implementations might use
 whatever information available to the implementation (i.e. XML
 schema, DTD, the Attr.specified attribute, and so on) to
 determine what attributes and content to discard if this parameter is
 set to true. 
 false
 [required]Keep all attributes and all content.
 
 "format-pretty-print"
 
 
 
 true
 [optional] Formatting the output by adding whitespace to produce a pretty-printed,
 indented, human-readable form. The exact form of the transformations
 is not specified by this specification. Pretty-printing changes the
 content of the document and may affect the validity of the document,
 validating implementations should preserve validity. 
 
 false
 [required] (default) Don't pretty-print the result. 
 
 
 "ignore-unknown-character-denormalizations" 
 
 
 
 true
 [required] (default) If, while verifying full normalization when
 [XML 1.1] is
 supported, a character is encountered for which the normalization
 properties cannot be determined, then raise a
 "unknown-character-denormalization" warning (instead of
 raising an error, if this parameter is not set) and ignore any
 possible denormalizations caused by these characters. 
 
 false
 [optional] Report a fatal error if a character is encountered for which the
 processor cannot determine the normalization properties. 
 
 
 "normalize-characters"
  This parameter is equivalent to
 the one defined by DOMConfiguration in
 [DOM Level 3 Core]
 . Unlike in the Core, the default value for this parameter is
 true. While DOM implementations are not required to
 support fully
 normalizing the characters in the document according to appendix E of
 [XML 1.1], this
 parameter must be activated by default if supported. 
 
 "xml-declaration"
 
 
 true
 [required] (default) If a Document,
 Element, or Entity
  node is serialized, the XML declaration, or text declaration, should
 be included. The version (Document.xmlVersion if the
 document is a Level 3 document and the version is non-null, otherwise
 use the value "1.0"), and the output encoding (see
 LSSerializer.write for details on how to find the output
 encoding) are specified in the serialized XML declaration. 
 
 false
 [required] Do not serialize the XML and text declarations. Report a
 "xml-declaration-needed" warning if this will cause
 problems (i.e. the serialized data is of an XML version other than
 [XML 1.0], or an
 encoding would be needed to be able to re-parse the serialized data).
