---
id: "java-en-function-entityresolver2-getexternalsubset"
language: "java"
lang: "en"
category: "function"
name: "EntityResolver2.getExternalSubset"
signature: "public InputSource getExternalSubset (String name, String baseURI) throws SAXException, IOException"
title: "EntityResolver2.getExternalSubset"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/EntityResolver2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EntityResolver2.getExternalSubset

```java
public InputSource getExternalSubset (String name, String baseURI) throws SAXException, IOException
```

Allows applications to provide an external subset for documents
 that don't explicitly define one.  Documents with DOCTYPE declarations
 that omit an external subset can thus augment the declarations
 available for validation, entity processing, and attribute processing
 (normalization, defaulting, and reporting types including ID).
 This augmentation is reported
 through the `startDTD startDTD` method as if
 the document text had originally included the external subset;
 this callback is made before any internal subset data or errors
 are reported.

 

This method can also be used with documents that have no DOCTYPE
 declaration.  When the root element is encountered,
 but no DOCTYPE declaration has been seen, this method is
 invoked.  If it returns a value for the external subset, that root
 element is declared to be the root element, giving the effect of
 splicing a DOCTYPE declaration at the end the prolog of a document
 that could not otherwise be valid.  The sequence of parser callbacks
 in that case logically resembles this:

 
```

 ... comments and PIs from the prolog (as usual)
 startDTD ("rootName", source.getPublicId (), source.getSystemId ());
 startEntity ("[dtd]");
 ... declarations, comments, and PIs from the external subset
 endEntity ("[dtd]");
 endDTD ();
 ... then the rest of the document (as usual)
 startElement (..., "rootName", ...);
 
```

 

Note that the InputSource gets no further resolution.
 Implementations of this method may wish to invoke
 `resolveEntity resolveEntity` to gain benefits such as use
 of local caches of DTD entities.  Also, this method will never be
 used by a (non-validating) processor that is not including external
 parameter entities.

 

Uses for this method include facilitating data validation when
 interoperating with XML processors that would always require
 undesirable network accesses for external entities, or which for
 other reasons adopt a "no DTDs" policy.
 Non-validation motives include forcing documents to include DTDs so
 that attributes are handled consistently.
 For example, an XPath processor needs to know which attributes have
 type "ID" before it can process a widely used type of reference.

 

**Warning:** Returning an external subset modifies
 the input document.  By providing definitions for general entities,
 it can make a malformed document appear to be well formed.

**参数**

- **name** — Identifies the document root element.  This name comes from a DOCTYPE declaration (where available) or from the actual root element.
- **baseURI** — The document's base URI, serving as an additional hint for selecting the external subset.  This is always an absolute URI, unless it is null because the XMLReader was given an InputSource without one.

**返回**

- An InputSource object describing the new external subset to be used by the parser, or null to indicate that no external subset is provided.

**异常**

- **SAXException** — Any SAX exception, possibly wrapping another exception.
- **IOException** — Probably indicating a failure to create a new InputStream or Reader, or an illegal URL.
