---
id: "en-php-guide-class-eventsslcontext"
language: "php"
lang: "en"
category: "guide"
name: "class.eventsslcontext"
title: "The EventSslContext class"
module: "event"
source_url: "https://www.php.net/manual/en/class.eventsslcontext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EventSslContext class

EventSslContext

   Introduction  Represents `SSL_CTX` structure. Provides methods and properties to configure the SSL context.      Class Synopsis    `EventSslContext`     `final` `EventSslContext`      `const` `int` `EventSslContext::SSLv2_CLIENT_METHOD` 1   `const` `int` `EventSslContext::SSLv3_CLIENT_METHOD` 2   `const` `int` `EventSslContext::SSLv23_CLIENT_METHOD` 3   `const` `int` `EventSslContext::TLS_CLIENT_METHOD` 4   `const` `int` `EventSslContext::SSLv2_SERVER_METHOD` 5   `const` `int` `EventSslContext::SSLv3_SERVER_METHOD` 6   `const` `int` `EventSslContext::SSLv23_SERVER_METHOD` 7   `const` `int` `EventSslContext::TLS_SERVER_METHOD` 8   `const` `int` `EventSslContext::OPT_LOCAL_CERT` 1   `const` `int` `EventSslContext::OPT_LOCAL_PK` 2   `const` `int` `EventSslContext::OPT_PASSPHRASE` 3   `const` `int` `EventSslContext::OPT_CA_FILE` 4   `const` `int` `EventSslContext::OPT_CA_PATH` 5   `const` `int` `EventSslContext::OPT_ALLOW_SELF_SIGNED` 6   `const` `int` `EventSslContext::OPT_VERIFY_PEER` 7   `const` `int` `EventSslContext::OPT_VERIFY_DEPTH` 8   `const` `int` `EventSslContext::OPT_CIPHERS` 9    `public` `string` `local_cert`   `public` `string` `local_pk`         Properties 
- **`local_cert`** — Path to local certificate file on filesystem. It must be a PEM-encoded file which contains certificate. It can optionally contain the certificate chain of issuers.
- **`local_pk`** — Path to local private key file

     Predefined Constants 
- **`EventSslContext::SSLv2_CLIENT_METHOD`** — SSLv2 client method. See `SSL_CTX_new(3)` man page.
- **`EventSslContext::SSLv3_CLIENT_METHOD`** — SSLv3 client method. See `SSL_CTX_new(3)` man page.
- **`EventSslContext::SSLv23_CLIENT_METHOD`** — SSLv23 client method. See `SSL_CTX_new(3)` man page.
- **`EventSslContext::TLS_CLIENT_METHOD`** — TLS client method. See `SSL_CTX_new(3)` man page.
- **`EventSslContext::SSLv2_SERVER_METHOD`** — SSLv2 server method. See `SSL_CTX_new(3)` man page.
- **`EventSslContext::SSLv3_SERVER_METHOD`** — SSLv3 server method. See `SSL_CTX_new(3)` man page.
- **`EventSslContext::SSLv23_SERVER_METHOD`** — SSLv23 server method. See `SSL_CTX_new(3)` man page.
- **`EventSslContext::TLS_SERVER_METHOD`** — TLS server method. See `SSL_CTX_new(3)` man page.
- **`EventSslContext::OPT_LOCAL_CERT`** — Key for an item of the options' array used in `EventSslContext::__construct()`. The option points to path of local certificate.
- **`EventSslContext::OPT_LOCAL_PK`** — Key for an item of the options' array used in `EventSslContext::__construct()`. The option points to path of the private key.
- **`EventSslContext::OPT_PASSPHRASE`** — Key for an item of the options' array used in `EventSslContext::__construct()`. Represents passphrase of the certificate.
- **`EventSslContext::OPT_CA_FILE`** — Key for an item of the options' array used in `EventSslContext::__construct()`. Represents path of the certificate authority file.
- **`EventSslContext::OPT_CA_PATH`** — Key for an item of the options' array used in `EventSslContext::__construct()`. Represents path where the certificate authority file should be searched for.
- **`EventSslContext::OPT_ALLOW_SELF_SIGNED`** — Key for an item of the options' array used in `EventSslContext::__construct()`. Represents option that allows self-signed certificates.
- **`EventSslContext::OPT_VERIFY_PEER`** — Key for an item of the options' array used in `EventSslContext::__construct()`. Represents option that tells Event to verify peer.
- **`EventSslContext::OPT_VERIFY_DEPTH`** — Key for an item of the options' array used in `EventSslContext::__construct()`. Represents maximum depth for the certificate chain verification that shall be allowed for the SSL context.
- **`EventSslContext::OPT_CIPHERS`** — Key for an item of the options' array used in `EventSslContext::__construct()`. Represents the cipher list for the SSL context.
