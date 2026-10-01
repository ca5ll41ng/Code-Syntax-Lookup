---
id: "java-en-function-saslclientfactory-createsaslclient"
language: "java"
lang: "en"
category: "function"
name: "SaslClientFactory.createSaslClient"
signature: "public abstract SaslClient createSaslClient( String[] mechanisms, String authorizationId, String protocol, String serverName, Map<String,?> props, CallbackHandler cbh) throws SaslException"
title: "SaslClientFactory.createSaslClient"
directive: "method"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslClientFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslClientFactory.createSaslClient

```java
public abstract SaslClient createSaslClient( String[] mechanisms, String authorizationId, String protocol, String serverName, Map<String,?> props, CallbackHandler cbh) throws SaslException
```

Creates a SaslClient using the parameters supplied.

**参数**

- **mechanisms** — The non-null list of mechanism names to try. Each is the IANA-registered name of a SASL mechanism. (e.g. "GSSAPI", "CRAM-MD5").
- **authorizationId** — The possibly null protocol-dependent identification to be used for authorization. If null or empty, the server derives an authorization ID from the client's authentication credentials. When the SASL authentication completes successfully, the specified entity is granted access.
- **protocol** — The non-null string name of the protocol for which the authentication is being performed (e.g., "ldap").
- **serverName** — The non-null fully qualified host name of the server to authenticate to.
- **props** — The possibly null set of properties used to select the SASL mechanism and to configure the authentication exchange of the selected mechanism. See the `Sasl` class for a list of standard properties. Other, possibly mechanism-specific, properties can be included. Properties not relevant to the selected mechanism are ignored, including any map entries with non-String keys.
- **cbh** — The possibly null callback handler to used by the SASL mechanisms to get further information from the application/library to complete the authentication. For example, a SASL mechanism might require the authentication ID, password and realm from the caller. The authentication ID is requested by using a `NameCallback`. The password is requested by using a `PasswordCallback`. The realm is requested by using a `RealmChoiceCallback` if there is a list of realms to choose from, and by using a `RealmCallback` if the realm must be entered.

**返回**

- A possibly null `SaslClient` created using the parameters supplied. If null, this factory cannot produce a `SaslClient` using the parameters supplied.

**异常**

- **SaslException** — If cannot create a `SaslClient` because of an error.
