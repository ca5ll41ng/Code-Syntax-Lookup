---
id: "java-en-function-saslserverfactory-createsaslserver"
language: "java"
lang: "en"
category: "function"
name: "SaslServerFactory.createSaslServer"
signature: "public abstract SaslServer createSaslServer( String mechanism, String protocol, String serverName, Map<String,?> props, CallbackHandler cbh) throws SaslException"
title: "SaslServerFactory.createSaslServer"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServerFactory.createSaslServer

```java
public abstract SaslServer createSaslServer( String mechanism, String protocol, String serverName, Map<String,?> props, CallbackHandler cbh) throws SaslException
```

Creates a `SaslServer` using the parameters supplied.
 It returns null
 if no `SaslServer` can be created using the parameters supplied.
 Throws `SaslException` if it cannot create a `SaslServer`
 because of an error.

**参数**

- **mechanism** — The non-null IANA-registered name of a SASL mechanism. (e.g. "GSSAPI", "CRAM-MD5").
- **protocol** — The non-null string name of the protocol for which the authentication is being performed (e.g., "ldap").
- **serverName** — The fully qualified host name of the server to authenticate to, or null if the server is not bound to any specific host name. If the mechanism does not allow an unbound server, a `SaslException` will be thrown.
- **props** — The possibly null set of properties used to select the SASL mechanism and to configure the authentication exchange of the selected mechanism. See the `Sasl` class for a list of standard properties. Other, possibly mechanism-specific, properties can be included. Properties not relevant to the selected mechanism are ignored, including any map entries with non-String keys.
- **cbh** — The possibly null callback handler to used by the SASL mechanisms to get further information from the application/library to complete the authentication. For example, a SASL mechanism might require the authentication ID, password and realm from the caller. The authentication ID is requested by using a `NameCallback`. The password is requested by using a `PasswordCallback`. The realm is requested by using a `RealmChoiceCallback` if there is a list of realms to choose from, and by using a `RealmCallback` if the realm must be entered.

**返回**

- A possibly null `SaslServer` created using the parameters supplied. If null, this factory cannot produce a `SaslServer` using the parameters supplied.

**异常**

- **SaslException** — If cannot create a `SaslServer` because of an error.
