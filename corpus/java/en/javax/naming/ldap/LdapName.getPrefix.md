---
id: "java-en-function-ldapname-getprefix"
language: "java"
lang: "en"
category: "function"
name: "LdapName.getPrefix"
signature: "public Name getPrefix(int posn)"
title: "LdapName.getPrefix"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.getPrefix

```java
public Name getPrefix(int posn)
```

Creates a name whose components consist of a prefix of the
 components of this LDAP name.
 Subsequent changes to this name will not affect the name
 that is returned and vice versa.

**参数**

- **posn** — The 0-based index of the component at which to stop. Must be in the range [0,size()].

**返回**

- An instance of `LdapName` consisting of the components at indexes in the range [0,posn). If posn is zero, an empty LDAP name is returned.

**异常**

- **IndexOutOfBoundsException** — If posn is outside the specified range.
