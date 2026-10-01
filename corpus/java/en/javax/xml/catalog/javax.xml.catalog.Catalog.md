---
id: "java-en-function-javax-xml-catalog-catalog"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.catalog.Catalog"
title: "Catalog"
directive: "type"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/Catalog.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Catalog

The Catalog class represents an entity Catalog as defined by
 
 XML Catalogs, OASIS Standard V1.1, 7 October 2005.
 

 A catalog is an XML file that contains a root `catalog` entry with a list
 of catalog entries. The entries can also be grouped with a `group` entry.
 The catalog and group entries may specify `prefer` and `xml:base`
 attributes that set preference of public or system type of entries and base URI
 to resolve relative URIs.

 

 A catalog can be used in two situations:
 
 
- Locate the external resources with a public or system identifier;
 
 
- Locate an alternate URI reference with a URI.
 
 

 

 For case 1, the standard defines 6 External Identifier Entries:

 `public, system, rewriteSystem, systemSuffix, delegatePublic, and
 delegateSystem`.
 

 While for case 2, it defines 4 URI Entries:

 `uri, rewriteURI, uriSuffix and delegateURI`.
 

 In addition to the above entry types, a catalog may define nextCatalog
 entries to add additional catalog entry files.

> *Since 9*
