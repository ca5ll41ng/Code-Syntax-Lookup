---
id: "en-php-guide-xpass-constants"
language: "php"
lang: "en"
category: "guide"
name: "xpass.constants"
title: "Predefined Constants"
module: "xpass"
source_url: "https://www.php.net/manual/en/xpass.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

Xpass extension provides various set of constants. Hash methods (`CRYPT_PREFIX_{*}`) for `crypt_gensalt()` prefix parameter. Error codes (`CRYPT_SALT_{*}`) returned by `crypt_checksalt()`. Password algorithms (`PASSWORD_{*}`) for `password_hash()` algo parameter.

- **`CRYPT_PREFIX_STD_DES` (`string`)** — The original hashing method from Unix V7, based on the DES block cipher. Because DES is cheap on modern hardware, because there are only `4096` possible salts and 2**56 distinct passphrases, which it truncates to 8 characters, it is feasible to discover any passphrase hashed with this method. It should only be used when supporting old operating systems that support no other hash generation algorithm, due to how weak DES hashes are.
- **`CRYPT_PREFIX_EXT_DES` (`string`)** — An extension of traditional DES, which eliminates the length limit, increases the salt size, and makes the time cost tunable. It originates with BSDI BSD/OS and is also available on at least NetBSD, OpenBSD, and FreeBSD due to the use of David Burren's FreeSec library. It is much better than traditional DES and bigcrypt, but still should not be used for new hashes.
- **`CRYPT_PREFIX_MD5` (`string`)** — A hash based on the MD5 algorithm, originally developed by Poul-Henning Kamp for FreeBSD. Supported on most free Unixes and newer versions of Solaris. Not as weak as the DES-based hashes below, but MD5 is so cheap on modern hardware that it should not be used for new hashes. Processing cost is not adjustable.
- **`CRYPT_PREFIX_BLOWFISH` (`string`)** — A hash based on the Blowfish block cipher, modified to have an extra-expensive key schedule. Originally developed by Niels Provos and David Mazieres for OpenBSD and also supported on recent versions of FreeBSD and NetBSD, on Solaris 10 and newer, and on several GNU/*/Linux distributions.
- **`CRYPT_PREFIX_SHA256` (`string`)** — A hash based on SHA-2 with 256-bit output, originally developed by Ulrich Drepper for GNU libc. Supported on Linux but not common elsewhere. Acceptable for new hashes. The default processing cost parameter is `5000`, which is too low for modern hardware.
- **`CRYPT_PREFIX_SHA512` (`string`)** — A hash based on SHA-2 with 512-bit output, originally developed by Ulrich Drepper for GNU libc. Supported on Linux but not common elsewhere. Acceptable for new hashes. The default processing cost parameter is `5000`, which is too low for modern hardware.
- **`CRYPT_PREFIX_SCRYPT` (`string`)** — Scrypt is a password-based key derivation function created by Colin Percival, originally for the Tarsnap online backup service. The algorithm was specifically designed to make it costly to perform large-scale custom hardware attacks by requiring large amounts of memory. In 2016, the scrypt algorithm was published by IETF as RFC 7914.
- **`CRYPT_PREFIX_GOST_YESCRYPT` (`string`)** — Gost-yescrypt uses the output from yescrypt as an input message to HMAC with the GOST R 34.11-2012 (Streebog) hash function with a 256-bit digest. Thus, yescrypt's cryptographic properties are superseded by those of the GOST hash function. This hashing method is useful in applications that need modern passphrase hashing, but have to rely on GOST algorithms. The GOST R 34.11-2012 (Streebog) hash function has been published by the IETF as RFC 6986. Acceptable for new hashes where required.
- **`CRYPT_PREFIX_YESCRYPT` (`string`)** — Yescrypt is a scalable passphrase hashing scheme designed by Solar Designer, which is based on Colin Percival's scrypt. While yescrypt's strength against password guessing attacks comes from its algorithm design, its cryptographic security is guaranteed by its use of SHA-256 on the outer layer. The SHA-256 hash function has been published by NIST in FIPS PUB 180-2 (and its subsequent revisions such as FIPS PUB 180-4) and by the IETF as RFC 4634 (and subsequently RFC 6234). Recommended for new hashes.
- **`CRYPT_PREFIX_SM3CRYPT` (`string`)** — A hash based on the ShangMi 3 hash function with 256-bit output, that uses the same design as sha256crypt and/or sha512crypt. Supported on EulerOS, Kylin, openEuler, and openKylin, but not common elsewhere. Acceptable for new hashes where required. The default processing cost parameter is 5000, which is too low for modern hardware. — Available as of 1.2.0 with libcxcrypt >= 4.5.0.
- **`CRYPT_PREFIX_SM3_YESCRYPT` (`string`)** — Sm3-yescrypt uses the output from yescrypt as an input message to HMAC with the ShangMi 3 hash function with a 256-bit digest. Thus, yescrypt's cryptographic properties are superseded by those of the ShangMi 3 hash function. This hashing method is useful in applications that need modern passphrase hashing, but have to rely on algorithms approved by the Chinese Office of State Commercial Cryptography Administration (OSCCA). The ShangMi 3 hash function has been published in Part 3: "Dedicated hash-functions" of the ISO/IEC 10118-3:2018. Acceptable for new hashes where required. — Available as of 1.2.0 with libcxcrypt >= 4.5.0.

- **`CRYPT_SALT_OK` (`int`)** — No error.
- **`CRYPT_SALT_INVALID` (`int`)** — Unknown hashing method or invalid parameters.
- **`CRYPT_SALT_METHOD_DISABLED` (`int`)** — Hashing method is no longer allowed to be used.
- **`CRYPT_SALT_METHOD_LEGACY` (`int`)** — Hashing method is no longer considered strong enough.
- **`CRYPT_SALT_TOO_CHEAP` (`int`)** — Cost parameters are considered too cheap.

- **`PASSWORD_SHA512` (`string`)** — `PASSWORD_SHA512` is used to create new password hashes using the `CRYPT_PREFIX_SHA512` algorithm.
- **`PASSWORD_YESCRYPT` (`string`)** — `PASSWORD_YESCRYPT` is used to create new password hashes using the `CRYPT_PREFIX_YESCRYPT` algorithm.
- **`PASSWORD_SM3CRYPT` (`string`)** — `PASSWORD_SM3CRYPT` is used to create new password hashes using the `CRYPT_PREFIX_SM3CRYPT` algorithm. — Available as of 1.2.0 with libcxcrypt >= 4.5.0.
- **`PASSWORD_SM3_YESCRYPT` (`string`)** — `PASSWORD_SM3_YESCRYPT` is used to create new password hashes using the `CRYPT_PREFIX_SM3_YESCRYPT` algorithm. — Available as of 1.2.0 with libcxcrypt >= 4.5.0.
