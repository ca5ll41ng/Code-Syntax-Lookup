---
id: "java-en-function-documenthandler-setdocumentlocator"
language: "java"
lang: "en"
category: "function"
name: "DocumentHandler.setDocumentLocator"
signature: "public abstract void setDocumentLocator (Locator locator)"
title: "DocumentHandler.setDocumentLocator"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/DocumentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentHandler.setDocumentLocator

```java
public abstract void setDocumentLocator (Locator locator)
```

Receive an object for locating the origin of SAX document events.

 

SAX parsers are strongly encouraged (though not absolutely
 required) to supply a locator: if it does so, it must supply
 the locator to the application by invoking this method before
 invoking any of the other methods in the DocumentHandler
 interface.

 

The locator allows the application to determine the end
 position of any document-related event, even if the parser is
 not reporting an error.  Typically, the application will
 use this information for reporting its own errors (such as
 character content that does not match an application's
 business rules).  The information returned by the locator
 is probably not sufficient for use with a search engine.

 

Note that the locator will return correct information only
 during the invocation of the events in this interface.  The
 application should not attempt to use it at any other time.

**参数**

- **locator** — An object that can return the location of any SAX document event.

**参见**

- org.xml.sax.Locator
