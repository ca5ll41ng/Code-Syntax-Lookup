---
id: "java-en-function-javax-xml-xmlconstants"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.XMLConstants"
title: "XMLConstants"
directive: "type"
module: "java.xml/javax.xml"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/XMLConstants.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLConstants

Defines constants for XML Processing APIs.

 External Access Properties
 The value of the external access properties, including `ACCESS_EXTERNAL_DTD`,
 `ACCESS_EXTERNAL_SCHEMA`, and `ACCESS_EXTERNAL_STYLESHEET`,
 is defined as follows.

 Value:
 A list of protocols separated by comma. A protocol is the scheme portion of a
 `java.net.URI`, or in the case of the JAR protocol, "jar" plus the scheme
 portion separated by colon. A scheme is defined as:

 
 scheme = alpha *( alpha | digit | "+" | "-" | "." )

 where alpha = a-z and A-Z.

 And the JAR protocol:

 jar[:scheme]

 Protocols including the keyword "jar" are case-insensitive. Any whitespaces as defined by
 `isSpaceChar` in the value will be ignored.
 Examples of protocols are file, http, jar:file.

 

 Default value:
 The default value is implementation specific and therefore not specified.
 The following options are provided for consideration:
 
 
     
- an empty string to deny all access to external references;
     
- a specific protocol, such as file, to give permission to only the protocol;
     
- the keyword "all" to grant  permission to all protocols.
 

      When FEATURE_SECURE_PROCESSING is enabled,  it is recommended that implementations
      restrict external connections by default, though this may cause problems for applications
      that process XML/XSD/XSL with external references.
 

 Granting all access:
 The keyword "all" grants permission to all protocols.

 Property Precedence
 Properties, including the External Access Properties and
 `USE_CATALOG`, can be specified through multiple configuration sources.
 They follow the configuration process as defined in the
 Configuration section
 of the module summary.

**参见**

- Extensible Markup Language (XML) 1.1
- Extensible Markup Language (XML) 1.0 (Second Edition)
- XML 1.0 Second Edition Specification Errata
- Namespaces in XML 1.1
- Namespaces in XML
- XML Schema Part 1: Structures

> *Since 1.5*
