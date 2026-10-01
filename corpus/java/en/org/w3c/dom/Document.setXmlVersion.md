---
id: "java-en-function-document-setxmlversion"
language: "java"
lang: "en"
category: "function"
name: "Document.setXmlVersion"
signature: "public void setXmlVersion(String xmlVersion) throws DOMException"
title: "Document.setXmlVersion"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.setXmlVersion

```java
public void setXmlVersion(String xmlVersion) throws DOMException
```

An attribute specifying, as part of the XML declaration, the version number of this document. If there is no declaration and if
 this document supports the "XML" feature, the value is
 "1.0". If this document does not support the "XML"
 feature, the value is always null. Changing this
 attribute will affect methods that check for invalid characters in
 XML names. Application should invoke
 Document.normalizeDocument() in order to check for
 invalid characters in the Nodes that are already part of
 this Document.
 
 DOM applications may use the
 DOMImplementation.hasFeature(feature, version) method
 with parameter values "XMLVersion" and "1.0" (respectively) to
 determine if an implementation supports [XML 1.0]. DOM
 applications may use the same method with parameter values
 "XMLVersion" and "1.1" (respectively) to determine if an
 implementation supports [XML 1.1]. In both
 cases, in order to support XML, an implementation must also support
 the "XML" feature defined in this specification. Document
  objects supporting a version of the "XMLVersion" feature must not
 raise a NOT_SUPPORTED_ERR exception for the same version
 number when using Document.xmlVersion.

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if the version is set to a value that is not supported by this Document or if this document does not support the "XML" feature.

> *Since 1.5, DOM Level 3*
