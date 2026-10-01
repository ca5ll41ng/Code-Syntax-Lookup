---
id: "java-en-function-sasl-createsaslserver"
language: "java"
lang: "en"
category: "function"
name: "Sasl.createSaslServer"
signature: "public static SaslServer createSaslServer(String mechanism, String protocol, String serverName, Map<String,?> props, javax.security.auth.callback.CallbackHandler cbh) throws SaslException"
title: "Sasl.createSaslServer"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/Sasl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sasl.createSaslServer

```java
public static SaslServer createSaslServer(String mechanism, String protocol, String serverName, Map<String,?> props, javax.security.auth.callback.CallbackHandler cbh) throws SaslException
```

Creates a `SaslServer` for the specified mechanism.

 This method uses the
 `security_guide_jca JCA Security Provider Framework`,
 described in the
 "Java Cryptography Architecture (JCA) Reference Guide", for
 locating and selecting a `SaslClient` implementation.

 First, it
 obtains an ordered list of `SaslServerFactory` instances from
 the registered security providers for the "SaslServerFactory" service
 and the specified mechanism. It then invokes
 `createSaslServer()` on each factory instance on the list
 until one produces a non-null `SaslServer` instance. It returns
 the non-null `SaslServer` instance, or null if the search fails
 to produce a non-null `SaslServer` instance.

 A security provider for SaslServerFactory registers with the
 JCA Security Provider Framework keys of the form 

 `SaslServerFactory.``mechanism_name`
 

 and values that are class names of implementations of
 `javax.security.sasl.SaslServerFactory`.

 For example, a provider that contains a factory class,
 `com.wiz.sasl.digest.ServerFactory`, that supports the
 "DIGEST-MD5" mechanism would register the following entry with the JCA:
 `SaslServerFactory.DIGEST-MD5  com.wiz.sasl.digest.ServerFactory`

 See the
 "Java Cryptography Architecture API Specification &amp; Reference"
 for information about how to install and configure security
 service providers.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different than the order of providers returned by
 `getProviders`.
 

 If `mechanism` is listed in the `jdk.sasl.disabledMechanisms`
 security property, it will be ignored and this method returns `null`.

**参数**

- **mechanism** — The non-null mechanism name. It must be an IANA-registered name of a SASL mechanism. (e.g. "GSSAPI", "CRAM-MD5").
- **protocol** — The non-null string name of the protocol for which the authentication is being performed (e.g., "ldap").
- **serverName** — The fully qualified host name of the server, or null if the server is not bound to any specific host name. If the mechanism does not allow an unbound server, a `SaslException` will be thrown.
- **props** — The possibly null set of properties used to select the SASL mechanism and to configure the authentication exchange of the selected mechanism. For example, if `props` contains the `Sasl.POLICY_NOPLAINTEXT` property with the value `"true"`, then the selected SASL mechanism must not be susceptible to simple plain passive attacks. In addition to the standard properties declared in this class, other, possibly mechanism-specific, properties can be included. Properties not relevant to the selected mechanism are ignored, including any map entries with non-String keys.
- **cbh** — The possibly null callback handler to used by the SASL mechanisms to get further information from the application/library to complete the authentication. For example, a SASL mechanism might require the authentication ID, password and realm from the caller. The authentication ID is requested by using a `NameCallback`. The password is requested by using a `PasswordCallback`. The realm is requested by using a `RealmChoiceCallback` if there is a list of realms to choose from, and by using a `RealmCallback` if the realm must be entered.

**返回**

- A possibly null `SaslServer` created using the parameters supplied. If null, cannot find a `SaslServerFactory` that will produce one.

**异常**

- **SaslException** — If cannot create a `SaslServer` because of an error.
