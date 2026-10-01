---
id: "java-en-function-document-normalizedocument"
language: "java"
lang: "en"
category: "function"
name: "Document.normalizeDocument"
signature: "public void normalizeDocument()"
title: "Document.normalizeDocument"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.normalizeDocument

```java
public void normalizeDocument()
```

This method acts as if the document was going through a save and load
 cycle, putting the document in a "normal" form. As a consequence,
 this method updates the replacement tree of
 EntityReference nodes and normalizes Text
 nodes, as defined in the method Node.normalize().
 
 Otherwise, the actual result depends on the features being set on
 the Document.domConfig object and governing what
 operations actually take place. Noticeably this method could also
 make the document namespace well-formed according to the algorithm
 described in , check the character normalization, remove the
 CDATASection nodes, etc. See
 DOMConfiguration for details.
 
```
// Keep in the document
 the information defined // in the XML Information Set (Java example)
 DOMConfiguration docConfig = myDocument.getDomConfig();
 docConfig.setParameter("infoset", Boolean.TRUE);
 myDocument.normalizeDocument();
```

 
Mutation events, when supported, are generated to reflect the
 changes occurring on the document.
 
 If errors occur during the invocation of this method, such as an
 attempt to update a read-only node or a Node.nodeName
 contains an invalid character according to the XML version in use,
 errors or warnings (DOMError.SEVERITY_ERROR or
 DOMError.SEVERITY_WARNING) will be reported using the
 DOMErrorHandler object associated with the "error-handler
 " parameter. Note this method might also report fatal errors (
 DOMError.SEVERITY_FATAL_ERROR) if an implementation
 cannot recover from an error.

> *Since 1.5, DOM Level 3*
