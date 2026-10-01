---
id: "java-en-function-javax-naming-ldap-spi-ldapdnsprovider"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.ldap.spi.LdapDnsProvider"
title: "LdapDnsProvider"
directive: "type"
module: "java.naming/javax.naming.ldap.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/spi/LdapDnsProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LdapDnsProvider

Service-provider class for DNS lookups when performing LDAP operations.

 

 An LDAP DNS provider is a concrete subclass of this class that
 has a zero-argument constructor. LDAP DNS providers are located using the
 ServiceLoader facility, as specified by
 `javax.naming.directory.InitialDirContext InitialDirectContext`.

 The
 `java.util.ServiceLoader ServiceLoader` is used to create and register
 implementations of `LdapDnsProvider`.

 

 An LDAP DNS provider can be used in environments where the default
 DNS resolution mechanism is not sufficient to accurately pinpoint the
 correct LDAP servers needed to perform LDAP operations. For example, in an
 environment containing a mix of `ldap` and `ldaps` servers
 you may want the `javax.naming.ldap.LdapContext LdapContext`
 to query `ldaps` servers only.

> *Since 12*
