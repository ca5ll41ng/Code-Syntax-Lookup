---
id: "java-en-function-ldapname-getrdn"
language: "java"
lang: "en"
category: "function"
name: "LdapName.getRdn"
signature: "public Rdn getRdn(int posn)"
title: "LdapName.getRdn"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.getRdn

```java
public Rdn getRdn(int posn)
```

Retrieves an RDN of this LDAP name as an Rdn.

**参数**

- **posn** — The 0-based index of the RDN to retrieve. Must be in the range [0,size()).

**返回**

- The non-null RDN at index posn.

**异常**

- **IndexOutOfBoundsException** — if posn is outside the specified range.
