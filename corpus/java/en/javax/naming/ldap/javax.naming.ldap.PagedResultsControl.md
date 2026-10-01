---
id: "java-en-function-javax-naming-ldap-pagedresultscontrol"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.PagedResultsControl"
title: "PagedResultsControl"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/PagedResultsControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PagedResultsControl

Requests that the results of a search operation be returned by the LDAP
 server in batches of a specified size.
 The requestor controls the rate at which batches are returned by the rate
 at which it invokes search operations.
 

 The following code sample shows how the class may be used:
 
```
`// Open an LDAP association
     LdapContext ctx = new InitialLdapContext();

     // Activate paged results
     int pageSize = 20; // 20 entries per page
     byte[] cookie = null;
     int total;
     ctx.setRequestControls(new Control[]{
         new PagedResultsControl(pageSize, Control.CRITICAL) `);

     do {
         // Perform the search
         NamingEnumeration results =
             ctx.search("", "(objectclass=*)", new SearchControls());

         // Iterate over a batch of search results
         while (results != null && results.hasMore()) {
             // Display an entry
             SearchResult entry = (SearchResult)results.next();
             System.out.println(entry.getName());
             System.out.println(entry.getAttributes());

             // Handle the entry's response controls (if any)
             if (entry instanceof HasControls) {
                 // ((HasControls)entry).getControls();
             }
         }
         // Examine the paged results control response
         Control[] controls = ctx.getResponseControls();
         if (controls != null) {
             for (int i = 0; i < controls.length; i++) {
                 if (controls[i] instanceof PagedResultsResponseControl) {
                     PagedResultsResponseControl prrc =
                         (PagedResultsResponseControl)controls[i];
                     total = prrc.getResultSize();
                     cookie = prrc.getCookie();
                 } else {
                     // Handle other response controls (if any)
                 }
             }
         }

         // Re-activate paged results
         ctx.setRequestControls(new Control[]{
             new PagedResultsControl(pageSize, cookie, Control.CRITICAL) });
     } while (cookie != null);

     // Close the LDAP association
     ctx.close();
     ...

 } 
```

 

 This class implements the LDAPv3 Control for paged-results as defined in
 RFC 2696.

 The control's value has the following ASN.1 definition:
 
```
`realSearchControlValue ::= SEQUENCE {
         size      INTEGER (0..maxInt),
                           -- requested page size from client
                           -- result set size estimate from server
         cookie    OCTET STRING
     `

 }
```

**参见**

- PagedResultsResponseControl

> *Since 1.5*
