---
id: "java-en-function-sasl-createsaslclient"
language: "java"
lang: "en"
category: "function"
name: "Sasl.createSaslClient"
signature: "public static SaslClient createSaslClient( String[] mechanisms, String authorizationId, String protocol, String serverName, Map<String,?> props, CallbackHandler cbh) throws SaslException"
title: "Sasl.createSaslClient"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.createSaslClient

```java
public static SaslClient createSaslClient( String[] mechanisms, String authorizationId, String protocol, String serverName, Map<String,?> props, CallbackHandler cbh) throws SaslException
```

Creates a `SaslClient` using the parameters supplied.

 This method uses the
 `security_guide_jca JCA Security Provider Framework`,
 described in the
 "Java Cryptography Architecture (JCA) Reference Guide", for
 locating and selecting a `SaslClient` implementation.

 First, it
 obtains an ordered list of `SaslClientFactory` instances from
 the registered security providers for the "SaslClientFactory" service
 and the specified SASL mechanism(s). It then invokes
 `createSaslClient()` on each factory instance on the list
 until one produces a non-null `SaslClient` instance. It returns
 the non-null `SaslClient` instance, or null if the search fails
 to produce a non-null `SaslClient` instance.

 A security provider for SaslClientFactory registers with the
 JCA Security Provider Framework keys of the form 

 `SaslClientFactory.``mechanism_name`
 

 and values that are class names of implementations of
 `javax.security.sasl.SaslClientFactory`.

 For example, a provider that contains a factory class,
 `com.wiz.sasl.digest.ClientFactory`, that supports the
 "DIGEST-MD5" mechanism would register the following entry with the JCA:
 `SaslClientFactory.DIGEST-MD5 com.wiz.sasl.digest.ClientFactory`

 See the
 "Java Cryptography Architecture API Specification &amp; Reference"
 for information about how to install and configure security service
  providers.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different than the order of providers returned by
 `getProviders`.
 

 If a mechanism is listed in the `jdk.sasl.disabledMechanisms`
 security property, it will be ignored and won't be negotiated.

**参数**

- **mechanisms** — The non-null list of mechanism names to try. Each is the IANA-registered name of a SASL mechanism. (e.g. "GSSAPI", "CRAM-MD5").
- **authorizationId** — The possibly null protocol-dependent identification to be used for authorization. If null or empty, the server derives an authorization ID from the client's authentication credentials. When the SASL authentication completes successfully, the specified entity is granted access.
- **protocol** — The non-null string name of the protocol for which the authentication is being performed (e.g., "ldap").
- **serverName** — The non-null fully-qualified host name of the server to authenticate to.
- **props** — The possibly null set of properties used to select the SASL mechanism and to configure the authentication exchange of the selected mechanism. For example, if `props` contains the `Sasl.POLICY_NOPLAINTEXT` property with the value `"true"`, then the selected SASL mechanism must not be susceptible to simple plain passive attacks. In addition to the standard properties declared in this class, other, possibly mechanism-specific, properties can be included. Properties not relevant to the selected mechanism are ignored, including any map entries with non-String keys.
- **cbh** — The possibly null callback handler to used by the SASL mechanisms to get further information from the application/library to complete the authentication. For example, a SASL mechanism might require the authentication ID, password and realm from the caller. The authentication ID is requested by using a `NameCallback`. The password is requested by using a `PasswordCallback`. The realm is requested by using a `RealmChoiceCallback` if there is a list of realms to choose from, and by using a `RealmCallback` if the realm must be entered.

**返回**

- A possibly null `SaslClient` created using the parameters supplied. If null, cannot find a `SaslClientFactory` that will produce one.

**异常**

- **SaslException** — If cannot create a `SaslClient` because of an error.
