---
id: "java-en-function-kerberosticket-kerberosticket"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.KerberosTicket"
signature: "public KerberosTicket(byte[] asn1Encoding, KerberosPrincipal client, KerberosPrincipal server, byte[] sessionKey, int keyType, boolean[] flags, Date authTime, Date startTime, Date endTime, Date renewTill, InetAddress[] clientAddresses)"
title: "KerberosTicket.KerberosTicket"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.KerberosTicket

```java
public KerberosTicket(byte[] asn1Encoding, KerberosPrincipal client, KerberosPrincipal server, byte[] sessionKey, int keyType, boolean[] flags, Date authTime, Date startTime, Date endTime, Date renewTill, InetAddress[] clientAddresses)
```

Constructs a `KerberosTicket` using credentials information that a
 client either receives from a KDC or reads from a cache.

**参数**

- **asn1Encoding** — the ASN.1 encoding of the ticket as defined by the Kerberos protocol specification.
- **client** — the client that owns this service ticket
- **server** — the service that this ticket is for
- **sessionKey** — the raw bytes for the session key that must be used to encrypt the authenticator that will be sent to the server
- **keyType** — the key type for the session key as defined by the Kerberos protocol specification.
- **flags** — the ticket flags. Each element in this array indicates the value for the corresponding bit in the ASN.1 BitString that represents the ticket flags. If the number of elements in this array is less than the number of flags used by the Kerberos protocol, then the missing flags will be filled in with false.
- **authTime** — the time of initial authentication for the client
- **startTime** — the time after which the ticket will be valid. This may be null in which case the value of authTime is treated as the startTime.
- **endTime** — the time after which the ticket will no longer be valid
- **renewTill** — an absolute expiration time for the ticket, including all renewal that might be possible. This field may be null for tickets that are not renewable.
- **clientAddresses** — the addresses from where the ticket may be used by the client. This field may be null when the ticket is usable from any address.
