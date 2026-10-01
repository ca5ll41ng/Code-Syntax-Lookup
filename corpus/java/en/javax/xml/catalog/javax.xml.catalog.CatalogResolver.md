---
id: "java-en-function-javax-xml-catalog-catalogresolver"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.catalog.CatalogResolver"
title: "CatalogResolver"
directive: "type"
module: "java.xml/javax.xml.catalog"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/catalog/CatalogResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CatalogResolver

A Catalog Resolver that implements SAX `org.xml.sax.EntityResolver`,
 StAX `javax.xml.stream.XMLResolver`,
 DOM LS `org.w3c.dom.ls.LSResourceResolver` used by Schema Validation, and
 Transform `javax.xml.transform.URIResolver`, and resolves
 external references using catalogs.
 

 The 
 Catalog Standard distinguished `external identifiers` from `uri entries`
 as being used to solely identify DTDs, while `uri entries` for
 other resources such as stylesheets and schema. The Java APIs, such as
 `javax.xml.stream.XMLResolver` and `org.w3c.dom.ls.LSResourceResolver`
 however, make no such distinction.
 In consistent with the existing Java API, this CatalogResolver recognizes a
 system identifier as a URI and will search both `system` and `uri`
 entries in a catalog in order to find a matching entry.
 

 The search is started in the current catalog. If a match is found,
 no further attempt will be made. Only if there is no match in the current
 catalog, will alternate catalogs including delegate and next catalogs be considered.

 Search Order
 The resolver will first search the system-type of entries with the specified
 `systemId`. The system entries include `system`,
 `rewriteSystem` and `systemSuffix` entries.
 

 If no match is found, `public` entries may be searched in accordance with
 the `prefer` attribute.
 

 **The `prefer` attribute**: if the `prefer` is public,
 and there is no match found through the system entries, `public` entries
 will be considered. If it is not specified, the `prefer` is public
 by default (Note that by the OASIS standard, system entries will always
 be considered before public entries. Prefer public means that public entries
 will be matched when both system and public identifiers are specified.
 In general therefore, prefer public is recommended.)
 

 If no match is found with the `systemId` and `public` identifier,
 the resolver will continue searching `uri` entries
 with the specified `systemId` or `href`. The `uri` entries
 include `uri`, `rewriteURI`, and `uriSuffix` entries.

 Error Handling
 The interfaces that the CatalogResolver extend specified checked exceptions, including:
 
 
- 
 `org.xml.sax.SAXException` and `java.io.IOException` by
 `resolveEntity`
 
 
- 
 `javax.xml.stream.XMLStreamException` by
 `resolveEntity`
 
 
- 
 `javax.xml.transform.TransformerException` by
 `resolve`
 
 

 

 The CatalogResolver however, will throw `javax.xml.catalog.CatalogException`
 only when `javax.xml.catalog.resolve` is specified as `strict`.
 For applications that expect to handle the checked Exceptions, it may be
 necessary to use a custom resolver to wrap the CatalogResolver or implement it
 with a `javax.xml.catalog.Catalog` object.

> *Since 9*
