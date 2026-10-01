---
id: "python-en-function-os-getrandom"
language: "python"
lang: "en"
category: "function"
name: "getrandom"
signature: "getrandom(size, flags=0)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.getrandom"
license: "PSF"
updated: "2026-10-01"
---

# getrandom

Get up to *size* random bytes. The function can return less bytes than
requested.

These bytes can be used to seed user-space random number generators or for
cryptographic purposes.

`getrandom()` relies on entropy gathered from device drivers and other
sources of environmental noise. Unnecessarily reading large quantities of
data will have a negative impact on  other users  of the `/dev/random` and
`/dev/urandom` devices.

The flags argument is a bit mask that can contain zero or more of the
following values ORed together: :py`os.GRND_RANDOM` and
:py`GRND_NONBLOCK`.

See also the `Linux getrandom() manual page
<https://man7.org/linux/man-pages/man2/getrandom.2.html>`_.

availability:: Linux >= 3.17.

> *Added in 3.6*
