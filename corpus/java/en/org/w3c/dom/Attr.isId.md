---
id: "java-en-function-attr-isid"
language: "java"
lang: "en"
category: "function"
name: "Attr.isId"
signature: "public boolean isId()"
title: "Attr.isId"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Attr.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attr.isId

```java
public boolean isId()
```

Returns whether this attribute is known to be of type ID (i.e. to
 contain an identifier for its owner element) or not. When it is and
 its value is unique, the ownerElement of this attribute
 can be retrieved using the method Document.getElementById
 . The implementation could use several ways to determine if an
 attribute node is known to contain an identifier:
 
 
-  If validation
 occurred using an XML Schema [XML Schema Part 1]
  while loading the document or while invoking
 Document.normalizeDocument(), the post-schema-validation
 infoset contributions (PSVI contributions) values are used to
 determine if this attribute is a schema-determined ID attribute using
 the 
 schema-determined ID definition in [XPointer]
 .
 
 
-  If validation occurred using a DTD while loading the document or
 while invoking Document.normalizeDocument(), the infoset **[type definition]** value is used to determine if this attribute is a DTD-determined ID
 attribute using the 
 DTD-determined ID definition in [XPointer]
 .
 
 
-  from the use of the methods Element.setIdAttribute(),
 Element.setIdAttributeNS(), or
 Element.setIdAttributeNode(), i.e. it is an
 user-determined ID attribute;
 

**Note:**  XPointer framework (see section 3.2 in [XPointer]
 ) consider the DOM user-determined ID attribute as being part of the
 XPointer externally-determined ID definition.
 
 
-  using mechanisms that
 are outside the scope of this specification, it is then an
 externally-determined ID attribute. This includes using schema
 languages different from XML schema and DTD.
 
 

 
 If validation occurred while invoking
 Document.normalizeDocument(), all user-determined ID
 attributes are reset and all attribute nodes ID information are then
 reevaluated in accordance to the schema used. As a consequence, if
 the Attr.schemaTypeInfo attribute contains an ID type,
 isId will always return true.

> *Since 1.5, DOM Level 3*
