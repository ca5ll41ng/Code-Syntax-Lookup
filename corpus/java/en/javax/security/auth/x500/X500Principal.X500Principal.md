---
id: "java-en-function-x500principal-x500principal"
language: "java"
lang: "en"
category: "function"
name: "X500Principal.X500Principal"
signature: "public X500Principal(String name)"
title: "X500Principal.X500Principal"
directive: "method"
module: "java.base/javax.security.auth.x500"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/x500/X500Principal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X500Principal.X500Principal

```java
public X500Principal(String name)
```

Creates an `X500Principal` from a string representation of
 an X.500 distinguished name (ex:
 "CN=Duke, OU=JavaSoft, O=Sun Microsystems, C=US").
 The distinguished name must be specified using the grammar defined in
 RFC 1779 or RFC 2253 (either format is acceptable).

 

This constructor recognizes the attribute type keywords
 defined in RFC 1779 and RFC 2253
 (and listed in `getName`),
 as well as the T, DNQ or DNQUALIFIER, SURNAME, GIVENNAME, INITIALS,
 GENERATION, EMAILADDRESS, and SERIALNUMBER keywords whose Object
 Identifiers (OIDs) are defined in RFC 5280.
 Any other attribute type must be specified as an OID.

 

This implementation enforces a more restrictive OID syntax than
 defined in RFC 1779 and 2253. It uses the more correct syntax defined in
 RFC 4512, which
 specifies that OIDs contain at least 2 digits:

 

`numericoid = number 1*( DOT number ) `

      RFC 4512: Lightweight Directory Access Protocol (LDAP):
              Directory Information Models

**参数**

- **name** — an X.500 distinguished name in RFC 1779 or RFC 2253 format

**异常**

- **NullPointerException** — if the `name` is `null`
- **IllegalArgumentException** — if the `name` is improperly specified
