---
id: "en-php-guide-filter-constants-validation"
language: "php"
lang: "en"
category: "guide"
name: "filter.constants.validation"
title: "Validation Filters"
module: "filter"
source_url: "https://www.php.net/manual/en/filter.constants.validation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Validation Filters

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`FILTER_VALIDATE_BOOL` (`int`)** — Returns `true` for `"1"`, `1` including binary, octal and hexadecimal notations, `1.0` including scientific notation, `"true"`, `true`, `"on"`, and `"yes"`. — Returns `false` for `"0"`, `0` including binary, octal and hexadecimal notations, `0.0` including scientific notation, `"false"`, `false`, `"off"`, `"no"`, and `""`. — String values are compared case-insensitively. The return value for non-boolean values depends on the `FILTER_NULL_ON_FAILURE`. If it is set, `null` is returned, otherwise `false` is returned.
  - **`default`** — Value to return in case the filter fails.

 — Available as of PHP 8.0.0.
- **`FILTER_VALIDATE_BOOLEAN` (`int`)** —  `FILTER_VALIDATE_BOOL`. The alias was available prior to the introduction of its canonical name in PHP 8.0.0.
- **`FILTER_VALIDATE_INT` (`int`)** — Validates whether the value is an integer, on success it is converted to type `int`.
  > String values are trimmed using `trim()` before validation.


  - **`default`** — Value to return in case the filter fails.
  - **`min_range`** — Value is only valid if it is greater than or equal to the provided value.
  - **`max_range`** — Value is only valid if it is less than or equal to the provided value.


  - **`FILTER_FLAG_ALLOW_OCTAL` (`int`)** — Allow integers in octal notation (`0[0-7]+`).
  - **`FILTER_FLAG_ALLOW_HEX` (`int`)** — Allow integers in hexadecimal notation (`0x[0-9a-fA-F]+`).


- **`FILTER_VALIDATE_FLOAT` (`int`)** — Validates whether the value is a float, on success it is converted to type `float`.
  > String values are trimmed using `trim()` before validation.


  - **`default`** — Value to return in case the filter fails.
  - **`decimal`**
  - **`min_range`** — Value is only valid if it is greater than or equal to the provided value. Available as of PHP 7.4.0.
  - **`max_range`** — Value is only valid if it is less than or equal to the provided value. Available as of PHP 7.4.0.


  - **`FILTER_FLAG_ALLOW_THOUSAND` (`int`)** — Accept commas (`,`), which usually represent the thousand separator.


- **`FILTER_VALIDATE_REGEXP` (`int`)** — Validates value against the regular expression provided by the `regexp` option.
  - **`default`** — Value to return in case the filter fails.
  - **`regexp`** — Perl-compatible regular expression.


- **`FILTER_VALIDATE_URL` (`int`)** — Validates whether the URL is valid according to [RFC 2396](2396).
  - **`default`** — Value to return in case the filter fails.


  - **`FILTER_FLAG_SCHEME_REQUIRED` (`int`)** — Requires the URL to contain a scheme part.
    > *DEPRECATED* as of PHP 7.3.0 and *REMOVED* as of PHP 8.0.0. This is because it is always implied by the `FILTER_VALIDATE_URL` filter.


  - **`FILTER_FLAG_HOST_REQUIRED` (`int`)** — Requires the URL to contain a host part.
    > *DEPRECATED* as of PHP 7.3.0 and *REMOVED* as of PHP 8.0.0. This is because it is always implied by the `FILTER_VALIDATE_URL` filter for most schemes.


  - **`FILTER_FLAG_PATH_REQUIRED` (`int`)** — Requires the URL to contain a path part.
  - **`FILTER_FLAG_QUERY_REQUIRED` (`int`)** — Requires the URL to contain a query part.


  > A valid URL may not specify the HTTP protocol (`http://`). Therefore, further validation may be required to determine if the URL uses an expected protocol, e.g. `ssh://` or `mailto:`.


  > This filter only works on ASCII URLs. This means that Internationalized Domain Names (IDN) will always be rejected.


  > This filter is very permissive. For any scheme other than `http://` or `https://`, host content will be accepted without any validation, though the presence of a host is still required unless the URL has a scheme of `mailto:`, `news:`, or `file:`. Schemes are not themselves validated and may be accepted despite not corresponding to a known URL scheme, or having some other meaning in PHP (like phar://). The filter also accepts [loopback]() addresses that correspond to the current host.
  >
  > ```php <?php var_dump(filter_var('javascript://x%0aalert(1)', FILTER_VALIDATE_URL)); var_dump(filter_var('javascript://?demo', FILTER_VALIDATE_URL)); var_dump(filter_var('news:?demo', FILTER_VALIDATE_URL)); var_dump(filter_var('phar://demo', FILTER_VALIDATE_URL)); var_dump(filter_var('123://demo', FILTER_VALIDATE_URL)); var_dump(filter_var('-://demo', FILTER_VALIDATE_URL)); var_dump(filter_var('http://127.0.0.1', FILTER_VALIDATE_URL)); var_dump(filter_var('gopher://127.0.0.1', FILTER_VALIDATE_URL)); ?> ``` The above example will output: ```text string(25) "javascript://x%0aalert(1)" bool(false) string(10) "news:?demo" string(11) "phar://demo" string(10) "123://demo" string(8) "-://demo" string(16) "http://127.0.0.1" string(18) "gopher://127.0.0.1" ```


- **`FILTER_VALIDATE_DOMAIN` (`int`)** — Validates whether the domain name is valid according to [RFC 952](952), [RFC 1034](1034), [RFC 1035](1035), [RFC 1123](1034), [RFC 2732](1034), and [RFC 2181](2181).
  - **`default`** — Value to return in case the filter fails.


  - **`FILTER_FLAG_HOSTNAME` (`int`)** — Require hostnames to start with an alphanumeric character and contain only alphanumerics or hyphens.


  > This filter is very permissive. As specified in [RFC 2181](2181), a valid domain name is a string with a maximum length of 253 characters (254 if including a trailing `.` separator) and where each label (separated by a `.`) is at most 63 characters. Unless `FILTER_FLAG_HOSTNAME` is used to ensure that the domain is also a valid host name, whitespace, metacharacters, control bytes, and even NUL bytes are accepted by the filter.
  >
  > ```php <?php var_dump(filter_var("!@#$%^&*(){}[]/?=+\|`~\"'<>,", FILTER_VALIDATE_DOMAIN)); var_dump(filter_var("null byte: >\0<", FILTER_VALIDATE_DOMAIN)); var_dump(filter_var("space:> <, tab:>\t<, newline: >\n<, carriage return>\r<", FILTER_VALIDATE_DOMAIN)); ?> ``` The above example will output: ```text string(27) "!@#$%^&*(){}[]/?=+\|`~"'<>," string(14) "null byte: ><" string(52) "space:> <, tab:> <, newline: > <, carriage return> <" ```


- **`FILTER_VALIDATE_EMAIL` (`int`)** — Validates whether the value is a "valid" e-mail address. — The validation is performed against the `addr-spec` syntax in [RFC 822](822). However, comments, whitespace folding, and dotless domain names are not supported, and thus will be rejected.
  - **`default`** — Value to return in case the filter fails.


  - **`FILTER_FLAG_EMAIL_UNICODE` (`int`)** — Accepts Unicode characters in the local part. Available as of PHP 7.1.0.


  > Email validation is complex and the only true way to confirm an email is valid and exists is to send an email to the address.


- **`FILTER_VALIDATE_IP` (`int`)** — Validates value as IP address.
  - **`default`** — Value to return in case the filter fails.


  - **`FILTER_FLAG_IPV4` (`int`)** — Allow IPv4 address.
  - **`FILTER_FLAG_IPV6` (`int`)** — Allow IPv6 address.
  - **`FILTER_FLAG_NO_RES_RANGE` (`int`)** — Deny reserved addresses. — These are the ranges that are marked as `Reserved-By-Protocol` in [RFC 6890](6890). — Which for IPv4 corresponds to the following ranges: `0.0.0.0/8` `169.254.0.0/16` `127.0.0.0/8` `240.0.0.0/4` . — And for IPv6 corresponds to the following ranges: `::1/128` `::/128` `::FFFF:0:0/96` `FE80::/10` .
  - **`FILTER_FLAG_NO_PRIV_RANGE` (`int`)** — Deny private addresses. — These are IPv4 addresses which are in the following ranges: `10.0.0.0/8` `172.16.0.0/12` `192.168.0.0/16` . — These are IPv6 addresses starting with `FD` or `FC`.
  - **`FILTER_FLAG_GLOBAL_RANGE` (`int`)** — Only allow global addresses. These can be found in [RFC 6890](6890) where the `Global` attribute is `True`. Available as of PHP 8.2.0.


- **`FILTER_VALIDATE_MAC` (`int`)** — Validates whether the value is a MAC address.
  - **`default`** — Value to return in case the filter fails.
