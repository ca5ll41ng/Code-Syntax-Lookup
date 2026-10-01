---
id: "java-en-function-contenthandler-setdocumentlocator"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.setDocumentLocator"
signature: "public void setDocumentLocator (Locator locator)"
title: "ContentHandler.setDocumentLocator"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.setDocumentLocator

```java
public void setDocumentLocator (Locator locator)
```

Receive an object for locating the origin of SAX document events.

 

SAX parsers are strongly encouraged (though not absolutely
 required) to supply a locator: if it does so, it must supply
 the locator to the application by invoking this method before
 invoking any of the other methods in the ContentHandler
 interface.

 

The locator allows the application to determine the end
 position of any document-related event, even if the parser is
 not reporting an error.  Typically, the application will
 use this information for reporting its own errors (such as
 character content that does not match an application's
 business rules).  The information returned by the locator
 is probably not sufficient for use with a search engine.

 

Note that the locator will return correct information only
 during the invocation SAX event callbacks after
 `startDocument startDocument` returns and before
 `endDocument endDocument` is called.  The
 application should not attempt to use it at any other time.

**参数**

- **locator** — an object that can return the location of any SAX document event

**参见**

- org.xml.sax.Locator
