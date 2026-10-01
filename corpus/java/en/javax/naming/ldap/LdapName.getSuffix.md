---
id: "java-en-function-ldapname-getsuffix"
language: "java"
lang: "en"
category: "function"
name: "LdapName.getSuffix"
signature: "public Name getSuffix(int posn)"
title: "LdapName.getSuffix"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/LdapName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapName.getSuffix

```java
public Name getSuffix(int posn)
```

Creates a name whose components consist of a suffix of the
 components in this LDAP name.
 Subsequent changes to this name do not affect the name that is
 returned and vice versa.

**参数**

- **posn** — The 0-based index of the component at which to start. Must be in the range [0,size()].

**返回**

- An instance of `LdapName` consisting of the components at indexes in the range [posn,size()). If posn is equal to size(), an empty LDAP name is returned.

**异常**

- **IndexOutOfBoundsException** — If posn is outside the specified range.
