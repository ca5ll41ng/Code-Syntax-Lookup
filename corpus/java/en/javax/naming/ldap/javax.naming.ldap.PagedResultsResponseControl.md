---
id: "java-en-function-javax-naming-ldap-pagedresultsresponsecontrol"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.PagedResultsResponseControl"
title: "PagedResultsResponseControl"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/PagedResultsResponseControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PagedResultsResponseControl

Indicates the end of a batch of search results.
 Contains an estimate of the total number of entries in the result set
 and an opaque cookie. The cookie must be supplied to the next search
 operation in order to get the next batch of results.
 

 The code sample in `PagedResultsControl` shows how this class may
 be used.
 

 This class implements the LDAPv3 Response Control for
 paged-results as defined in
 RFC 2696.

 The control's value has the following ASN.1 definition:
 
```

     realSearchControlValue ::= SEQUENCE {
         size      INTEGER (0..maxInt),
                           -- requested page size from client
                           -- result set size estimate from server
         cookie    OCTET STRING
     }

 
```

**参见**

- PagedResultsControl

> *Since 1.5*
