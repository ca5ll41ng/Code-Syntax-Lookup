---
id: "java-en-function-org-xml-sax-entityresolver"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.EntityResolver"
title: "EntityResolver"
directive: "type"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/EntityResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EntityResolver

Basic interface for resolving entities.

 

If a SAX application needs to implement customized handling
 for external entities, it must implement this interface and
 register an instance with the SAX driver using the
 `setEntityResolver setEntityResolver`
 method.

 

The XML reader will then allow the application to intercept any
 external entities (including the external DTD subset and external
 parameter entities, if any) before including them.

 

Many SAX applications will not need to implement this interface,
 but it will be especially useful for applications that build
 XML documents from databases or other specialised input sources,
 or for applications that use URI types other than URLs.

 

The following resolver would provide the application
 with a special character stream for the entity with the system
 identifier "http://www.myhost.com/today":

 
```

 import org.xml.sax.EntityResolver;
 import org.xml.sax.InputSource;

 public class MyResolver implements EntityResolver {
   public InputSource resolveEntity (String publicId, String systemId)
   {
     if (systemId.equals("http://www.myhost.com/today")) {
              // return a special input source
       MyReader reader = new MyReader();
       return new InputSource(reader);
     } else {
              // use the default behaviour
       return null;
     }
   }
 }
 
```

 

The application can also use this interface to redirect system
 identifiers to local URIs or to look up replacements in a catalog
 (possibly by using the public identifier).

**参见**

- org.xml.sax.XMLReader#setEntityResolver
- org.xml.sax.InputSource

> *Since 1.4, SAX 1.0*
