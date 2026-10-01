---
id: "java-en-function-ldapname-getall"
language: "java"
lang: "en"
category: "function"
name: "LdapName.getAll"
signature: "public Enumeration<String> getAll()"
title: "LdapName.getAll"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.getAll

```java
public Enumeration<String> getAll()
```

Retrieves the components of this name as an enumeration
 of strings. The effect of updates to this name on this enumeration
 is undefined. If the name has zero components, an empty (non-null)
 enumeration is returned.
 The order of the components returned by the enumeration is same as
 the order in which the components are numbered as described in the
 class description.

**返回**

- A non-null enumeration of the components of this LDAP name. Each element of the enumeration is of class String.
