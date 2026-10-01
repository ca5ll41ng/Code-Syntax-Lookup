---
id: "java-en-function-ldapname-startswith"
language: "java"
lang: "en"
category: "function"
name: "LdapName.startsWith"
signature: "public boolean startsWith(Name n)"
title: "LdapName.startsWith"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.startsWith

```java
public boolean startsWith(Name n)
```

Determines whether this LDAP name starts with a specified LDAP name
 prefix.
 A name `n` is a prefix if it is equal to
 `getPrefix(n.size())`--in other words this LDAP
 name starts with 'n'. If n is null or not a RFC2253 formatted name
 as described in the class description, false is returned.

**参数**

- **n** — The LDAP name to check.

**返回**

- true if `n` is a prefix of this LDAP name, false otherwise.

**参见**

- #getPrefix(int posn)
