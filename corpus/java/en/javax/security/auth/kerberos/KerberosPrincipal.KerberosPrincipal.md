---
id: "java-en-function-kerberosprincipal-kerberosprincipal"
language: "java"
lang: "en"
category: "function"
name: "KerberosPrincipal.KerberosPrincipal"
signature: "public KerberosPrincipal(String name)"
title: "KerberosPrincipal.KerberosPrincipal"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosPrincipal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosPrincipal.KerberosPrincipal

```java
public KerberosPrincipal(String name)
```

Constructs a `KerberosPrincipal` from the provided string input.
 The name type for this principal defaults to
 `KRB_NT_PRINCIPAL KRB_NT_PRINCIPAL`
 This string is assumed to contain a name in the format
 that is specified in Section 2.1.1. (Kerberos Principal Name Form) of
  RFC 1964 
 (for example, duke@FOO.COM, where duke
 represents a principal, and FOO.COM represents a realm).

 

If the input name does not contain a realm, the default realm
 is used. The default realm can be specified either in a Kerberos
 configuration file or via the `java.security.krb5.realm`
 system property. For more information, see the
 `security_guide_jgss_tutorial Kerberos Requirements`.

 

Note that when this class or any other Kerberos-related class is
 initially loaded and initialized, it may read and cache the default
 realm from the Kerberos configuration file or via the
 java.security.krb5.realm system property (the value will be empty if
 no default realm is specified), such that any subsequent calls to set
 or change the default realm by setting the java.security.krb5.realm
 system property may be ignored.

**参数**

- **name** — the principal name

**异常**

- **IllegalArgumentException** — if name is improperly formatted, if name is null, or if name does not contain the realm to use and the default realm is not specified in either a Kerberos configuration file or via the java.security.krb5.realm system property.
