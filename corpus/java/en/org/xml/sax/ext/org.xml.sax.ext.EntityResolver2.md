---
id: "java-en-function-org-xml-sax-ext-entityresolver2"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.ext.EntityResolver2"
title: "EntityResolver2"
directive: "type"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/EntityResolver2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EntityResolver2

Extended interface for mapping external entity references to input
 sources, or providing a missing external subset.  The
 `setEntityResolver XMLReader.setEntityResolver` method
 is used to provide implementations of this interface to parsers.
 When a parser uses the methods in this interface, the
 `resolveEntity EntityResolver2.resolveEntity`
 method (in this interface) is used instead of the older (SAX 1.0)
 `resolveEntity EntityResolver.resolveEntity` method.

 

If a SAX application requires the customized handling which this
 interface defines for external entities, it must ensure that it uses
 an XMLReader with the
 http://xml.org/sax/features/use-entity-resolver2 feature flag
 set to true (which is its default value when the feature is
 recognized).  If that flag is unrecognized, or its value is false,
 or the resolver does not implement this interface, then only the
 `EntityResolver` method will be used.

 

That supports three categories of application that modify entity
 resolution.  Old Style applications won't know about this interface;
 they will provide an EntityResolver.
 Transitional Mode provide an EntityResolver2 and automatically
 get the benefit of its methods in any systems (parsers or other tools)
 supporting it, due to polymorphism.
 Both Old Style and Transitional Mode applications will
 work with any SAX2 parser.
 New style applications will fail to run except on SAX2 parsers
 that support this particular feature.
 They will insist that feature flag have a value of "true", and the
 EntityResolver2 implementation they provide  might throw an exception
 if the original SAX 1.0 style entity resolution method is invoked.

**参见**

- org.xml.sax.XMLReader#setEntityResolver

> *Since 1.5, SAX 2.0 (extensions 1.1 alpha)*
