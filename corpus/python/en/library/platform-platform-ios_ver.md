---
id: "python-en-function-platform-ios_ver"
language: "python"
lang: "en"
category: "function"
name: "ios_ver"
signature: "ios_ver(system='', release='', model='', is_simulator=False)"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/3/library/platform.html#platform.ios_ver"
license: "PSF"
updated: "2026-10-01"
---

# ios_ver

Get iOS version information and return it as a
`~collections.namedtuple` with the following attributes:

* `system` is the OS name; either `'iOS'` or `'iPadOS'`.
* `release` is the iOS version number as a string (e.g., `'17.2'`).
* `model` is the device model identifier; this will be a string like
  `'iPhone13,2'` for a physical device, or `'iPhone'` on a simulator.
* `is_simulator` is a boolean describing if the app is running on a
  simulator or a physical device.

Entries which cannot be determined are set to the defaults given as
parameters.
