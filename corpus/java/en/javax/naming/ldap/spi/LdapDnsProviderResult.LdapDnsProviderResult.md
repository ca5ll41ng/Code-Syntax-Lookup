---
id: "java-en-function-ldapdnsproviderresult-ldapdnsproviderresult"
language: "java"
lang: "en"
category: "function"
name: "LdapDnsProviderResult.LdapDnsProviderResult"
signature: "public LdapDnsProviderResult(String domainName, List<String> endpoints)"
title: "LdapDnsProviderResult.LdapDnsProviderResult"
directive: "method"
module: "java.naming/javax.naming.ldap.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/spi/LdapDnsProviderResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapDnsProviderResult.LdapDnsProviderResult

```java
public LdapDnsProviderResult(String domainName, List<String> endpoints)
```

Construct an LdapDnsProviderResult consisting of a resolved domain name
 and the LDAP server endpoints that serve the domain.

**参数**

- **domainName** — the resolved domain name; can be null.
- **endpoints** — the possibly empty list of resolved LDAP server endpoints

**异常**

- **NullPointerException** — if `endpoints` contains `null` elements.
- **ClassCastException** — if `endpoints` contains non- `String` elements.
