---
id: "java-en-function-javax-naming-ldap-hascontrols"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.HasControls"
title: "HasControls"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/HasControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HasControls

This interface is for returning controls with objects returned
 in NamingEnumerations.
 For example, suppose a server sends back controls with the results
 of a search operation, the service provider would return a NamingEnumeration of
 objects that are both SearchResult and implement HasControls.

```

   NamingEnumeration elts = ectx.search((Name)name, filter, sctls);
   while (elts.hasMore()) {
     Object entry = elts.next();

     // Get search result
     SearchResult res = (SearchResult)entry;
     // do something with it

     // Get entry controls
     if (entry instanceof HasControls) {
         Control[] entryCtls = ((HasControls)entry).getControls();
         // do something with controls
     }
   }

```

> *Since 1.3*
