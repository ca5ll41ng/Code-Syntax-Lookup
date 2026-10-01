---
id: "java-en-function-ldapname-addall"
language: "java"
lang: "en"
category: "function"
name: "LdapName.addAll"
signature: "public Name addAll(Name suffix) throws InvalidNameException"
title: "LdapName.addAll"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.addAll

```java
public Name addAll(Name suffix) throws InvalidNameException
```

Adds the components of a name -- in order -- to the end of this name.

**参数**

- **suffix** — The non-null components to add.

**返回**

- The updated name (not a new instance).

**异常**

- **InvalidNameException** — if `suffix` is not a valid LDAP name, or if the addition of the components would violate the syntax rules of this LDAP name.
