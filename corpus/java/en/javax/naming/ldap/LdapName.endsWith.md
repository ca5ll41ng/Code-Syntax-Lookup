---
id: "java-en-function-ldapname-endswith"
language: "java"
lang: "en"
category: "function"
name: "LdapName.endsWith"
signature: "public boolean endsWith(Name n)"
title: "LdapName.endsWith"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.endsWith

```java
public boolean endsWith(Name n)
```

Determines whether this LDAP name ends with a specified
 LDAP name suffix.
 A name `n` is a suffix if it is equal to
 `getSuffix(size()-n.size())`--in other words this LDAP
 name ends with 'n'. If n is null or not a RFC2253 formatted name
 as described in the class description, false is returned.

**参数**

- **n** — The LDAP name to check.

**返回**

- true if `n` is a suffix of this name, false otherwise.

**参见**

- #getSuffix(int posn)
