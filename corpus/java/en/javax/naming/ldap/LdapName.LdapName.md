---
id: "java-en-function-ldapname-ldapname"
language: "java"
lang: "en"
category: "function"
name: "LdapName.LdapName"
signature: "public LdapName(String name) throws InvalidNameException"
title: "LdapName.LdapName"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.LdapName

```java
public LdapName(String name) throws InvalidNameException
```

Constructs an LDAP name from the given distinguished name.

**参数**

- **name** — This is a non-null distinguished name formatted according to the rules defined in RFC 2253.

**异常**

- **InvalidNameException** — if a syntax violation is detected.

**参见**

- Rdn#escapeValue(Object value)
