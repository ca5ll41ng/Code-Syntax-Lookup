---
id: "java-en-function-ldapname-get"
language: "java"
lang: "en"
category: "function"
name: "LdapName.get"
signature: "public String get(int posn)"
title: "LdapName.get"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.get

```java
public String get(int posn)
```

Retrieves a component of this LDAP name as a string.

**参数**

- **posn** — The 0-based index of the component to retrieve. Must be in the range [0,size()).

**返回**

- The non-null component at index posn.

**异常**

- **IndexOutOfBoundsException** — if posn is outside the specified range.
