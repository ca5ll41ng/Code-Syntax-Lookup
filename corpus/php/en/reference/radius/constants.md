---
id: "en-php-guide-radius-constants"
language: "php"
lang: "en"
category: "guide"
name: "radius.constants"
title: "Predefined Constants"
module: "radius"
source_url: "https://www.php.net/manual/en/radius.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`RADIUS_MPPE_KEY_LEN` (`int`)** — The maximum length of MPPE keys.

## RADIUS Options

Several RADIUS functions accept option flags as bitmasks. The constants representing those flags are listed below.

- **`RADIUS_OPTION_SALT` (`int`)** — When set, this option will result in the attribute value being salt-encrypted.
- **`RADIUS_OPTION_TAGGED` (`int`)** — When set, this option will result in the attribute value being tagged with the value of the tag parameter.

## RADIUS Packet Types

RADIUS packets, whether requests or responses, always include a type. These constants are provided to make it easier to specify types when using `radius_create_request()` and when comparing the result of `radius_send_request()`.

- **`RADIUS_ACCESS_REQUEST` (`int`)** — An Access-Request, used to authenticate a user against a RADIUS server. Access request packets must include a `RADIUS_NAS_IP_ADDRESS` or a `RADIUS_NAS_IDENTIFIER` attribute, must also include a `RADIUS_USER_PASSWORD`, `RADIUS_CHAP_PASSWORD` or a `RADIUS_STATE` attribute, and should include a `RADIUS_USER_NAME` attribute.
- **`RADIUS_ACCESS_ACCEPT` (`int`)** — An Access-Accept response to an Access-Request indicating that the RADIUS server authenticated the user successfully.
- **`RADIUS_ACCESS_REJECT` (`int`)** — An Access-Reject response to an Access-Request indicating that the RADIUS server could not authenticate the user.
- **`RADIUS_ACCESS_CHALLENGE` (`int`)** — An Access-Challenge response to an Access-Request indicating that the RADIUS server requires further information in another Access-Request before authenticating the user.
- **`RADIUS_ACCOUNTING_REQUEST` (`int`)** — An Accounting-Request, used to convey accounting information for a service to the RADIUS server.
- **`RADIUS_ACCOUNTING_RESPONSE` (`int`)** — An Accounting-Response response to an Accounting-Request.
- **`RADIUS_COA_REQUEST` (`int`)** — A CoA-Request, sent from the RADIUS server to indicate that the authorisations within the user session have changed. A response must be sent in the form of a CoA-ACK or a CoA-NAK. — This constant is available in PECL radius 1.3.0 and later.
- **`RADIUS_COA_ACK` (`int`)** — A CoA-ACK, sent to the RADIUS server to indicate that the user authorisations have been updated. — This constant is available in PECL radius 1.3.0 and later.
- **`RADIUS_COA_NAK` (`int`)** — A CoA-NAK, sent to the RADIUS server to indicate that the user authorisations could not be updated. — This constant is available in PECL radius 1.3.0 and later.
- **`RADIUS_DISCONNECT_REQUEST` (`int`)** — A Disconnect-Request, sent from the RADIUS server to indicate that the user session must be terminated. — This constant is available in PECL radius 1.3.0 and later.
- **`RADIUS_DISCONNECT_ACK` (`int`)** — A Disconnect-ACK, sent to the RADIUS server to indicate that the user session has been terminated. — This constant is available in PECL radius 1.3.0 and later.
- **`RADIUS_DISCONNECT_NAK` (`int`)** — A Disconnect-NAK, sent to the RADIUS server to indicate that the user session could not be terminated. — This constant is available in PECL radius 1.3.0 and later.

## RADIUS Attribute Types

These constants define RADIUS attribute types that can be used with `radius_put_addr()`, `radius_put_attr()`, `radius_put_int()` and `radius_put_string()`.

- **`RADIUS_USER_NAME` (`int`)** — The User-Name attribute. The attribute value is expected to be a `string` containing the name of the user being authenticated, and can be set using `radius_put_attr()`.
- **`RADIUS_USER_PASSWORD` (`int`)** — The User-Password attribute. The attribute value is expected to be a `string` containing the user's password, and can be set using `radius_put_attr()`. This value will be obfuscated on transmission as described in [section 5.2 of RFC 2865](2865).
- **`RADIUS_CHAP_PASSWORD` (`int`)** — The Chap-Password attribute. The attribute value is expected to be a `string` with the first byte containing the CHAP identifier, and the subsequent 16 bytes containing the MD5 hash of the CHAP identifier, the plaintext password and the CHAP challenge value concatenated together. Note that the CHAP challenge value should also be sent separately in a `RADIUS_CHAP_CHALLENGE` attribute.
  **Using CHAP passwords**

  ```php


  <?php
  // Firstly, we'll create an authentication handle and request.
  $radh = radius_auth_open();
  radius_add_server($radh, $server, $port, $secret, 3, 3);
  radius_create_request($radh, RADIUS_ACCESS_REQUEST);

  // Assuming $password contains the plaintext password, we now:

  // Generate a challenge.
  $challenge = mt_rand();

  // Specify a CHAP identifier.
  $ident = 1;

  // Add the Chap-Password attribute.
  $cp = hash('md5', pack('Ca*', $ident, $password.$challenge), true);
  radius_put_attr($radh, RADIUS_CHAP_PASSWORD, pack('C', $ident).$cp);

  // Add the Chap-Challenge attribute.
  radius_put_attr($radh, RADIUS_CHAP_CHALLENGE, $challenge);

  /* From here, you would add the remaining attributes and
   * call radius_send_request(). */
  ?>

        
  ```


- **`RADIUS_NAS_IP_ADDRESS` (`int`)** — The NAS-IP-Address attribute. The attribute value is expected to the IP address of the RADIUS client encoded as an `int`, which can be set using `radius_put_addr()`.
- **`RADIUS_NAS_PORT` (`int`)** — The NAS-Port attribute. The attribute value is expected to be the physical port of the user on the RADIUS client encoded as an `int`, which can be set using `radius_put_int()`.
- **`RADIUS_SERVICE_TYPE` (`int`)** — The Service-Type attribute. The attribute value indicates the service type the user is requesting, and is expected to be an `int`, which can be set using `radius_put_int()`. — A number of constants are provided to represent the possible values of this attribute. They include: `RADIUS_LOGIN` `RADIUS_FRAMED` `RADIUS_CALLBACK_LOGIN` `RADIUS_CALLBACK_FRAMED` `RADIUS_OUTBOUND` `RADIUS_ADMINISTRATIVE` `RADIUS_NAS_PROMPT` `RADIUS_AUTHENTICATE_ONLY` `RADIUS_CALLBACK_NAS_PROMPT`
- **`RADIUS_FRAMED_PROTOCOL` (`int`)** — The Framed-Protocol attribute. The attribute value is expected to be an `int` indicating the framing to be used for framed access, and can be set using `radius_put_int()`. The possible attribute values include these constants: `RADIUS_PPP` `RADIUS_SLIP` `RADIUS_ARAP` `RADIUS_GANDALF` `RADIUS_XYLOGICS`
- **`RADIUS_FRAMED_IP_ADDRESS` (`int`)** — The Framed-IP-Address attribute. The attribute value is expected to be the address of the user's network encoded as an `int`, which can be set using `radius_put_addr()` and retrieved using `radius_cvt_addr()`.
- **`RADIUS_FRAMED_IP_NETMASK` (`int`)** — The Framed-IP-Netmask attribute. The attribute value is expected to be the netmask of the user's network encoded as an `int`, which can be set using `radius_put_addr()` and retrieved using `radius_cvt_addr()`.
- **`RADIUS_FRAMED_ROUTING` (`int`)** — The Framed-Routing attribute. The attribute value is expected to be an `int` indicating the routing method for the user, which can be set using `radius_put_int()`. — Possible values include: `0`: No routing `1`: Send routing packets `2`: Listen for routing packets `3`: Send and listen
- **`RADIUS_FILTER_ID` (`int`)** — The Filter-ID attribute. The attribute value is expected to be an implementation-specific, human-readable `string` of filters, which can be set using `radius_put_attr()`.
- **`RADIUS_FRAMED_MTU` (`int`)** — The Framed-MTU attribute. The attribute value is expected to be an `int` indicating the MTU to be configured for the user, and can be set using `radius_put_int()`.
- **`RADIUS_FRAMED_COMPRESSION` (`int`)** — The Framed-Compression attribute. The attribute value is expected to be an `int` indicating the compression protocol to be used, and can be set using `radius_put_int()`. Possible values include these constants: `RADIUS_COMP_NONE`: No compression `RADIUS_COMP_VJ`: VJ TCP/IP header compression `RADIUS_COMP_IPXHDR`: IPX header compression `RADIUS_COMP_STAC_LZS`: Stac-LZS compression (added in PECL radius 1.3.0b2)
- **`RADIUS_LOGIN_IP_HOST` (`int`)** — The Login-IP-Host attribute. The attribute value is expected to the IP address to connect the user to, encoded as an `int`, which can be set using `radius_put_addr()`.
- **`RADIUS_LOGIN_SERVICE` (`int`)** — The Login-Service attribute. The attribute value is an `int` indicating the service to connect the user to on the login host. The value can be converted to a PHP integer via `radius_cvt_int()`.
- **`RADIUS_LOGIN_TCP_PORT` (`int`)** — The Login-TCP-Port attribute. The attribute value is an `int` indicating the port to connect the user to on the login host. The value can be converted to a PHP integer via `radius_cvt_int()`.
- **`RADIUS_REPLY_MESSAGE` (`int`)** — The Reply-Message attribute. The attribute value is a `string` containing text that may be displayed to the user in response to an access request.
- **`RADIUS_CALLBACK_NUMBER` (`int`)** — The Callback-Number attribute. The attribute value is a `string` containing the dialing string to use for callback.
- **`RADIUS_CALLBACK_ID` (`int`)** — The Callback-Id attribute. The attribute value is a `string` containing an implementation-specific name of the place to be called.
- **`RADIUS_FRAMED_ROUTE` (`int`)** — The Framed-Route attribute. The attribute value is a `string` containing an implementation-specific set of routes to be configured for the user.
- **`RADIUS_FRAMED_IPX_NETWORK` (`int`)** — The Framed-IPX-Network attribute. The attribute value is an `int` containing the IPX network to be configured for the user, or `0xFFFFFFFE` to indicate that the RADIUS client should select the network, and can be accessed via `radius_cvt_int()`.
- **`RADIUS_STATE` (`int`)** — The State attribute. The attribute value is an implementation-defined `string` included in an Access-Challenge from a server that must be included in the subsequent Access-Request, and can be set using `radius_put_attr()`.
- **`RADIUS_CLASS` (`int`)** — The Class attribute. The attribute value is an arbitrary `string` included in an Access-Accept message that should then be sent to the accounting server in Accounting-Request messages, and can be set using `radius_put_attr()`.
- **`RADIUS_VENDOR_SPECIFIC` (`int`)** — The Vendor-Specific attribute. In general, vendor attribute values should be set using `radius_put_vendor_addr()`, `radius_put_vendor_attr()`, `radius_put_vendor_int()` and `radius_put_vendor_string()`, rather than directly. — This constant is mostly useful when interpreting vendor specific attributes in responses from a RADIUS server; when a vendor specific attribute is received, the `radius_get_vendor_attr()` function should be used to access the vendor ID, attribute type and attribute value.
- **`RADIUS_SESSION_TIMEOUT` (`int`)** — Session timeout
- **`RADIUS_IDLE_TIMEOUT` (`int`)** — Idle timeout
- **`RADIUS_TERMINATION_ACTION` (`int`)** — Termination action
- **`RADIUS_CALLED_STATION_ID` (`int`)** — Called Station Id
- **`RADIUS_CALLING_STATION_ID` (`int`)** — Calling Station Id
- **`RADIUS_NAS_IDENTIFIER` (`int`)** — NAS ID
- **`RADIUS_PROXY_STATE` (`int`)** — Proxy State
- **`RADIUS_LOGIN_LAT_SERVICE` (`int`)** — Login LAT Service
- **`RADIUS_LOGIN_LAT_NODE` (`int`)** — Login LAT Node
- **`RADIUS_LOGIN_LAT_GROUP` (`int`)** — Login LAT Group
- **`RADIUS_FRAMED_APPLETALK_LINK` (`int`)** — Framed Appletalk Link
- **`RADIUS_FRAMED_APPLETALK_NETWORK` (`int`)** — Framed Appletalk Network
- **`RADIUS_FRAMED_APPLETALK_ZONE` (`int`)** — Framed Appletalk Zone
- **`RADIUS_CHAP_CHALLENGE` (`int`)** — Challenge
- **`RADIUS_NAS_PORT_TYPE` (`int`)** — NAS port type, one of: `RADIUS_ASYNC` `RADIUS_SYNC` `RADIUS_ISDN_SYNC` `RADIUS_ISDN_ASYNC_V120` `RADIUS_ISDN_ASYNC_V110` `RADIUS_VIRTUAL` `RADIUS_PIAFS` `RADIUS_HDLC_CLEAR_CHANNEL` `RADIUS_X_25` `RADIUS_X_75` `RADIUS_G_3_FAX` `RADIUS_SDSL` `RADIUS_ADSL_CAP` `RADIUS_ADSL_DMT` `RADIUS_IDSL` `RADIUS_ETHERNET` `RADIUS_XDSL` `RADIUS_CABLE` `RADIUS_WIRELESS_OTHER` `RADIUS_WIRELESS_IEEE_802_11`
- **`RADIUS_PORT_LIMIT` (`int`)** — Port Limit
- **`RADIUS_LOGIN_LAT_PORT` (`int`)** — Login LAT Port
- **`RADIUS_CONNECT_INFO` (`int`)** — Connect info
- **`RADIUS_ACCT_STATUS_TYPE` (`int`)** — Accounting status type, one of: `RADIUS_START` `RADIUS_STOP` `RADIUS_ACCOUNTING_ON` `RADIUS_ACCOUNTING_OFF`
- **`RADIUS_ACCT_DELAY_TIME` (`int`)** — Accounting delay time
- **`RADIUS_ACCT_INPUT_OCTETS` (`int`)** — Accounting input bytes
- **`RADIUS_ACCT_OUTPUT_OCTETS` (`int`)** — Accounting output bytes
- **`RADIUS_ACCT_SESSION_ID` (`int`)** — Accounting session ID
- **`RADIUS_ACCT_AUTHENTIC` (`int`)** — Accounting authentic, one of: `RADIUS_AUTH_RADIUS` `RADIUS_AUTH_LOCAL` `RADIUS_AUTH_REMOTE`
- **`RADIUS_ACCT_SESSION_TIME` (`int`)** — Accounting session time
- **`RADIUS_ACCT_INPUT_PACKETS` (`int`)** — Accounting input packets
- **`RADIUS_ACCT_OUTPUT_PACKETS` (`int`)** — Accounting output packets
- **`RADIUS_ACCT_TERMINATE_CAUSE` (`int`)** — Accounting terminate cause, one of: `RADIUS_TERM_USER_REQUEST` `RADIUS_TERM_LOST_CARRIER` `RADIUS_TERM_LOST_SERVICE` `RADIUS_TERM_IDLE_TIMEOUT` `RADIUS_TERM_SESSION_TIMEOUT` `RADIUS_TERM_ADMIN_RESET` `RADIUS_TERM_ADMIN_REBOOT` `RADIUS_TERM_PORT_ERROR` `RADIUS_TERM_NAS_ERROR` `RADIUS_TERM_NAS_REQUEST` `RADIUS_TERM_NAS_REBOOT` `RADIUS_TERM_PORT_UNNEEDED` `RADIUS_TERM_PORT_PREEMPTED` `RADIUS_TERM_PORT_SUSPENDED` `RADIUS_TERM_SERVICE_UNAVAILABLE` `RADIUS_TERM_CALLBACK` `RADIUS_TERM_USER_ERROR` `RADIUS_TERM_HOST_REQUEST`
- **`RADIUS_ACCT_MULTI_SESSION_ID` (`int`)** — Accounting multi session ID
- **`RADIUS_ACCT_LINK_COUNT` (`int`)** — Accounting link count

- **`RADIUS_LOGIN`**
- **`RADIUS_FRAMED`**
- **`RADIUS_CALLBACK_LOGIN`**
- **`RADIUS_CALLBACK_FRAMED`**
- **`RADIUS_OUTBOUND`**
- **`RADIUS_ADMINISTRATIVE`**
- **`RADIUS_NAS_PROMPT`**
- **`RADIUS_AUTHENTICATE_ONLY`**
- **`RADIUS_CALLBACK_NAS_PROMPT`**

- **`RADIUS_PPP`**
- **`RADIUS_SLIP`**
- **`RADIUS_ARAP`**
- **`RADIUS_GANDALF`**
- **`RADIUS_XYLOGICS`**

- **`RADIUS_COMP_NONE`**
- **`RADIUS_COMP_VJ`**
- **`RADIUS_COMP_IPXHDR`**
- **`RADIUS_COMP_STAC_LZS`**

- **`RADIUS_ASYNC`**
- **`RADIUS_SYNC`**
- **`RADIUS_ISDN_SYNC`**
- **`RADIUS_ISDN_ASYNC_V120`**
- **`RADIUS_ISDN_ASYNC_V110`**
- **`RADIUS_VIRTUAL`**
- **`RADIUS_PIAFS`**
- **`RADIUS_HDLC_CLEAR_CHANNEL`**
- **`RADIUS_X_25`**
- **`RADIUS_X_75`**
- **`RADIUS_G_3_FAX`**
- **`RADIUS_SDSL`**
- **`RADIUS_ADSL_CAP`**
- **`RADIUS_ADSL_DMT`**
- **`RADIUS_IDSL`**
- **`RADIUS_ETHERNET`**
- **`RADIUS_XDSL`**
- **`RADIUS_CABLE`**
- **`RADIUS_WIRELESS_OTHER`**
- **`RADIUS_WIRELESS_IEEE_802_11`**

- **`RADIUS_START`**
- **`RADIUS_STOP`**
- **`RADIUS_ACCOUNTING_ON`**
- **`RADIUS_ACCOUNTING_OFF`**

- **`RADIUS_AUTH_RADIUS`**
- **`RADIUS_AUTH_LOCAL`**
- **`RADIUS_AUTH_REMOTE`**

- **`RADIUS_TERM_USER_REQUEST`**
- **`RADIUS_TERM_LOST_CARRIER`**
- **`RADIUS_TERM_LOST_SERVICE`**
- **`RADIUS_TERM_IDLE_TIMEOUT`**
- **`RADIUS_TERM_SESSION_TIMEOUT`**
- **`RADIUS_TERM_ADMIN_RESET`**
- **`RADIUS_TERM_ADMIN_REBOOT`**
- **`RADIUS_TERM_PORT_ERROR`**
- **`RADIUS_TERM_NAS_ERROR`**
- **`RADIUS_TERM_NAS_REQUEST`**
- **`RADIUS_TERM_NAS_REBOOT`**
- **`RADIUS_TERM_PORT_UNNEEDED`**
- **`RADIUS_TERM_PORT_PREEMPTED`**
- **`RADIUS_TERM_PORT_SUSPENDED`**
- **`RADIUS_TERM_SERVICE_UNAVAILABLE`**
- **`RADIUS_TERM_CALLBACK`**
- **`RADIUS_TERM_USER_ERROR`**
- **`RADIUS_TERM_HOST_REQUEST`**

## RADIUS Vendor Specific Attribute Types

- **`RADIUS_VENDOR_MICROSOFT` (`int`)** — Microsoft specific vendor attributes ([RFC 2548](2548)), one of: `RADIUS_MICROSOFT_MS_CHAP_RESPONSE` `RADIUS_MICROSOFT_MS_CHAP_ERROR` `RADIUS_MICROSOFT_MS_CHAP_PW_1` `RADIUS_MICROSOFT_MS_CHAP_PW_2` `RADIUS_MICROSOFT_MS_CHAP_LM_ENC_PW` `RADIUS_MICROSOFT_MS_CHAP_NT_ENC_PW` `RADIUS_MICROSOFT_MS_MPPE_ENCRYPTION_POLICY` `RADIUS_MICROSOFT_MS_MPPE_ENCRYPTION_TYPES` `RADIUS_MICROSOFT_MS_RAS_VENDOR` `RADIUS_MICROSOFT_MS_CHAP_DOMAIN` `RADIUS_MICROSOFT_MS_CHAP_CHALLENGE` `RADIUS_MICROSOFT_MS_CHAP_MPPE_KEYS` `RADIUS_MICROSOFT_MS_BAP_USAGE` `RADIUS_MICROSOFT_MS_LINK_UTILIZATION_THRESHOLD` `RADIUS_MICROSOFT_MS_LINK_DROP_TIME_LIMIT` `RADIUS_MICROSOFT_MS_MPPE_SEND_KEY` `RADIUS_MICROSOFT_MS_MPPE_RECV_KEY` `RADIUS_MICROSOFT_MS_RAS_VERSION` `RADIUS_MICROSOFT_MS_OLD_ARAP_PASSWORD` `RADIUS_MICROSOFT_MS_NEW_ARAP_PASSWORD` `RADIUS_MICROSOFT_MS_ARAP_PASSWORD_CHANGE_REASON` `RADIUS_MICROSOFT_MS_FILTER` `RADIUS_MICROSOFT_MS_ACCT_AUTH_TYPE` `RADIUS_MICROSOFT_MS_ACCT_EAP_TYPE` `RADIUS_MICROSOFT_MS_CHAP2_RESPONSE` `RADIUS_MICROSOFT_MS_CHAP2_SUCCESS` `RADIUS_MICROSOFT_MS_CHAP2_PW` `RADIUS_MICROSOFT_MS_PRIMARY_DNS_SERVER` `RADIUS_MICROSOFT_MS_SECONDARY_DNS_SERVER` `RADIUS_MICROSOFT_MS_PRIMARY_NBNS_SERVER` `RADIUS_MICROSOFT_MS_SECONDARY_NBNS_SERVER` `RADIUS_MICROSOFT_MS_ARAP_CHALLENGE`
- **`RADIUS_MICROSOFT_MS_CHAP_RESPONSE`**
- **`RADIUS_MICROSOFT_MS_CHAP_ERROR`**
- **`RADIUS_MICROSOFT_MS_CHAP_PW_1`**
- **`RADIUS_MICROSOFT_MS_CHAP_PW_2`**
- **`RADIUS_MICROSOFT_MS_CHAP_LM_ENC_PW`**
- **`RADIUS_MICROSOFT_MS_CHAP_NT_ENC_PW`**
- **`RADIUS_MICROSOFT_MS_MPPE_ENCRYPTION_POLICY`**
- **`RADIUS_MICROSOFT_MS_MPPE_ENCRYPTION_TYPES`**
- **`RADIUS_MICROSOFT_MS_RAS_VENDOR`**
- **`RADIUS_MICROSOFT_MS_CHAP_DOMAIN`**
- **`RADIUS_MICROSOFT_MS_CHAP_CHALLENGE`**
- **`RADIUS_MICROSOFT_MS_CHAP_MPPE_KEYS`**
- **`RADIUS_MICROSOFT_MS_BAP_USAGE`**
- **`RADIUS_MICROSOFT_MS_LINK_UTILIZATION_THRESHOLD`**
- **`RADIUS_MICROSOFT_MS_LINK_DROP_TIME_LIMIT`**
- **`RADIUS_MICROSOFT_MS_MPPE_SEND_KEY`**
- **`RADIUS_MICROSOFT_MS_MPPE_RECV_KEY`**
- **`RADIUS_MICROSOFT_MS_RAS_VERSION`**
- **`RADIUS_MICROSOFT_MS_OLD_ARAP_PASSWORD`**
- **`RADIUS_MICROSOFT_MS_NEW_ARAP_PASSWORD`**
- **`RADIUS_MICROSOFT_MS_ARAP_PASSWORD_CHANGE_REASON`**
- **`RADIUS_MICROSOFT_MS_FILTER`**
- **`RADIUS_MICROSOFT_MS_ACCT_AUTH_TYPE`**
- **`RADIUS_MICROSOFT_MS_ACCT_EAP_TYPE`**
- **`RADIUS_MICROSOFT_MS_CHAP2_RESPONSE`**
- **`RADIUS_MICROSOFT_MS_CHAP2_SUCCESS`**
- **`RADIUS_MICROSOFT_MS_CHAP2_PW`**
- **`RADIUS_MICROSOFT_MS_PRIMARY_DNS_SERVER`**
- **`RADIUS_MICROSOFT_MS_SECONDARY_DNS_SERVER`**
- **`RADIUS_MICROSOFT_MS_PRIMARY_NBNS_SERVER`**
- **`RADIUS_MICROSOFT_MS_SECONDARY_NBNS_SERVER`**
- **`RADIUS_MICROSOFT_MS_ARAP_CHALLENGE`**
