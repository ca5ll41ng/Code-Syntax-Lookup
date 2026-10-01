---
id: "java-en-function-ldapname-compareto"
language: "java"
lang: "en"
category: "function"
name: "LdapName.compareTo"
signature: "public int compareTo(Object obj)"
title: "LdapName.compareTo"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.compareTo

```java
public int compareTo(Object obj)
```

Compares this LdapName with the specified Object for order.
 Returns a negative integer, zero, or a positive integer as this
 Name is less than, equal to, or greater than the given Object.
 

 If obj is null or not an instance of LdapName, ClassCastException
 is thrown.
 

 Ordering of LDAP names follows the lexicographical rules for
 string comparison, with the extension that this applies to all
 the RDNs in the LDAP name. All the RDNs are lined up in their
 specified order and compared lexicographically.
 See `compareTo`
 for RDN comparison rules.
 

 If this LDAP name is lexicographically lesser than obj,
 a negative number is returned.
 If this LDAP name is lexicographically greater than obj,
 a positive number is returned.

**参数**

- **obj** — The non-null LdapName instance to compare against.

**返回**

- A negative integer, zero, or a positive integer as this Name is less than, equal to, or greater than the given obj.

**异常**

- **ClassCastException** — if obj is null or not a LdapName.
