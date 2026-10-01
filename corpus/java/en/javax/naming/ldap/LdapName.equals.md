---
id: "java-en-function-ldapname-equals"
language: "java"
lang: "en"
category: "function"
name: "LdapName.equals"
signature: "public boolean equals(Object obj)"
title: "LdapName.equals"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.equals

```java
public boolean equals(Object obj)
```

Determines whether two LDAP names are equal.
 If obj is null or not an LDAP name, false is returned.
 

 Two LDAP names are equal if each RDN in one is equal
 to the corresponding RDN in the other. This implies
 both have the same number of RDNs, and each RDN's
 equals() test against the corresponding RDN in the other
 name returns true. See `equals`
 for a definition of RDN equality.

**参数**

- **obj** — The possibly null object to compare against.

**返回**

- true if obj is equal to this LDAP name, false otherwise.

**参见**

- #hashCode
