---
id: "java-en-function-org-xml-sax-attributes"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.Attributes"
title: "Attributes"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes

Interface for a list of XML attributes.

 

This interface allows access to a list of attributes in
 three different ways:

 
 
- by attribute index;
 
- by Namespace-qualified name; or
 
- by qualified (prefixed) name.
 

 

The list will not contain attributes that were declared
 #IMPLIED but not specified in the start tag.  It will also not
 contain attributes used as Namespace declarations (xmlns*) unless
 the http://xml.org/sax/features/namespace-prefixes
 feature is set to true (it is false by
 default).
 Because SAX2 conforms to the original "Namespaces in XML"
 recommendation, it normally does not
 give namespace declaration attributes a namespace URI.
 

 

Some SAX2 parsers may support using an optional feature flag
 (http://xml.org/sax/features/xmlns-uris) to request
 that those attributes be given URIs, conforming to a later
 backwards-incompatible revision of that recommendation.  (The
 attribute's "local name" will be the prefix, or "xmlns" when
 defining a default element namespace.)  For portability, handler
 code should always resolve that conflict, rather than requiring
 parsers that can change the setting of that feature flag.  

 

If the namespace-prefixes feature (see above) is
 false, access by qualified name may not be available; if
 the http://xml.org/sax/features/namespaces feature is
 false, access by Namespace-qualified names may not be
 available.

 

This interface replaces the now-deprecated SAX1 `org.xml.sax.AttributeList AttributeList` interface, which does not
 contain Namespace support.  In addition to Namespace support, it
 adds the getIndex methods (below).

 

The order of attributes in the list is unspecified, and will
 vary from implementation to implementation.

**参见**

- org.xml.sax.helpers.AttributesImpl
- org.xml.sax.ext.DeclHandler#attributeDecl

> *Since 1.4, SAX 2.0*
