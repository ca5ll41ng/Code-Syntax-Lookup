---
id: "en-php-guide-ssh2-constants"
language: "php"
lang: "en"
category: "guide"
name: "ssh2.constants"
title: "Predefined Constants"
module: "ssh2"
source_url: "https://www.php.net/manual/en/ssh2.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`SSH2_FINGERPRINT_MD5` (`int`)** — Flag to `ssh2_fingerprint()` requesting hostkey fingerprint as an MD5 hash.
- **`SSH2_FINGERPRINT_SHA1` (`int`)** — Flag to `ssh2_fingerprint()` requesting hostkey fingerprint as an SHA1 hash.
- **`SSH2_FINGERPRINT_HEX` (`int`)** — Flag to `ssh2_fingerprint()` requesting hostkey fingerprint as a string of hexits.
- **`SSH2_FINGERPRINT_RAW` (`int`)** — Flag to `ssh2_fingerprint()` requesting hostkey fingerprint as a raw string of 8-bit characters.
- **`SSH2_TERM_UNIT_CHARS` (`int`)** — Flag to `ssh2_shell()` specifying that `$width` and `$height` are provided as character sizes.
- **`SSH2_TERM_UNIT_PIXELS` (`int`)** — Flag to `ssh2_shell()` specifying that `$width` and `$height` are provided in pixel units.
- **`SSH2_DEFAULT_TERM_WIDTH` (`int`)** — Default terminal width requested by `ssh2_shell()`.
- **`SSH2_DEFAULT_TERM_HEIGHT` (`int`)** — Default terminal height requested by `ssh2_shell()`.
- **`SSH2_DEFAULT_TERM_UNIT` (`int`)** — Default terminal units requested by `ssh2_shell()`.
- **`SSH2_STREAM_STDIO` (`int`)** — Flag to `ssh2_fetch_stream()` requesting STDIO subchannel.
- **`SSH2_STREAM_STDERR` (`int`)** — Flag to `ssh2_fetch_stream()` requesting STDERR subchannel.
- **`SSH2_DEFAULT_TERMINAL` (`string`)** — Default terminal type (e.g. vt102, ansi, xterm, vanilla) requested by `ssh2_shell()`.
- **`SSH2_POLLIN` (`int`)**
- **`SSH2_POLLEXT` (`int`)**
- **`SSH2_POLLOUT` (`int`)**
- **`SSH2_POLLERR` (`int`)**
- **`SSH2_POLLHUP` (`int`)**
- **`SSH2_POLLNVAL` (`int`)**
- **`SSH2_POLL_SESSION_CLOSED` (`int`)**
- **`SSH2_POLL_CHANNEL_CLOSED` (`int`)**
- **`SSH2_POLL_LISTENER_CLOSED` (`int`)**
