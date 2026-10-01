---
id: "en-php-guide-ldap-constants"
language: "php"
lang: "en"
category: "guide"
name: "ldap.constants"
title: "Predefined Constants"
module: "ldap"
source_url: "https://www.php.net/manual/en/ldap.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`LDAP_DEREF_NEVER` (`int`)** — Alias dereferencing rule - Never.
- **`LDAP_DEREF_SEARCHING` (`int`)** — Alias dereferencing rule - Searching.
- **`LDAP_DEREF_FINDING` (`int`)** — Alias dereferencing rule - Finding.
- **`LDAP_DEREF_ALWAYS` (`int`)** — Alias dereferencing rule - Always.
- **`LDAP_OPT_DEREF` (`int`)** — Specifies alternative rules for following aliases at the server.
- **`LDAP_OPT_SIZELIMIT` (`int`)** — Specifies the maximum number of entries that can be returned on a search operation.
  > The actual size limit for operations is also bounded by the server's configured maximum number of return entries. The lesser of these two settings is the actual size limit.


- **`LDAP_OPT_TIMELIMIT` (`int`)** — Specifies the number of seconds to wait for search results.
  > The actual time limit for operations is also bounded by the server's configured maximum time. The lesser of these two settings is the actual time limit.


- **`LDAP_OPT_NETWORK_TIMEOUT` (`int`)** — Option for `ldap_set_option()` to allow setting network timeout. (Available as of PHP 5.3.0)
- **`LDAP_OPT_PROTOCOL_VERSION` (`int`)** — Specifies the LDAP protocol to be used (V2 or V3).
- **`LDAP_OPT_ERROR_NUMBER` (`int`)** — Latest session error number.
- **`LDAP_OPT_REFERRALS` (`int`)** — Specifies whether to automatically follow referrals returned by the LDAP server.
- **`LDAP_OPT_RESTART` (`int`)** — Determines whether or not the connection should be implicitly restarted.
- **`LDAP_OPT_HOST_NAME` (`int`)** — Sets/gets a space-separated of hosts when trying to connect.
- **`LDAP_OPT_ERROR_STRING` (`int`)** — Alias of `LDAP_OPT_DIAGNOSTIC_MESSAGE`.
- **`LDAP_OPT_DIAGNOSTIC_MESSAGE` (`int`)** — Gets the latest session error message.
- **`LDAP_OPT_MATCHED_DN` (`int`)** — Sets/gets the matched DN associated with the connection.
- **`LDAP_OPT_SERVER_CONTROLS` (`int`)** — Specifies a default list of server controls to be sent with each request.
- **`LDAP_OPT_CLIENT_CONTROLS` (`int`)** — Specifies a default list of client controls to be processed with each request.
- **`LDAP_OPT_DEBUG_LEVEL` (`int`)** — Specifies a bitwise level for debug traces. The traces are written to `stderr`. The levels are defined by OpenLDAP, in its `ldap_log.h` header; PHP does not expose them as constants.
- **`LDAP_OPT_X_KEEPALIVE_IDLE` (`int`)** — Specifies the number of seconds a connection needs to remain idle before TCP starts sending keepalive probes.
- **`LDAP_OPT_X_KEEPALIVE_PROBES` (`int`)** — Specifies the maximum number of keepalive probes TCP should send before dropping the connection.
- **`LDAP_OPT_X_KEEPALIVE_INTERVAL` (`int`)** — Specifies the interval in seconds between individual keepalive probes.
- **`LDAP_OPT_X_TLS_CACERTDIR` (`int`)** — Specifies the path of the directory containing CA certificates.
- **`LDAP_OPT_X_TLS_CACERTFILE` (`int`)** — Specifies the full-path of the CA certificate file.
- **`LDAP_OPT_X_TLS_CERTFILE` (`int`)** — Specifies the full-path of the certificate file.
- **`LDAP_OPT_X_TLS_CIPHER_SUITE` (`int`)** — Specifies the allowed cipher suite.
- **`LDAP_OPT_X_TLS_CRLCHECK` (`int`)** — Specifies the CRL evaluation strategy. This must be one of: `LDAP_OPT_X_TLS_CRL_NONE`,`LDAP_OPT_X_TLS_CRL_PEER`, `LDAP_OPT_X_TLS_CRL_ALL`.
  > This option is only valid for OpenSSL.


- **`LDAP_OPT_X_TLS_CRLFILE` (`int`)** — Specifies the full-path of the CRL file.
  > This option is only valid for GnuTLS.


- **`LDAP_OPT_X_TLS_DHFILE` (`int`)** — Specifies the full-path of the file containing the parameters for Diffie-Hellman ephemeral key exchange.
  > This option is ignored by GnuTLS and Mozilla NSS.


- **`LDAP_OPT_X_TLS_KEYFILE` (`int`)** — Specifies the full-path of the certificate key file.
- **`LDAP_OPT_X_TLS_PROTOCOL_MIN` (`int`)** — Specifies the minimum protocol version. This can be one of: `LDAP_OPT_X_TLS_PROTOCOL_SSL2`,`LDAP_OPT_X_TLS_PROTOCOL_SSL3`, `LDAP_OPT_X_TLS_PROTOCOL_TLS1_0`, `LDAP_OPT_X_TLS_PROTOCOL_TLS1_1`, `LDAP_OPT_X_TLS_PROTOCOL_TLS1_2`, `LDAP_OPT_X_TLS_PROTOCOL_TLS1_3`
- **`LDAP_OPT_X_TLS_PROTOCOL_MAX` (`int`)** — Specifies the maximum protocol version. This can be one of: `LDAP_OPT_X_TLS_PROTOCOL_SSL2`, `LDAP_OPT_X_TLS_PROTOCOL_SSL3`, `LDAP_OPT_X_TLS_PROTOCOL_TLS1_0`, `LDAP_OPT_X_TLS_PROTOCOL_TLS1_1`, `LDAP_OPT_X_TLS_PROTOCOL_TLS1_2`, `LDAP_OPT_X_TLS_PROTOCOL_TLS1_3`. Available as of PHP 8.4.0.
- **`LDAP_OPT_X_TLS_RANDOM_FILE` (`int`)** — Sets/gets the random file when one of the system default ones are not available.
- **`LDAP_OPT_X_TLS_REQUIRE_CERT` (`int`)** — Specifies the certificate checking strategy. This must be one of: `LDAP_OPT_X_TLS_NEVER`,`LDAP_OPT_X_TLS_HARD`, `LDAP_OPT_X_TLS_DEMAND`, `LDAP_OPT_X_TLS_ALLOW`, `LDAP_OPT_X_TLS_TRY`. (Available as of PHP 7.0.0)
- **`GSLC_SSL_NO_AUTH` (`int`)** — SSL Authentication Mode - No authentication required. (Only for Oracle LDAP)
  > Deprecated as of PHP 8.5.0.


- **`GSLC_SSL_ONEWAY_AUTH` (`int`)** — SSL Authentication Mode - Only server authentication required. (Only for Oracle LDAP)
  > Deprecated as of PHP 8.5.0.


- **`GSLC_SSL_TWOWAY_AUTH` (`int`)** — SSL Authentication Mode - Both server and client authentication required. (Only for Oracle LDAP)
  > Deprecated as of PHP 8.5.0.


- **`LDAP_EXOP_START_TLS` (`string`)** — Extended Operation constant - Start TLS ([RFC 4511](4511)).
- **`LDAP_EXOP_MODIFY_PASSWD` (`string`)** — Extended Operation constant - Modify password ([RFC 3062](3062)).
- **`LDAP_EXOP_REFRESH` (`string`)** — Extended Operation Constant - Refresh ([RFC 2589](2589)).
- **`LDAP_EXOP_WHO_AM_I` (`string`)** — Extended Operation Constant - WHOAMI ([RFC 4532](4532)).
- **`LDAP_EXOP_TURN` (`string`)** — Extended Operation Constant - Turn ([RFC 4531](4531)).
- **`LDAP_CONTROL_MANAGEDSAIT` (`string`)** — Control Constant - Manage DSA IT ([RFC 3296](3296)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_PROXY_AUTHZ` (`string`)** — Control Constant - Proxied Authorization ([RFC 4370](4730)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_SUBENTRIES` (`string`)** — Control Constant - Subentries ([RFC 3672](3672)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_VALUESRETURNFILTER` (`string`)** — Control Constant - Filter returned values ([RFC 3876](3876)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_ASSERT` (`string`)** — Control Constant - Assertion ([RFC 4528](4528)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_PRE_READ` (`string`)** — Control Constant - Pre read ([RFC 4527](4527)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_POST_READ` (`string`)** — Control Constant - Post read ([RFC 4527](4527)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_SORTREQUEST` (`string`)** — Control Constant - Sort request ([RFC 2891](2891)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_SORTRESPONSE` (`string`)** — Control Constant - Sort response ([RFC 2891](2891)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_PAGEDRESULTS` (`string`)** — Control Constant - Paged results ([RFC 2696](2696)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_AUTHZID_REQUEST` (`string`)** — Control Constant - Authorization Identity Request ([RFC 3829](3829)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_AUTHZID_RESPONSE` (`string`)** — Control Constant - Authorization Identity Response ([RFC 3829](3829)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_SYNC` (`string`)** — Control Constant - Content Synchronization Operation ([RFC 4533](4533)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_SYNC_STATE` (`string`)** — Control Constant - Content Synchronization Operation State ([RFC 4533](4533)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_SYNC_DONE` (`string`)** — Control Constant - Content Synchronization Operation Done ([RFC 4533](4533)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_DONTUSECOPY` (`string`)** — Control Constant - Don't Use Copy ([RFC 6171](6171)). Available as of PHP 7.3.0.
- **`LDAP_CONTROL_PASSWORDPOLICYREQUEST` (`string`)** — Control Constant - Password Policy Request. Available as of PHP 7.3.0.
- **`LDAP_CONTROL_PASSWORDPOLICYRESPONSE` (`string`)** — Control Constant - Password Policy Response. Available as of PHP 7.3.0.
- **`LDAP_CONTROL_X_INCREMENTAL_VALUES` (`string`)** — Control Constant - Active Directory Incremental Values. Available as of PHP 7.3.0.
- **`LDAP_CONTROL_X_DOMAIN_SCOPE` (`string`)** — Control Constant - Active Directory Domain Scope. Available as of PHP 7.3.0.
- **`LDAP_CONTROL_X_PERMISSIVE_MODIFY` (`string`)** — Control Constant - Active Directory Permissive Modify. Available as of PHP 7.3.0.
- **`LDAP_CONTROL_X_SEARCH_OPTIONS` (`string`)** — Control Constant - Active Directory Search Options. Available as of PHP 7.3.0.
- **`LDAP_CONTROL_X_TREE_DELETE` (`string`)** — Control Constant - Active Directory Tree Delete. Available as of PHP 7.3.0.
- **`LDAP_CONTROL_X_EXTENDED_DN` (`string`)** — Control Constant - Active Directory Extended DN. Available as of PHP 7.3.0.
- **`LDAP_CONTROL_VLVREQUEST` (`string`)** — Control Constant - Virtual List View Request. Available as of PHP 7.3.0.
- **`LDAP_CONTROL_VLVRESPONSE` (`string`)** — Control Constant - Virtual List View Response. Available as of PHP 7.3.0.
- **`LDAP_ESCAPE_DN` (`int`)** — Escape a string for use in an LDAP DN.
- **`LDAP_ESCAPE_FILTER` (`int`)** — Escape a string for use in an LDAP filter.
- **`LDAP_MODIFY_BATCH_ATTRIB` (`string`)** — The key of the modifications array containing the attributes: `attrib`.
- **`LDAP_MODIFY_BATCH_MODTYPE` (`string`)** — The key of the modifications array containing the type of modification: `modtype`.
- **`LDAP_MODIFY_BATCH_VALUES` (`string`)** — The key of the modifications array containing the values: `values`.
- **`LDAP_MODIFY_BATCH_ADD` (`int`)** — Add values to an attribute of an LDAP entry.
- **`LDAP_MODIFY_BATCH_REMOVE` (`int`)** — Remove values from an attribute of an LDAP entry.
- **`LDAP_MODIFY_BATCH_REMOVE_ALL` (`int`)** — Remove all values from an attribute of an LDAP entry.
- **`LDAP_MODIFY_BATCH_REPLACE` (`int`)** — Replace all current values of an LDAP entry attribute with the specified values.
- **`LDAP_OPT_TIMEOUT` (`int`)** — Specifies a timeout (in seconds) after which calls to synchronous LDAP APIs will abort if no response is received. Also controls the timeout when communicating with the KDC in case of SASL bind.
- **`LDAP_OPT_X_SASL_AUTHCID` (`int`)** — Return the SASL authentication identity.
- **`LDAP_OPT_X_SASL_AUTHZID` (`int`)** — Return the SASL authorization identity.
- **`LDAP_OPT_X_SASL_MECH` (`int`)** — Return the SASL mechanism.
- **`LDAP_OPT_X_SASL_NOCANON` (`int`)** — Set/get the `NOCANON` flag. When unset, the hostname is canonicalized.
- **`LDAP_OPT_X_SASL_REALM` (`int`)** — Return the SASL realm.
- **`LDAP_OPT_X_SASL_USERNAME` (`int`)** — Return the SASL username.
- **`LDAP_OPT_X_TLS_ALLOW` (`int`)** — The peer certificate is requested. If no certificate is provided, the session proceeds normally. If a bad certificate is provided, it will be ignored and the session proceeds normally.
- **`LDAP_OPT_X_TLS_DEMAND` (`int`)** — The peer certificate is requested. If no certificate is provided, or a bad certificate is provided, the session is immediately terminated.
- **`LDAP_OPT_X_TLS_HARD` (`int`)** —  `LDAP_OPT_X_TLS_DEMAND`.
- **`LDAP_OPT_X_TLS_NEVER` (`int`)** — The peer certificate is not requested or checked.
- **`LDAP_OPT_X_TLS_TRY` (`int`)** — The peer certificate is requested. If no certificate is provided, the session proceeds normally. If a bad certificate is provided, the session is immediately terminated.
- **`LDAP_OPT_X_TLS_CRL_ALL` (`int`)** — Check the CRL for a whole certificate chain.
- **`LDAP_OPT_X_TLS_CRL_NONE` (`int`)** — No CRL checks are performed.
- **`LDAP_OPT_X_TLS_CRL_PEER` (`int`)** — Check the CRL of the peer certificate.
- **`LDAP_OPT_X_TLS_PACKAGE` (`int`)** — Return the name of the underlying TLS implementation.
- **`LDAP_OPT_X_TLS_PROTOCOL_SSL2` (`int`)** — The SSL 2.0 protocol.
- **`LDAP_OPT_X_TLS_PROTOCOL_SSL3` (`int`)** — The SSL 3 protocol.
- **`LDAP_OPT_X_TLS_PROTOCOL_TLS1_0` (`int`)** — The TLS 1.0 protocol.
- **`LDAP_OPT_X_TLS_PROTOCOL_TLS1_1` (`int`)** — The TLS 1.1 protocol.
- **`LDAP_OPT_X_TLS_PROTOCOL_TLS1_2` (`int`)** — The TLS 1.2 protocol.
- **`LDAP_OPT_X_TLS_PROTOCOL_TLS1_3` (`int`)** — The TLS 1.3 protocol. Available as of PHP 8.4.0.
