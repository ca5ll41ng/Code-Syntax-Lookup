---
id: "java-en-function-lsparser-getdomconfig"
language: "java"
lang: "en"
category: "function"
name: "LSParser.getDomConfig"
signature: "public DOMConfiguration getDomConfig()"
title: "LSParser.getDomConfig"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSParser.getDomConfig

```java
public DOMConfiguration getDomConfig()
```

The DOMConfiguration object used when parsing an input
 source. This DOMConfiguration is specific to the parse
 operation. No parameter values from this DOMConfiguration
  object are passed automatically to the DOMConfiguration
 object on the Document that is created, or used, by the
 parse operation. The DOM application is responsible for passing any
 needed parameter values from this DOMConfiguration
 object to the DOMConfiguration object referenced by the
 Document object.
 
 In addition to the parameters recognized in on the
 DOMConfiguration
 interface defined in
 [DOM Level 3 Core]
 , the DOMConfiguration objects for LSParser
 add or modify the following parameters:
 
 
 "charset-overrides-xml-encoding"
 
 
 true
 [optional] (default) If a higher level protocol such as HTTP
 [IETF RFC 2616] provides an
 indication of the character encoding of the input stream being
 processed, that will override any encoding specified in the XML
 declaration or the Text declaration (see also section 4.3.3,
 "Character Encoding in Entities", in [XML 1.0]).
 Explicitly setting an encoding in the LSInput overrides
 any encoding from the protocol. 
 false
 [required] The parser ignores any character set encoding information from
 higher-level protocols. 
 
 "disallow-doctype"
 
 
 
 true
 [optional] Throw a fatal **"doctype-not-allowed"** error
 if a doctype node is found while parsing the document. This is
 useful when dealing with things like SOAP envelopes where doctype
 nodes are not allowed. 
 false
 [required] (default) Allow doctype nodes in the document. 
 
 
 "ignore-unknown-character-denormalizations"
 
 
 
 true
 [required] (default) If, while verifying full normalization when
 [XML 1.1] is
 supported, a processor encounters characters for which it cannot
 determine the normalization properties, then the processor will
 ignore any possible denormalizations caused by these characters.
 This parameter is ignored for [XML 1.0].
 
 
 false
 [optional] Report an fatal **"unknown-character-denormalization"**
 error if a character is encountered for which the processor cannot
 determine the normalization properties. 
 
 "infoset"
  See
 the definition of DOMConfiguration for a description of
 this parameter. Unlike in [DOM Level 3 Core]
 , this parameter will default to true for
 LSParser. 
 "namespaces"
 
 
 true
 [required] (default) Perform the namespace processing as defined in
 [XML Namespaces]
  and [XML Namespaces 1.1]
 . 
 false
 [optional] Do not perform the namespace processing. 
 
 
 "resource-resolver"
 [required] A reference to a LSResourceResolver object, or null. If
 the value of this parameter is not null when an external resource
 (such as an external XML entity or an XML schema location) is
 encountered, the implementation will request that the
 LSResourceResolver referenced in this parameter resolves
 the resource. 
 "supported-media-types-only"
 
 
 
 true
 [optional] Check that the media type of the parsed resource is a supported media
 type. If an unsupported media type is encountered, a fatal error of
 type **"unsupported-media-type"** will be raised. The media types defined in
 [IETF RFC 3023] must always
 be accepted. 
 false
 [required] (default) Accept any media type. 
 
 "validate"
  See the definition of
 DOMConfiguration for a description of this parameter.
 Unlike in [DOM Level 3 Core]
 , the processing of the internal subset is always accomplished, even
 if this parameter is set to false. 
 
 "validate-if-schema"
  See the definition of
 DOMConfiguration for a description of this parameter.
 Unlike in [DOM Level 3 Core]
 , the processing of the internal subset is always accomplished, even
 if this parameter is set to false. 
 
 "well-formed"
  See the definition of
 DOMConfiguration for a description of this parameter.
 Unlike in [DOM Level 3 Core]
 , this parameter cannot be set to false.
