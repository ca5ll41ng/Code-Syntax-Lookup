---
id: "en-php-guide-rnp-constants"
language: "php"
lang: "en"
category: "guide"
name: "rnp.constants"
title: "Predefined Constants"
module: "rnp"
source_url: "https://www.php.net/manual/en/rnp.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`RNP_KEYSTORE_GPG` (`string`)** — Keystore format "GPG".
- **`RNP_KEYSTORE_KBX` (`string`)** — Keystore format "KBX". For public keys only. A keybox is a file format used to store public keys along with meta information and indices.
- **`RNP_KEYSTORE_G10` (`string`)** — Keystore format "G10". For private keys.
- **`RNP_LOAD_SAVE_PUBLIC_KEYS` (`integer`)** — Load or save public keys only. Can be OR-ed with `RNP_LOAD_SAVE_SECRET_KEYS` to load both public and private keys to the FFI context or save them from the context.
- **`RNP_LOAD_SAVE_SECRET_KEYS` (`integer`)** — Load or save secret keys only. Can be OR-ed with `RNP_LOAD_SAVE_PUBLIC_KEYS` to load both public and private keys to the FFI context or save them from the context.
- **`RNP_LOAD_SAVE_PERMISSIVE` (`integer`)** — Allows to ignore bad signature/key/subkey packets during key import.
- **`RNP_LOAD_SAVE_SINGLE` (`integer`)** — If set, only the first key will be loaded.
- **`RNP_LOAD_SAVE_BASE64` (`integer`)** — Allow import of base64-encoded keys (autocrypt ones).
- **`RNP_FEATURE_SYMM_ALG` (`string`)** — List available symmetric encryption algorithms.
- **`RNP_FEATURE_AEAD_ALG` (`string`)** — List available AEAD algorithms.
- **`RNP_FEATURE_PROT_MODE` (`string`)** — List available protection modes.
- **`RNP_FEATURE_PK_ALG` (`string`)** — List available public key algorithms.
- **`RNP_FEATURE_HASH_ALG` (`string`)** — List available hash algorithms.
- **`RNP_FEATURE_COMP_ALG` (`string`)** — List available compression algorithms.
- **`RNP_FEATURE_CURVE` (`string`)** — List available elliptic curves.
- **`RNP_DUMP_MPI` (`integer`)** — Dump MPI (Multi-precision integer) values.
- **`RNP_DUMP_RAW` (`integer`)** — Dump raw packet contents as well.
- **`RNP_DUMP_GRIP` (`integer`)** — Dump key fingerprints and grips.
- **`RNP_JSON_DUMP_MPI` (`integer`)** — Dump MPI (Multi-precision integer) values.
- **`RNP_JSON_DUMP_RAW` (`integer`)** — Dump raw packet contents as well.
- **`RNP_JSON_DUMP_GRIP` (`integer`)** — Dump key fingerprints and grips.
- **`RNP_ENCRYPT_NOWRAP` (`integer`)** — Allows encryption of signed message. Message is not wrapped into literal data packet.
- **`RNP_KEY_EXPORT_ARMORED` (`integer`)** — Enable ASCII-armoring of exported data.
- **`RNP_KEY_EXPORT_PUBLIC` (`integer`)** — Export public key.
- **`RNP_KEY_EXPORT_SECRET` (`integer`)** — Export secret key.
- **`RNP_KEY_EXPORT_SUBKEYS` (`integer`)** — If primary key is being exported, all subkeys will be exported too.
- **`RNP_KEY_EXPORT_BASE64` (`integer`)** — Export base64-encoded autocrypt key instead of binary.
- **`RNP_KEY_REMOVE_PUBLIC` (`integer`)** — Remove public key.
- **`RNP_KEY_REMOVE_SECRET` (`integer`)** — Remove secret key.
- **`RNP_KEY_REMOVE_SUBKEYS` (`integer`)** — If primary key is being deleted, all of its subkeys will be removed too.
