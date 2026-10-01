---
id: "java-en-function-javax-naming-ldap-sortcontrol"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.SortControl"
title: "SortControl"
directive: "type"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/SortControl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortControl

Requests that the results of a search operation be sorted by the LDAP server
 before being returned.
 The sort criteria are specified using an ordered list of one or more sort
 keys, with associated sort parameters.
 Search results are sorted at the LDAP server according to the parameters
 supplied in the sort control and then returned to the requestor. If sorting
 is not supported at the server (and the sort control is marked as critical)
 then the search operation is not performed and an error is returned.
 

 The following code sample shows how the class may be used:
 
```
`// Open an LDAP association
     LdapContext ctx = new InitialLdapContext();

     // Activate sorting
     String sortKey = "cn";
     ctx.setRequestControls(new Control[]{
         new SortControl(sortKey, Control.CRITICAL) `);

     // Perform a search
     NamingEnumeration results =
         ctx.search("", "(objectclass=*)", new SearchControls());

     // Iterate over search results
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
     // Examine the sort control response
     Control[] controls = ctx.getResponseControls();
     if (controls != null) {
         for (int i = 0; i < controls.length; i++) {
             if (controls[i] instanceof SortResponseControl) {
                 SortResponseControl src = (SortResponseControl)controls[i];
                 if (! src.isSorted()) {
                     throw src.getException();
                 }
             } else {
                 // Handle other response controls (if any)
             }
         }
     }

     // Close the LDAP association
     ctx.close();
     ...

 }
```

 

 This class implements the LDAPv3 Request Control for server-side sorting
 as defined in
 RFC 2891.

 The control's value has the following ASN.1 definition:
 
```

     SortKeyList ::= SEQUENCE OF SEQUENCE {
         attributeType     AttributeDescription,
         orderingRule  [0] MatchingRuleId OPTIONAL,
         reverseOrder  [1] BOOLEAN DEFAULT FALSE }

 
```

**参见**

- SortKey
- SortResponseControl

> *Since 1.5*
