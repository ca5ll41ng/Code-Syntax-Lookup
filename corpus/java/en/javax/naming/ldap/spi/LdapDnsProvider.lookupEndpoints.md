---
id: "java-en-function-ldapdnsprovider-lookupendpoints"
language: "java"
lang: "en"
category: "function"
name: "LdapDnsProvider.lookupEndpoints"
signature: "public abstract Optional<LdapDnsProviderResult> lookupEndpoints( String url, Map<?,?> env) throws NamingException"
title: "LdapDnsProvider.lookupEndpoints"
directive: "method"
module: "java.naming/javax.naming.ldap.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/spi/LdapDnsProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapDnsProvider.lookupEndpoints

```java
public abstract Optional<LdapDnsProviderResult> lookupEndpoints( String url, Map<?,?> env) throws NamingException
```

Lookup the endpoints and domain name for the given `Context`
 `PROVIDER_URL provider URL` and environment. The resolved
 endpoints and domain name are returned as an
 `LdapDnsProviderResult`.

 

 An endpoint is a `String` representation of an LDAP URL which
 points to an LDAP server to be used for LDAP operations. The syntax of
 an LDAP URL is defined by 
 RFC&nbsp;2255: The LDAP URL Format.

**参数**

- **url** — The `Context` `PROVIDER_URL provider URL`
- **env** — The `Context` environment.

**返回**

- an `LdapDnsProviderResult` or empty `Optional` if the lookup fails.

**异常**

- **NamingException** — if the `url` is not valid or an error occurred while performing the lookup.
- **NullPointerException** — if either `url` or `env` are `null`.
