---
id: "java-en-function-org-xml-sax-helpers-locatorimpl"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.LocatorImpl"
title: "LocatorImpl"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/LocatorImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocatorImpl

Provide an optional convenience implementation of Locator.

 

This class is available mainly for application writers, who
 can use it to make a persistent snapshot of a locator at any
 point during a document parse:

 
```

 Locator locator;
 Locator startloc;

 public void setLocator (Locator locator)
 {
         // note the locator
   this.locator = locator;
 }

 public void startDocument ()
 {
         // save the location of the start of the document
         // for future use.
   Locator startloc = new LocatorImpl(locator);
 }

```

 

Normally, parser writers will not use this class, since it
 is more efficient to provide location information only when
 requested, rather than constantly updating a Locator object.

**参见**

- org.xml.sax.Locator Locator

> *Since 1.4, SAX 1.0*
