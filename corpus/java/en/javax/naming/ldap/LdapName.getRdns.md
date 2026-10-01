---
id: "java-en-function-ldapname-getrdns"
language: "java"
lang: "en"
category: "function"
name: "LdapName.getRdns"
signature: "public List<Rdn> getRdns()"
title: "LdapName.getRdns"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.getRdns

```java
public List<Rdn> getRdns()
```

Retrieves the list of relative distinguished names.
 The contents of the list are unmodifiable.
 The indexing of RDNs in the returned list follows the numbering of
 RDNs as described in the class description.
 If the name has zero components, an empty list is returned.

**返回**

- The name as a list of RDNs which are instances of the class `Rdn Rdn`.
