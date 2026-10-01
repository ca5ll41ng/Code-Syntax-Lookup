---
id: "java-en-function-java-security-domainloadstoreparameter"
language: "java"
lang: "en"
category: "function"
name: "java.security.DomainLoadStoreParameter"
title: "DomainLoadStoreParameter"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DomainLoadStoreParameter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DomainLoadStoreParameter

Configuration data that specifies the keystores in a keystore domain.
 A keystore domain is a collection of keystores that are presented as a
 single logical keystore. The configuration data is used during
 `KeyStore`
 `load(KeyStore.LoadStoreParameter) load` and
 `store(KeyStore.LoadStoreParameter) store` operations.
 

 The following syntax is supported for configuration data:
 
```
`domain  [ ...] {
         keystore  [ ...] ;
         ...
     `;
     ...
 }
```

 where `domainName` and `keystoreName` are identifiers
 and `property` is a key/value pairing. The key and value are
 separated by an 'equals' symbol and the value is enclosed in double
 quotes. A property value may be either a printable string or a binary
 string of colon-separated pairs of hexadecimal digits. Multivalued
 properties are represented as a comma-separated list of values,
 enclosed in square brackets.
 See `toString`.
 

 To ensure that keystore entries are uniquely identified, each
 entry's alias is prefixed by its `keystoreName` followed
 by the entry name separator and each `keystoreName` must be
 unique within its domain. Entry name prefixes are omitted when
 storing a keystore.
 

 Properties are context-sensitive: properties that apply to
 all the keystores in a domain are located in the domain clause,
 and properties that apply only to a specific keystore are located
 in that keystore's clause.
 Unless otherwise specified, a property in a keystore clause overrides
 a property of the same name in the domain clause. All property names
 are case-insensitive. The following properties are supported:
 
  `keystoreType=""` 
      The keystore type. 
  `keystoreURI=""` 
      The keystore location. 
  `keystoreProviderName=""` 
      The name of the keystore's JCE provider. 
  `keystorePasswordEnv=""` 
      The environment variable that stores a keystore password.
          Alternatively, passwords may be supplied to the constructor
          method in a `Map`. 
  `entryNameSeparator=""` 
      The separator between a keystore name prefix and an entry name.
          When specified, it applies to all the entries in a domain.
          Its default value is a space. 
 
 

 For example, configuration data for a simple keystore domain
 comprising three keystores is shown below:
 
```

 domain app1 {
     keystore app1-truststore
         keystoreURI="file:///app1/etc/truststore.jks";

     keystore system-truststore
         keystoreURI="${java.home}/lib/security/cacerts";

     keystore app1-keystore
         keystoreType="PKCS12"
         keystoreURI="file:///app1/etc/keystore.p12";
 };

 
```

> *Since 1.8*
