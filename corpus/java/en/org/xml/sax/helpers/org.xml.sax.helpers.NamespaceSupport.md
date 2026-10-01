---
id: "java-en-function-org-xml-sax-helpers-namespacesupport"
language: "java"
lang: "en"
category: "function"
name: "org.xml.sax.helpers.NamespaceSupport"
title: "NamespaceSupport"
directive: "type"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/NamespaceSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamespaceSupport

Encapsulate Namespace logic for use by applications using SAX,
 or internally by SAX drivers.

 

This class encapsulates the logic of Namespace processing: it
 tracks the declarations currently in force for each context and
 automatically processes qualified XML names into their Namespace
 parts; it can also be used in reverse for generating XML qnames
 from Namespaces.

 

Namespace support objects are reusable, but the reset method
 must be invoked between each session.

 

Here is a simple session:

 
```

 String parts[] = new String[3];
 NamespaceSupport support = new NamespaceSupport();

 support.pushContext();
 support.declarePrefix("", "http://www.w3.org/1999/xhtml");
 support.declarePrefix("dc", "http://www.purl.org/dc#");

 parts = support.processName("p", parts, false);
 System.out.println("Namespace URI: " + parts[0]);
 System.out.println("Local name: " + parts[1]);
 System.out.println("Raw name: " + parts[2]);

 parts = support.processName("dc:title", parts, false);
 System.out.println("Namespace URI: " + parts[0]);
 System.out.println("Local name: " + parts[1]);
 System.out.println("Raw name: " + parts[2]);

 support.popContext();
 
```

 

Note that this class is optimized for the use case where most
 elements do not contain Namespace declarations: if the same
 prefix/URI mapping is repeated for each context (for example), this
 class will be somewhat less efficient.

 

Although SAX drivers (parsers) may choose to use this class to
 implement namespace handling, they are not required to do so.
 Applications must track namespace information themselves if they
 want to use namespace information.

> *Since 1.4, SAX 2.0*
