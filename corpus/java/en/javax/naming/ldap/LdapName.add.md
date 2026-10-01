---
id: "java-en-function-ldapname-add"
language: "java"
lang: "en"
category: "function"
name: "LdapName.add"
signature: "public Name add(String comp) throws InvalidNameException"
title: "LdapName.add"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.add

```java
public Name add(String comp) throws InvalidNameException
```

Adds a single component to the end of this LDAP name.

**参数**

- **comp** — The non-null component to add.

**返回**

- The updated LdapName, not a new instance. Cannot be null.

**异常**

- **InvalidNameException** — If adding comp at end of the name would violate the name's syntax.
