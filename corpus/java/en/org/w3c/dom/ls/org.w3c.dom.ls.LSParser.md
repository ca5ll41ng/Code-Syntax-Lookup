---
id: "java-en-function-org-w3c-dom-ls-lsparser"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.ls.LSParser"
title: "LSParser"
directive: "type"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSParser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSParser

An interface to an object that is able to build, or augment, a DOM tree
 from various input sources.
 

 LSParser provides an API for parsing XML and building the
 corresponding DOM document structure. A LSParser instance
 can be obtained by invoking the
 DOMImplementationLS.createLSParser() method.
 

 As specified in
 [DOM Level 3 Core]
 , when a document is first made available via the LSParser:
 
 
-  there will
 never be two adjacent nodes of type NODE_TEXT, and there will never be
 empty text nodes.
 
 
-  it is expected that the value and
 nodeValue attributes of an Attr node initially
 return the XML 1.0
 normalized value. However, if the parameters
 "validate-if-schema" and
 "datatype-normalization"
 are set to true, depending on the attribute normalization
 used, the attribute values may differ from the ones obtained by the XML
 1.0 attribute normalization. If the parameters
 "datatype-normalization"
 is set to false, the XML 1.0 attribute normalization is
 guaranteed to occur, and if the attributes list does not contain
 namespace declarations, the attributes attribute on
 Element node represents the property **[attributes]** defined in
 [XML Information Set].
 
 

 

 Asynchronous LSParser objects are expected to also
 implement the events::EventTarget interface so that event
 listeners can be registered on asynchronous LSParser
 objects.
 

 Events supported by asynchronous LSParser objects are:
 
 load
 
  The LSParser finishes to load the document. See also the
 definition of the LSLoadEvent interface. 
 progress
  The
 LSParser signals progress as data is parsed.  This
 specification does not attempt to define exactly when progress events
 should be dispatched. That is intentionally left as
 implementation-dependent. Here is one example of how an application might
 dispatch progress events: Once the parser starts receiving data, a
 progress event is dispatched to indicate that the parsing starts. From
 there on, a progress event is dispatched for every 4096 bytes of data
 that is received and processed. This is only one example, though, and
 implementations can choose to dispatch progress events at any time while
 parsing, or not dispatch them at all.  See also the definition of the
 LSProgressEvent interface. 
 
 

**Note:**  All events defined in this specification use the
 namespace URI "http://www.w3.org/2002/DOMLS".
 

 While parsing an input source, errors are reported to the application
 through the error handler (LSParser.domConfig's
 "error-handler"
 parameter). This specification does in no way try to define all possible
 errors that can occur while parsing XML, or any other markup, but some
 common error cases are defined. The types (DOMError.type) of
 errors and warnings defined by this specification are:
 
 
 "check-character-normalization-failure" [error] 
  Raised if the parameter
 "check-character-normalization"
 is set to true and a string is encountered that fails normalization
 checking. 
 "doctype-not-allowed" [fatal]
  Raised if the
 configuration parameter "disallow-doctype" is set to true
 and a doctype is encountered. 
 "no-input-specified" [fatal]
 
 Raised when loading a document and no input is specified in the
 LSInput object. 
 
 "pi-base-uri-not-preserved" [warning]
  Raised if a processing
 instruction is encountered in a location where the base URI of the
 processing instruction can not be preserved.  One example of a case where
 this warning will be raised is if the configuration parameter
 "entities"
 is set to false and the following XML file is parsed:
 
```

 &lt;!DOCTYPE root [ &lt;!ENTITY e SYSTEM 'subdir/myentity.ent' ]&gt;
 &lt;root&gt; &amp;e; &lt;/root&gt;
```

  And subdir/myentity.ent
 contains:
 
```
&lt;one&gt; &lt;two/&gt; &lt;/one&gt; &lt;?pi 3.14159?&gt;
 &lt;more/&gt;
```

 
 "unbound-prefix-in-entity" [warning]
  An
 implementation dependent warning that may be raised if the configuration parameter
 "namespaces"
 is set to true and an unbound namespace prefix is
 encountered in an entity's replacement text. Raising this warning is not
 enforced since some existing parsers may not recognize unbound namespace
 prefixes in the replacement text of entities. 
 
 "unknown-character-denormalization" [fatal]
  Raised if the
 configuration parameter "ignore-unknown-character-denormalizations" is
 set to false and a character is encountered for which the
 processor cannot determine the normalization properties. 
 
 "unsupported-encoding" [fatal]
  Raised if an unsupported
 encoding is encountered. 
 "unsupported-media-type" [fatal]
 
 Raised if the configuration parameter "supported-media-types-only" is set
 to true and an unsupported media type is encountered. 
 
 

 In addition to raising the defined errors and warnings, implementations
 are expected to raise implementation specific errors and warnings for any
 other error and warning cases such as IO errors (file not found,
 permission denied,...), XML well-formedness errors, and so on.
 

See also the
 Document Object Model (DOM) Level 3 Load and Save Specification.

> *Since 1.5*
